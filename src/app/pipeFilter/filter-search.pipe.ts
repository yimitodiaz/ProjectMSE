import { Pipe, PipeTransform } from '@angular/core';
import { student } from '../models/student';

@Pipe({
  name: 'filterSearch'
})
/**
 * Allows you to filter a search in the table according to what the user types
 * @return The filtering that was entered with all the information
 */
export class FilterSearchPipe implements PipeTransform {
  transform(value: any, arg?: any): any {
    const memberHouse = [];
    // The condition that the letters you write must be greater than 2 for the filtering to take place
    if(arg ===''|| arg.length<2){
      return value;
    }
    //The table is traversed looking for the one that the user wrote
    for(const item of value){
      //Filtering condition. Wanted by name and hair color
      if(item.name.toLowerCase().indexOf(arg.toLowerCase()) >-1 || item.hairColour.toLowerCase().indexOf(arg.toLowerCase()) >-1){      
        memberHouse.push(item);
      }
    }
    return memberHouse;

  }

}
