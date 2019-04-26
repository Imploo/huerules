import {Component, Input, OnInit} from '@angular/core';
import {IAction, IBody, IRule} from '../rule';
import {ActionEntity} from '../entities/actionEntity';
import {ActionService} from './action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() action: IAction;
  @Input() rule: IRule;

  public entities: ActionEntity[] = [];
  public selectedEntity: ActionEntity;

  constructor(private actionService: ActionService) { }

  ngOnInit() {
    this.actionService.entities.subscribe(entities => {
      if (entities.length > 0) {
        this.entities = this.entities.concat(entities);
        this.selectedEntity = this.actionService.getEntityFromAddress(this.action.address, this.entities);
      }
    });
  }

  handleChange() {
    if (this.selectedEntity) {
      this.action.address = this.selectedEntity.getAddress();
    }
  }

  removeBody(action: IAction, body: IBody): void {
    const index: number = action.body.findIndex(x => x.key === body.key);
    if (index > -1) {
      action.body.splice(index, 1);
    }
  }

  newBodyEntry(action: IAction): void {
    if (!action.body) {
      action.body = [];
    }
    action.body.push(<IBody>{});
  }
}
