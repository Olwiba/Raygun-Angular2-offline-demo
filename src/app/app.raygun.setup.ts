import rg4js from 'raygun4js';
import { ErrorHandler } from '@angular/core';

const VERSION_NUMBER = '1.0.0.0';
rg4js('apiKey', 'ENTER_API_KEY_HERE');
rg4js('setVersion', VERSION_NUMBER);
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);
rg4js('saveIfOffline', true);

// Create a new ErrorHandler and report and an issue straight to Raygun
export class RaygunErrorHandler implements ErrorHandler {
  handleError(e: any) {
    rg4js('send', {
      error: e,
    });
  }
}