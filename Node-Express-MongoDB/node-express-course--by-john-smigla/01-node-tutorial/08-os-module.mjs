import os from 'os';

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds\n`);

const currentOS = {
  name: os.type(),
  version: os.version(),
  release: os.release(),
  hostname: os.hostname(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
