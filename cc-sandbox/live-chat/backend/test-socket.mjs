/**
 * Batch 2 gate test — exercises the full socket event lifecycle.
 * Run with: node test-socket.mjs
 * Expects the server to already be running on localhost:5000.
 */
import { io } from 'socket.io-client';

const URL = 'http://localhost:5000';
const PASS = '\x1b[32mPASS\x1b[0m';
const FAIL = '\x1b[31mFAIL\x1b[0m';

let failures = 0;

function assert(label, condition) {
  if (condition) {
    console.log(`  ${PASS}  ${label}`);
  } else {
    console.log(`  ${FAIL}  ${label}`);
    failures++;
  }
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function run() {
  console.log('\n--- Batch 2 Socket Gate ---\n');

  const alice = io(URL, { transports: ['websocket'] });
  const bob = io(URL, { transports: ['websocket'] });

  await Promise.all([
    new Promise((r) => alice.on('connect', r)),
    new Promise((r) => bob.on('connect', r)),
  ]);
  console.log('Both clients connected.\n');

  // ── 1. Alice joins general ───────────────────────────────────────────────
  console.log('1. Alice joins general');
  const aliceRoomUsers = new Promise((r) => alice.once('room-users', r));
  alice.emit('join-room', { username: 'Alice', room: 'general' });
  const roomUsers1 = await aliceRoomUsers;
  assert('room-users emitted to Alice after join', Array.isArray(roomUsers1));
  assert('Alice is in room-users', roomUsers1.includes('Alice'));

  // ── 2. Bob joins general — Alice receives user-joined ───────────────────
  console.log('\n2. Bob joins general');
  const userJoinedPromise = new Promise((r) => alice.once('user-joined', r));
  const bobRoomUsers = new Promise((r) => bob.once('room-users', r));
  bob.emit('join-room', { username: 'Bob', room: 'general' });
  const [userJoinedData, roomUsers2] = await Promise.all([userJoinedPromise, bobRoomUsers]);
  assert('Alice receives user-joined when Bob joins', userJoinedData.username === 'Bob');
  assert('user-joined carries room name', userJoinedData.room === 'general');
  assert('user-joined carries system message doc', userJoinedData.message?.type === 'system');
  assert('room-users now contains both Alice and Bob', roomUsers2.includes('Alice') && roomUsers2.includes('Bob'));

  // ── 3. Alice sends a message — both receive it ───────────────────────────
  console.log('\n3. Alice sends a message');
  const aliceMsg = new Promise((r) => alice.once('receive-message', r));
  const bobMsg = new Promise((r) => bob.once('receive-message', r));
  alice.emit('send-message', { content: 'Hello Bob!' });
  const [msgToAlice, msgToBob] = await Promise.all([aliceMsg, bobMsg]);
  assert('Alice receives own message back (DB-confirmed)', msgToAlice.content === 'Hello Bob!');
  assert('Bob receives the message', msgToBob.content === 'Hello Bob!');
  assert('Message has _id from DB', !!msgToAlice._id);
  assert('Message has correct type', msgToAlice.type === 'message');

  // ── 4. Typing / stop-typing ──────────────────────────────────────────────
  console.log('\n4. Typing indicators');
  const typingPromise = new Promise((r) => bob.once('typing', r));
  alice.emit('typing');
  const typingData = await typingPromise;
  assert('Bob receives typing from Alice', typingData.username === 'Alice');

  const stopTypingPromise = new Promise((r) => bob.once('stop-typing', r));
  alice.emit('stop-typing');
  const stopTypingData = await stopTypingPromise;
  assert('Bob receives stop-typing from Alice', stopTypingData.username === 'Alice');

  // ── 5. Alice disconnects — Bob receives user-left ───────────────────────
  console.log('\n5. Alice disconnects');
  const userLeftPromise = new Promise((r) => bob.once('user-left', r));
  const roomUsersAfterLeave = new Promise((r) => bob.once('room-users', r));
  alice.disconnect();
  const [userLeftData, roomUsers3] = await Promise.all([userLeftPromise, roomUsersAfterLeave]);
  assert('Bob receives user-left when Alice disconnects', userLeftData.username === 'Alice');
  assert('user-left carries system message doc', userLeftData.message?.type === 'system');
  assert('room-users updated — only Bob remains', roomUsers3.includes('Bob') && !roomUsers3.includes('Alice'));

  // ── 6. Explicit leave-room ───────────────────────────────────────────────
  console.log('\n6. Carol joins then explicitly leaves');
  const carol = io(URL, { transports: ['websocket'] });
  await new Promise((r) => carol.on('connect', r));
  carol.emit('join-room', { username: 'Carol', room: 'general' });
  await wait(300);

  const carolLeftPromise = new Promise((r) => bob.once('user-left', r));
  carol.emit('leave-room');
  const carolLeftData = await carolLeftPromise;
  assert('Bob receives user-left on explicit leave-room', carolLeftData.username === 'Carol');

  carol.disconnect();
  bob.disconnect();

  await wait(200);

  console.log(`\n${failures === 0 ? PASS : FAIL}  ${failures === 0 ? 'All assertions passed.' : `${failures} assertion(s) failed.`}\n`);
  process.exit(failures > 0 ? 1 : 0);
}

run().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
