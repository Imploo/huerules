import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';

import { IRule } from './rule'

@Injectable()
export class RulesService {
    private _bridgeUrl = 'http://192.168.2.1/api/BDJo7SGB-6KsWHHAaXZidJNuboQejknxnh6ruEWe/rules';
    private _dummyUrl = 'api/rules/dummy.json';
    private _responseUrl = 'api/rules/response.json';

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor(private _http: Http) { }

    getRules(): Observable<IRule[]> {
        return this._http.get(this._bridgeUrl)
            .map(this.mapData)
            .timeout(1000);
    }

    returnDummy(): Observable<IRule[]> {
        return this._http.get(this._dummyUrl)
            .map(this.mapData);
    }

    returnResponse(): Observable<Response> {
        return this._http.get(this._responseUrl);
    }

    mapData(response: Response): IRule[] {
        let json = response.json();
        let result = <IRule[]>Object.keys(json).map(key => {
            let value = <IRule>json[key];
            value.id = +key;
            return value;
        });
        return result;
    }

    save(rule: IRule): Observable<Response> {
        let postUrl = this._bridgeUrl + '/' + rule.id;
        return this._http.put(postUrl, this.mapToPayload(rule))
            .timeout(2000);
    }

    private mapToPayload(rule: IRule): IRule {
        var data = <IRule>{};
        data.name = rule.name;
        data.actions = rule.actions;
        data.conditions = rule.conditions;
        return data;
    }
}