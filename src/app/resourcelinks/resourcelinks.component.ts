import {Component} from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable, of} from 'rxjs';
import {Types} from '../api/types.model';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-resourcelinks',
  templateUrl: './resourcelinks.component.html',
  styleUrls: ['./resourcelinks.component.scss']
})
export class ResourcelinksComponent {

  constructor(private apiService: ApiService) { }

  getResourcelinks(): Observable<any> {
    return  this.apiService.getType(Types.resourcelinks);
  }

  getKeys(data: any): string[] {
    return Object.keys(data);
  }

  linkNotFound(link: string): Observable<boolean> {
    if (link === '/groups/0') {
      return of(false);
    }
    const linkParts = link.split('/');
    return this.apiService.getType(Types[linkParts[1]])
      .pipe(
        map(entities => !entities || !entities[linkParts[2]])
      );
  }

  deleteLink(resourceKey: number) {
    if (resourceKey > -1 && confirm('Really delete this resourcelink?')) {
      this.apiService.delete(Types.resourcelinks, resourceKey)
        .subscribe(() => this.apiService.refresh());
    }
  }
}
