import {Injectable, Type} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, timeout} from 'rxjs/operators';
import {Types} from './types.model';
import {IPayload} from '../rules/rule';
import {ApiModel} from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiData: ReplaySubject<ApiModel> = new ReplaySubject<ApiModel>();
  private dummyActive: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  private hue = 'http://192.168.2.3/api/BDJo7SGB-6KsWHHAaXZidJNuboQejknxnh6ruEWe/';
  private dummy = 'api/dummy/dummy.json';
  private initialized = false;

  constructor(private http: HttpClient) {
  }

  public get apiData$(): Observable<ApiModel> {
    if (!this.initialized) {
      this.refresh();
    }
    return this.apiData.asObservable();
  }

  public get dummyActive$(): Observable<boolean> {
    return this.dummyActive.asObservable();
  }

  public refresh(): void {
    this.initialized = true;
    this.http.get<ApiModel>(this.hue)
      .pipe(
        timeout(1000)
      )
      .subscribe(body => {
        if (body && body[0] && body[0].error) {
          this.loadDummy();
        } else {
          this.apiData.next(body);
        }
      },
      () => this.loadDummy());
  }

  private loadDummy() {
    this.hue = this.dummy;
    this.dummyActive.next(true);
    this.http.get<ApiModel>(this.dummy).subscribe(dummy => {
      this.apiData.next(dummy);
    });
  }

  public getType(type: Types): Observable<any> {
    if (!this.initialized) {
      this.refresh();
    }
    return this.apiData.pipe(
      map(data => {
        return data[type];
      })
    );
  }

  public postRule(payload: IPayload): Observable<any> {
    return this.http.post(this.hue + Types.rules, payload);
  }

  public putRule(payload: IPayload, id: number): Observable<any> {
    return this.http.put(`${this.hue + Types.rules}/${id}`, payload);
  }

  public deleteRule(id: number): Observable<any> {
    return this.http.delete(`${this.hue + Types.rules}/${id}`);
  }
}
