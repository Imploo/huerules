import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IRule, IBody, IAction, IPayload, IPayloadAction} from './rule';

@Injectable()
export class RulesService {
  private _bridgeUrl = 'http://192.168.178.22/api/BDJo7SGB-6KsWHHAaXZidJNuboQejknxnh6ruEWe/rules';
  private _dummyUrl = 'api/rules/dummy.json';
  private _responseUrl = 'api/rules/response.json';

  constructor(private _http: HttpClient) {
  }

  getRules(): Observable<IRule[]> {
    return this._http.get<IRule[]>(this._bridgeUrl);
  }

  returnDummy(): Observable<IRule[]> {
    return this._http.get<IRule[]>(this._dummyUrl);
  }

  public parseRules(rules: IRule[]): IRule[] {
    return Object.keys(rules).map(i => {
      const rule = rules[i];
      rule.id = +i;
      for (const action of rule.actions) {
        action.body = this.convertToBodyArray(action.body);
      }
      return rule;
    });
  }

  save(rule: IRule): Observable<Response> {
    if (rule.id) {
      return this.putRule(rule);
    }
    return this.postRule(rule);
  }

  private postRule(rule: IRule): Observable<any> {
    return this._http.post(this._bridgeUrl, this.mapToPayload(rule));
  }

  private putRule(rule: IRule): Observable<any> {
    const postUrl = this._bridgeUrl + '/' + rule.id;
    return this._http.put(postUrl, this.mapToPayload(rule));
  }

  private mapToPayload(rule: IRule): IPayload {
    const data = <IPayload>{};
    data.name = rule.name;
    data.actions = this.convertToPayloadAction(rule.actions);
    data.conditions = rule.conditions;
    data.status = rule.status;
    console.log(JSON.stringify(data));
    return data;
  }

  convertToPayloadAction(data: IAction[]): IPayloadAction[] {
    const payloadActions = [];
    for (const action of data) {
      const payload = <IPayloadAction>{};
      payload.address = action.address;
      payload.method = action.method;
      payload.body = {};
      for (const body of action.body) {
        payload.body[body.key] = this.convertToCorrectType(body.value);
      }
      payloadActions.push(payload);
    }
    return payloadActions;
  }

  convertToBodyArray(data: any): IBody[] {
    const bodyEntries = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        bodyEntries.push({key: key, value: data[key]});
      }
    }
    return bodyEntries;
  }

  private convertToCorrectType = (val: string | number | boolean): string | number | boolean => {
    if (typeof(val) === typeof(true)) {
      return val;
    }
    if (val === 'true') {
      return true;
    }
    if (val === 'false') {
      return false;
    }
    const num = +val;
    if (!isNaN(num)) {
      return num;
    }
    return val;
  }

  delete(id: number): Observable<any> {
    return this._http.delete(this._bridgeUrl + '/' + id);
  }
}
