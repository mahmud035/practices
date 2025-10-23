import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, label, printf, colorize } = format;

// Custom log format
const logFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp as string | number);
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${
    date.toISOString().split('T')[0]
  } ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});

// Success logger
const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'DOCKER' }), timestamp(), logFormat),
  transports: [
    // Colorized logs for terminal console
    new transports.Console({
      format: combine(
        colorize({ all: true }),
        label({ label: 'DOCKER' }),
        timestamp(),
        logFormat
      ),
    }),
    // Daily rotate file for success logs
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'docker-%DATE%-success.log'
      ),
      datePattern: 'YYYY-MM-DD-HH-mm-ss',
      zippedArchive: false,
      maxSize: '20m', // 20 MB
      maxFiles: '14d', // 14 days
    }),
  ],
});

// Error logger
const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'DOCKER' }), timestamp(), logFormat),
  transports: [
    new transports.Console({
      format: combine(
        colorize({ all: true }),
        label({ label: 'DOCKER' }),
        timestamp(),
        logFormat
      ),
    }),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'docker-%DATE%-error.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: false,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { errorLogger, logger };

/**
 * 📂 logs/winston/
 *  📂 successes/
 *      📄 docker-%DATE%-success.log
 *  📂 errors/
 *      📄 docker-%DATE%-error.log
 *      📄 docker-%DATE%-exceptions.log
 *      📄 docker-%DATE%-rejections.log
 */
