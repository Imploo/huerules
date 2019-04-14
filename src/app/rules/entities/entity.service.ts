import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {BaseEntity} from './baseEntity';
import {Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {Types} from '../../api/types.model';

@Injectable()
export abstract class EntityService<TEntity extends BaseEntity> {
  private entitiesSubject: ReplaySubject<TEntity[]> = new ReplaySubject<TEntity[]>(4);
  public entities = this.entitiesSubject.asObservable();

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.init();
  }

  private init(): void {
    this.getType(Types.lights);
    this.getType(Types.sensors);
    this.getType(Types.groups);
  }
  private getType(type: Types) {
    this.apiService.getType(type)
      .subscribe(entities => {
        const newEntities = this.parseEntities(entities, type).concat(this.getPresetEntities());
        this.entitiesSubject.next(newEntities);
      });
  }

  protected abstract parseEntities(items: any, type: Types): TEntity[];

  protected abstract getPresetEntities(): TEntity[];

  public getEntityFromAddress(address: string, entities: TEntity[]): TEntity {
    if (address) {
      // 0: /
      // 1: lights
      // 2: 3
      // 3: state
      // 4: on
      const addressParts = address.split('/');
      const type = 1;
      const id = 2;

      const selectedEntity = entities.find(
        e => e.type === addressParts[type] &&
          (e.id === -1 || e.id === +addressParts[id]));

      if (!!selectedEntity) {
        selectedEntity.selectedProperty = addressParts[addressParts.length - 1];
      }
      return selectedEntity;
    }
  }
}
