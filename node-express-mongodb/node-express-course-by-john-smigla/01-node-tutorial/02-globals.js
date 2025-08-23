// GLOBALS - NO WINDOW!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//   console.log('Hello, world!');
// }, 2000);

// setTimeout(() => {
//   console.log('Hello, world!');
// }, 2000);

// console.log(module);
// console.log(require);
// console.log(process);

//* Process Object Details

// argv - command line arguments
console.log(process.argv);
console.log(process.argv[1]);

// process.env - environment variables
console.log(process.env.SystemDrive);

// pid - process id
console.log(process.pid);

// cwd() - current working directory
console.log(process.cwd());

// title - title of the process
console.log(process.title);

// memoryUsage() - memory usage of the process
console.log(process.memoryUsage());

// update() - update the process
console.log(process.uptime());

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

// exit() - exit the process
process.exit(0);

// console.log('Hello from after exit'); // This will not be executed
