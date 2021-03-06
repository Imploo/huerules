import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RulesService} from './rules.service';
import {ApiService} from '../api/api.service';
import {MatSlideToggleChange} from '@angular/material';
import {MessageService} from '../message/message.service';
import {ResponseModel} from '../api/models/api.model';
import {IAction, ICondition, IRule} from '../api/models/rule.model';

@Component({
  moduleId: module.id,
  selector: 'app-rules-list',
  templateUrl: 'rules-list.component.html',
  styleUrls: ['rules-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RulesListComponent implements OnInit {

  rules: IRule[];
  activeRule: IRule;
  operators: string[] = ['eq', 'lt', 'gt', 'dx', 'ddx', 'in'];
  public search: string;

  constructor(
    private _rulesService: RulesService,
    public apiService: ApiService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this._rulesService.getRules()
      .subscribe(rules => {
        this.rules = this._rulesService.parseRules(rules);
        if (!this.activeRule && this.rules && this.rules.length > 0) {
          this.activeRule = this.rules[0];
        }
      });
  }

  save(rule: IRule): void {
    this._rulesService.save(rule)
      .subscribe(
        ok => this.processResponse(ok),
        (error) => this.messageService.setMessage(error));
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
    this.activeRule = <IRule>{};
  }

  removeRule(rule: IRule): void {
    if (!confirm(`Are you sure you want to delete rule ${rule.name}?`)) {
      return;
    }
    if (rule.id) {
      this._rulesService.delete(rule.id)
        .subscribe(
          ok => this.processResponse(ok),
          error => this.messageService.setMessage(error));
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

  private processResponse(response: ResponseModel[]) {
    this.messageService.setMessage(response);
    if (!this.messageService.hasError()) {
      this.apiService.refresh();
    }
  }

  setActiveRule(rule: IRule): void {
    this.activeRule = rule;
  }

  setStatus(change: MatSlideToggleChange, rule: IRule): void {
    rule.status = change.checked ? 'enabled' : 'disabled';
  }

  removeAction(rule: IRule, action: IAction): void {
    const index: number = rule.actions.findIndex(x => x.address === action.address);
    if (index > -1) {
      rule.actions.splice(index, 1);
    }
  }

  cloneRule(rule: IRule) {
    this.activeRule = JSON.parse(JSON.stringify(rule));
    this.activeRule.id = undefined;
  }

  resetAll() {
    this.activeRule = undefined;
    this.apiService.refresh();
  }
}
