import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IAction, IBody, IPayload, IPayloadAction, IRule} from './rule';
import {ApiService} from '../api/api.service';
import {Types} from '../api/types.model';
import {ResponseModel} from '../api/api.model';

@Injectable()
export class RulesService {

  constructor(private _http: HttpClient, private apiService: ApiService) {
  }

  getRules(): Observable<IRule[]> {
    return this.apiService.getType(Types.rules);
  }

  public parseRules(rules: IRule[]): IRule[] {
    if (!rules || rules.length === 0) {
      return rules;
    }

    return Object.keys(rules).map(i => {
      const rule = rules[i];
      rule.id = +i;
      for (const action of rule.actions) {
        action.body = this.convertToBodyArray(action.body);
      }
      return rule;
    });
  }

  save(rule: IRule): Observable<ResponseModel[]> {
    if (rule.id) {
      return this.putRule(rule);
    }
    return this.postRule(rule);
  }

  private postRule(rule: IRule): Observable<any> {
    return this.apiService.postRule(this.mapToPayload(rule));
  }

  private putRule(rule: IRule): Observable<any> {
    return this.apiService.putRule(this.mapToPayload(rule), rule.id);
  }

  private mapToPayload(rule: IRule): IPayload {
    const data = <IPayload>{};
    data.name = rule.name;
    data.actions = rule.actions && rule.actions.length > 0 ? this.convertToPayloadAction(rule.actions) : [];
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
    return this.apiService.deleteRule(id);
  }
}
