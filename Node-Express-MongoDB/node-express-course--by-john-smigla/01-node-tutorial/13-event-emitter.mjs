import { EventEmitter } from 'events';

/**
 * NOTE:
 * `EventEmitter` class is a core module in Node.js that allows you to create and manage events.
 *
 * const eventEmitter = new EventEmitter();
 *
 * This object exposes, among many others, the `on` and `emit` methods.
 ** `emit` is used to trigger an event
 ** `on` is used to add a callback function that's going to be executed when the event is triggered
 *
 * The `on` method can have multiple callbacks.
 * The order of execution of the callbacks is FIFO (First In, First Out).
 *
 * The `emit` method can have multiple arguments.
 * The arguments are passed to the callbacks in the order they are defined.
 *
 * Documentation: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
 */

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('Started');
});

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.on('response', (name, id) => {
  console.log(`Data received for user ${name} with id ${id}`);
});

eventEmitter.on('response', () => {
  console.log('Some other logic here');
});

eventEmitter.emit('start', 1, 100);
eventEmitter.emit('response', 'John', 34);
