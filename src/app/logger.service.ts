import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() {
  }

  log(message) {
    console.log(message);
  }

  error(message) {
    console.error(message);
  }

  warn(message) {
    console.warn(message);
  }
}
