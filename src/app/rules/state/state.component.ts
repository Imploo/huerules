import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StateService} from './state.service';
import {StateEntity} from '../entities/stateEntity';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  @Input() public address: string;
  @Output() public addressChange: EventEmitter<string> = new EventEmitter<string>();

  public entities: StateEntity[] = [];
  public selectedEntity: StateEntity;
  constructor(private stateService: StateService) {}

  public handleChange() {
    if (this.selectedEntity && this.selectedEntity.selectedProperty) {
      if (this.selectedEntity) {
        this.address = this.selectedEntity.getAddress();
      }
      this.addressChange.emit(this.address);
    }
  }

  ngOnInit(): void {
    this.stateService.entities.subscribe(entities => {
      if (entities.length > 0) {
        this.entities = this.entities.concat(entities);
        this.selectedEntity = this.stateService.getEntityFromAddress(this.address, this.entities);
      }
    });
  }
}
