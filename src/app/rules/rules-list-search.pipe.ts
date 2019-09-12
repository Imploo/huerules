import { Pipe, PipeTransform } from '@angular/core';
import {IRule} from './rule';

@Pipe({
  name: 'rulesListSearch'
})
export class RulesListSearchPipe implements PipeTransform {

  transform(value: IRule[], search: string): IRule[] {
    if (!search) {
      return value;
    }

    return value.filter(rule => rule.name.toUpperCase().indexOf(search.toUpperCase()) > -1);
  }

}
