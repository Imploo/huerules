import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RulesService } from './rules.service';
import { IRule, ICondition, IAction, IBody } from './rule';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'rules-list',
    templateUrl: 'rules-list.component.html',
    styleUrls: ['rules-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RulesListComponent implements OnInit {
    
    rules: IRule[];
    errorMessage: string;
    operators: string[] = ['eq', 'lt', 'gt', 'dx', 'ddx', 'in'];

    getObjectKeys = Object.keys;

    constructor(private _rulesService: RulesService){
    }
    
    ngOnInit(): void {
        this.errorMessage = "";
        this.initRules();
    }

    initRules(): void {
        this._rulesService.getRules()
         .subscribe(rules => {
             this.rules = rules;
            },
            error => {
                this.parseMessage(error);
                this._rulesService.returnDummy()
                    .subscribe(rules => {
                        this.rules = rules;
                    });
            });
    }

    save(rule: IRule): void {
        this._rulesService.save(rule)
        .subscribe(
            ok => 
            {
                this.parseMessage(ok);                
                if (!this.errorMessage.includes("error"))
                    this.initRules();
            }, this.parseMessage);
    }

    private parseMessage = (error: Response | any): void => {
        if (error.type === 3) return;
        let message = error.message || JSON.stringify(error._body, null, 2) || error;
        this.errorMessage += message + "";
        console.log(message);
    }

    newCondition(rule: IRule): void {
        if (!rule.conditions)
            rule.conditions = [];
        rule.conditions.push(<ICondition>{});
    }

    newAction(rule: IRule): void {
        if (!rule.actions)
            rule.actions = [];
        rule.actions.push(<IAction>{});
    }

    newBodyEntry(action: IAction): void {
        if (!action.body)
            action.body = [];
        action.body.push(<IBody>{});
    }

    newRule(): void {
        this.rules.push(<IRule>{});
    }

    removeBody(action: IAction, body: IBody): void {
        let index: number = action.body.findIndex(x => x.key == body.key);
        if (index > -1)
            action.body.splice(index, 1);
    }
}