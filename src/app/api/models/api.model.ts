import {IRule} from './rule.model';
import {IResourcelink} from './resourcelink.model';

export interface ApiModel {
  config: any;
  groups: {[id: string]: any};
  lights: {[id: string]: any};
  rules: {[id: string]: IRule};
  sensors: {[id: string]: any};
  resourcelinks: IResourcelink[];
}

export interface ResponseModel {
  success?: any;
  error?: any;
}

