import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(items: any[], sortingBy: string): any[] {
    if (!items) return [];
    if (!sortingBy) return items;
    return items.sort((a: any, b: any): any => {
      return a[sortingBy] > b[sortingBy];
    });
  }
}
