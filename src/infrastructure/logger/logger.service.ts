import { Injectable, ConsoleLogger } from '@nestjs/common';
import { ILogger } from '../../domain/logger/logger.interface';

@Injectable()
export class LoggerService implements ILogger {
  debug(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[DEBUG] ${message}`, context);
    }
  }

  log(context: string, message: string) {
    console.log(`[INFO] ${message}`, context);
  }

  error(context: string, message: string, trace?: string) {
    console.error(`[ERROR] ${message}`, trace, context);
  }

  warn(context: string, message: string) {
    console.warn(`[WARN] ${message}`, context);
  }

  verbose(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      //console.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
