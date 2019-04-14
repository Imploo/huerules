import {IRule} from '../rules/rule';

export interface ApiModel {
  config: any;
  groups: {[id: string]: any};
  lights: {[id: string]: any};
  rules: {[id: string]: IRule};
  sensors: {[id: string]: any};
}

export interface ResponseModel {
  success?: any;
  error?: any;
}
