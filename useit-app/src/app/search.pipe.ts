import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  constructor() {
  }

  transform(items: any[], termino: string): any[] {
    if (!items) {
      return [];
    }
    if (!termino) {
      return items;
    }
    termino = termino.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(termino);
    });
  }

}
