import {Injectable} from '@angular/core';
import {ResponseModel} from '../api/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: ResponseModel[];
  public shouldKeepMessageOpen = false;

  constructor() {
    console.count('service created');
  }

  public hasError(): boolean {
    if (!this.message) {
      return false;
    }
    const json = JSON.stringify(this.message);
    return json.indexOf('error') > -1;
  }

  public setMessage(message: ResponseModel[]): void {
    this.shouldKeepMessageOpen = false;
    this.message = message;

    setTimeout(() => {
      if (!this.hasError() && !this.shouldKeepMessageOpen) {
        this.message = null;
      }
    }, 3000);
  }
}
