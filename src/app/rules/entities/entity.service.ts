import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {BaseEntity} from './baseEntity';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class EntityService<TEntity extends BaseEntity> {
  private entitiesSubject: ReplaySubject<TEntity[]> = new ReplaySubject<TEntity[]>(4);
  public entities = this.entitiesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.init();
  }

  private init(): void {
    const presets = this.getPresetEntities();
    if (presets && presets.length > 0) {
      this.entitiesSubject.next(presets);
    }

    this.getType('lights');
    this.getType('sensors');
    this.getType('groups');
  }
  private getType(type: string) {
    this.http.get<any>(`http://192.168.178.22/api/BDJo7SGB-6KsWHHAaXZidJNuboQejknxnh6ruEWe/${type}`)
      .subscribe(entities => this.entitiesSubject.next(this.parseEntities(entities, type)),
        () => {
          this.http.get<any>(`api/rules/${type}.json`)
            .subscribe(entities => this.entitiesSubject.next(this.parseEntities(entities, type)));
        });
  }

  protected abstract parseEntities(items: any, type: string): TEntity[];

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
