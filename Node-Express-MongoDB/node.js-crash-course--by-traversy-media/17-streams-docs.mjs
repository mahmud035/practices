import { once } from 'events';
import { Readable, Writable } from 'stream';

{
  // Basic Readable Stream
  class MyReadableStream extends Readable {
    #count = 0;
    _read(size) {
      this.push(':-)');
      if (++this.#count === 5) {
        this.push(null);
      }
    }
  }

  // const stream = new MyStream();

  // stream.on('data', (chunk) => {
  //   console.log(chunk.toString());
  // });

  // Advanced Control with the readable Event
  const stream = new MyReadableStream({
    highWaterMark: 1,
  });

  stream.on('readable', () => {
    console.log('>> readable event');
    let chunk;
    while ((chunk = stream.read()) !== null) {
      console.log(chunk.toString()); // Process the chunk
    }
  });

  stream.on('end', () => console.log('>> end event'));
}

{
  // Creating a Writable Stream

  class MyWritableStream extends Writable {
    constructor() {
      super({ highWaterMark: 10 }); // 10 bytes
    }

    _write(data, encoding, callback) {
      process.stdout.write(data.toString().toUpperCase() + '\n', callback);
    }
  }

  const stream = new MyWritableStream();

  for (let i = 0; i < 10; i++) {
    const waitDrain = !stream.write('hello');

    if (waitDrain) {
      console.log('>> wait for drain');
      await once(stream, 'drain');
    }
  }

  stream.end('world');
}
