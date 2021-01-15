import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../classes/item";

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(allItems:Item[]): unknown {
    return allItems.filter(item => item.available);
  }

}
