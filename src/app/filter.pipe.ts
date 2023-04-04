import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter((item: any)=>{
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
