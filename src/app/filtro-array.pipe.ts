import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    if(value.length === 0 || args === undefined) {
      return value;
    }
    let filter = args[0].toLocaleLowerCase();
    return value.filter(
      (v:any) => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}
