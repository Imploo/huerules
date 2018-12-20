import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrlSubject: ReplaySubject<string> = new ReplaySubject<string>();
  public baseUrl: Observable<string> = this.baseUrlSubject.asObservable();
  constructor() {
    this.init();
  }

  private init(): void {

  }
}
