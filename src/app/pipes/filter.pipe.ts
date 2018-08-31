import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], selectedCat: string): any[] {
    if (!items) return [];
    if (!selectedCat || selectedCat === 'all') return items;
    return items.filter(it => {
      return it.category === selectedCat;
    });
  }
}
