import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
  standalone: true
})
export class SearchByPipe implements PipeTransform {

  transform(arrayOfObj:any[],termSearch:string): any[] {
    return arrayOfObj.filter((obj)=>obj.title.toLowerCase().includes(termSearch.toLowerCase()));
  }

}
