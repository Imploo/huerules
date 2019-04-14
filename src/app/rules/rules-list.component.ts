import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RulesService} from './rules.service';
import {IAction, ICondition, IRule} from './rule';
import {ResponseModel} from '../api/api.model';
import {ApiService} from '../api/api.service';

@Component({
  moduleId: module.id,
  selector: 'app-rules-list',
  templateUrl: 'rules-list.component.html',
  styleUrls: ['rules-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RulesListComponent implements OnInit {

  rules: IRule[];
  errorMessage: string;
  operators: string[] = ['eq', 'lt', 'gt', 'dx', 'ddx', 'in'];
  dummyActive = false;

  constructor(private _rulesService: RulesService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.errorMessage = '';
    this._rulesService.getRules()
      .subscribe(rules => {
        this.rules = this._rulesService.parseRules(rules);
      });
  }

  save(rule: IRule): void {
    this._rulesService.save(rule)
      .subscribe(
        ok => {
          this.parseMessage(ok);
          if (!this.errorMessage.includes('error')) {
            this.apiService.refresh();
          }
        }, this.parseMessage);
  }

  private parseMessage = (error: ResponseModel[]): void => {
    this.errorMessage = error.map(err => {
      const delim = '<br/>';
      if (err.success) {
        return 'Success! ' + JSON.stringify(err.success) + delim;
      } else if (err.error) {
        return 'Error! ' + JSON.stringify(err.error) + delim;
      }
    }) + '';
    console.log(this.errorMessage);
  }

  newCondition(rule: IRule): void {
    if (!rule.conditions) {
      rule.conditions = [];
    }
    rule.conditions.push(<ICondition>{});
  }

  newAction(rule: IRule): void {
    if (!rule.actions) {
      rule.actions = [];
    }

    rule.actions.push(<IAction>{method: 'PUT'});
  }

  newRule(): void {
    this.rules.push(<IRule>{});
  }

  removeRule(rule: IRule): void {
    if (rule.id) {
      this._rulesService.delete(rule.id)
        .subscribe(
          ok => {
            this.parseMessage(ok);
            if (!this.errorMessage.includes('error')) {
              this.apiService.refresh();
            }
          }, this.parseMessage);
    } else {
      const index = this.rules.findIndex(x => x.name === rule.name);
      if (index > -1) {
        this.rules.splice(index, 1);
      }
    }
  }

  removeCondition(rule: IRule, condition: ICondition): void {
    const index: number = rule.conditions.findIndex(x => x.address === condition.address && x.operator === condition.operator);
    if (index > -1) {
      rule.conditions.splice(index, 1);
    }
  }
}
