import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAll'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any = null,filterMetadata: any = null): any {
     if(!searchText) {
      return value;
    }
    let res= value.filter((data:any) => this.matchValue(data,searchText));
    return res;
  }

  matchValue(data:any, value:any) {
    return Object.keys(data).map((key) => {
          return new RegExp(value, 'gi').test(JSON.stringify(data[key]));
    }).some(result => result);
  }
}
    