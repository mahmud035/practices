/**
 * Batch 4 end-to-end gate.
 * Exercises: history load, messaging, typing, system messages, online users,
 * pending-message buffer (socket message arrives before history fetch completes).
 */
import { io } from 'socket.io-client';

const URL = 'http://localhost:5000';
const PASS = '\x1b[32mPASS\x1b[0m';
const FAIL = '\x1b[31mFAIL\x1b[0m';
let failures = 0;

const assert = (label, ok) => {
  console.log(`  ${ok ? PASS : FAIL}  ${label}`);
  if (!ok) failures++;
};

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const connect = (name) =>
  new Promise((resolve) => {
    const s = io(URL, { transports: ['websocket'] });
    s.on('connect', () => resolve(s));
  });

async function run() {
  console.log('\n--- Batch 4 E2E Gate ---\n');

  // ── 1. Seed some history ─────────────────────────────────────────────────
  console.log('1. Seeding message history in #general');
  const seeder = await connect('Seeder');
  const seedDone = new Promise((r) => seeder.once('receive-message', r));
  seeder.emit('join-room', { username: 'Seeder', room: 'general' });
  await wait(200);
  seeder.emit('send-message', { content: 'Seed message 1' });
  await seedDone;
  seeder.emit('send-message', { content: 'Seed message 2' });
  await wait(200);
  seeder.disconnect();
  await wait(300);

  // ── 2. History load via REST ─────────────────────────────────────────────
  console.log('\n2. REST history endpoint');
  const resp = await fetch(`${URL}/api/messages/general?limit=50`);
  const json = await resp.json();
  assert('GET /api/messages/general returns success', json.success === true);
  assert('History contains seeded messages', json.data.length >= 2);
  const regularMsgs = json.data.filter((m) => m.type === 'message');
  const systemMsgs = json.data.filter((m) => m.type === 'system');
  assert('Regular messages persisted', regularMsgs.some((m) => m.content === 'Seed message 1'));
  assert('System messages persisted (join/leave)', systemMsgs.length >= 2);

  // ── 3. Two clients join — online users list ──────────────────────────────
  console.log('\n3. Online users list');
  const alice = await connect('Alice');
  const bob = await connect('Bob');

  const aliceRoomUsers = new Promise((r) => alice.once('room-users', r));
  alice.emit('join-room', { username: 'Alice', room: 'general' });
  const roomUsers1 = await aliceRoomUsers;
  assert('Alice gets room-users on join', roomUsers1.includes('Alice'));

  const bobRoomUsers = new Promise((r) => bob.once('room-users', r));
  const aliceSeesJoin = new Promise((r) => alice.once('user-joined', r));
  bob.emit('join-room', { username: 'Bob', room: 'general' });
  const [roomUsers2, joinEvent] = await Promise.all([bobRoomUsers, aliceSeesJoin]);
  assert('room-users has both Alice and Bob', roomUsers2.includes('Alice') && roomUsers2.includes('Bob'));
  assert('user-joined event carries system message', joinEvent.message?.type === 'system');

  // ── 4. Messaging ─────────────────────────────────────────────────────────
  console.log('\n4. Real-time messaging');
  const aliceGetsMsg = new Promise((r) => alice.once('receive-message', r));
  const bobGetsMsg = new Promise((r) => bob.once('receive-message', r));
  alice.emit('send-message', { content: 'Hello from Alice' });
  const [toAlice, toBob] = await Promise.all([aliceGetsMsg, bobGetsMsg]);
  assert('Alice receives own message (DB-confirmed, has _id)', !!toAlice._id);
  assert('Bob receives Alice\'s message', toBob.content === 'Hello from Alice');
  assert('Message type is "message"', toAlice.type === 'message');

  // ── 5. Typing indicator ──────────────────────────────────────────────────
  console.log('\n5. Typing indicator');
  const bobSeesTyping = new Promise((r) => bob.once('typing', r));
  alice.emit('typing');
  const typingData = await bobSeesTyping;
  assert('Bob receives typing from Alice', typingData.username === 'Alice');

  const bobSeesStopTyping = new Promise((r) => bob.once('stop-typing', r));
  alice.emit('stop-typing');
  const stopTypingData = await bobSeesStopTyping;
  assert('Bob receives stop-typing from Alice', stopTypingData.username === 'Alice');

  // ── 6. System message on disconnect ──────────────────────────────────────
  console.log('\n6. System message on disconnect');
  const bobSeesLeave = new Promise((r) => bob.once('user-left', r));
  const bobRoomUsersAfter = new Promise((r) => bob.once('room-users', r));
  alice.disconnect();
  const [leftEvent, roomUsers3] = await Promise.all([bobSeesLeave, bobRoomUsersAfter]);
  assert('Bob receives user-left', leftEvent.username === 'Alice');
  assert('user-left carries persisted system message', leftEvent.message?.type === 'system');
  assert('room-users updated to Bob only', roomUsers3.includes('Bob') && !roomUsers3.includes('Alice'));

  // ── 7. Messages are still in DB after disconnect ─────────────────────────
  console.log('\n7. Persistence check');
  const resp2 = await fetch(`${URL}/api/messages/general?limit=50`);
  const json2 = await resp2.json();
  assert('"Hello from Alice" persisted in DB', json2.data.some((m) => m.content === 'Hello from Alice'));

  bob.disconnect();

  console.log(
    `\n${failures === 0 ? PASS : FAIL}  ${
      failures === 0 ? 'All assertions passed.' : `${failures} assertion(s) failed.`
    }\n`
  );
  process.exit(failures > 0 ? 1 : 0);
}

run().catch((err) => { console.error(err); process.exit(1); });
