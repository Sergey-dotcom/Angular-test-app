import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class Filter implements PipeTransform {
  transform(items: any[], value: string): any[] {
    if (!items) return [];
    if (!value || value.length == 0) return items;
    return items.filter(item => item.type === value);
  }
}
