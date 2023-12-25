import { Request, Response, NextFunction } from 'express';
import { createFileLogger } from '../services/fileLoggerService';
import { LogLevel } from '../config/logger';


const requestLogFilePath = 'request.log';
const requestLogLevel = LogLevel.INFO; 
const fileLogger = createFileLogger(requestLogFilePath, requestLogLevel);


const fileLoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const requestBody =
    req.method === 'POST' || req.method === 'PUT' ? JSON.stringify(req.body) : '';

  const logMessage = `Method: ${method} | URL: ${url} | Request Body: ${requestBody}`;
  fileLogger.log(LogLevel.INFO,logMessage);
  try {
   next();
   fileLogger.info(logMessage);

  } catch (error :any) {
    console.log('hello na sir')
    const errorMessage = `Error processing request: ${error.message}`;
    fileLogger.error(errorMessage);
    
    res.status(500).json({ error: 'Internal Server Error' } as any);
  }

};

export default fileLoggerMiddleware;
