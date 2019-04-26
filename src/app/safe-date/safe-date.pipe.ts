import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeDate'
})
export class SafeDatePipe implements PipeTransform {

  transform(value: any): string {
    if (value === 'none') {
      return '-';
    }
    return new Date(value + 'Z').toLocaleString();
  }

}
