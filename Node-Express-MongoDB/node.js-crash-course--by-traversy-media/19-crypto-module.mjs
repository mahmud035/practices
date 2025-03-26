import crypto from 'crypto';

// createHash()
const hashedPassword = crypto.createHash('sha256');
hashedPassword.update('password123');
console.log(hashedPassword.digest('hex'));

// randomBytes()
crypto.randomBytes(32, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

console.log(crypto.randomBytes(32).toString('hex'));

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
