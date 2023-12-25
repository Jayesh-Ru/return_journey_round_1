import { Logger, LogLevel } from '../config/logger';


export const createFileLogger = (filePath: string, logLevel: LogLevel): Logger => {
  return new Logger(filePath, logLevel);
};


export { LogLevel };

