import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, label, timestamp, printf, errors } = format;

// Custom log format
const myFormat = printf(({ level, message, label, timestamp, stack }) => {
  const date = new Date(timestamp as string | number);
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${
    date.toISOString().split('T')[0]
  } ${hour}:${minutes}:${seconds} [${label}] ${level}: ${stack || message}`;
});

// Common console transport
const commonConsoleTransport = new transports.Console({
  format: combine(format.colorize(), myFormat), // Colorized logs for console
});

// Daily rotate file options
const dailyRotateFileOptions = (type: string) => ({
  dirname: path.join(process.cwd(), 'logs', 'winston', type),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m', // 20 MB
  maxFiles: '3d', // Retain logs for 3 days
});

// Informational logger (for info, warn)
export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'APP' }), timestamp(), myFormat),
  transports: [
    commonConsoleTransport, // Console transport

    // Daily rotate file for success logs
    new DailyRotateFile({
      ...dailyRotateFileOptions('successes'),
      filename: `app-%DATE%-success.log`,
    }),
  ],
});

// Error logger (for regular errors)
export const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'ERROR' }),
    timestamp(),
    errors({ stack: true }),
    myFormat
  ),
  transports: [
    commonConsoleTransport, // Console transport

    // Daily rotate file for error logs
    new DailyRotateFile({
      ...dailyRotateFileOptions('errors'),
      filename: `app-%DATE%-error.log`,
    }),
  ],
});

// Exception logger (for uncaught exception)
export const exceptionLogger = createLogger({
  format: combine(
    label({ label: 'EXCEPTION' }),
    timestamp(),
    errors({ stack: true }),
    myFormat
  ),
  exceptionHandlers: [
    commonConsoleTransport,

    // Daily rotate file for exception logs
    new DailyRotateFile({
      ...dailyRotateFileOptions('errors'),
      filename: `app-%DATE%-exception.log`,
    }),
  ],
});

// Rejection logger (for unhandled promise rejection)
export const rejectionLogger = createLogger({
  format: combine(
    label({ label: 'REJECTION' }),
    timestamp(),
    errors({ stack: true }),
    myFormat
  ),
  rejectionHandlers: [
    commonConsoleTransport,

    // Daily rotate file for rejection logs
    new DailyRotateFile({
      ...dailyRotateFileOptions('errors'),
      filename: `app-%DATE%-rejection.log`,
    }),
  ],
});

/**
 * 📂 logs/winston/
 *  📂 successes/
 *      📄 app-%DATE%-success.log
 *  📂 errors/
 *      📄 app-%DATE%-error.log
 *      📄 app-%DATE%-exceptions.log
 *      📄 app-%DATE%-rejections.log
 */
