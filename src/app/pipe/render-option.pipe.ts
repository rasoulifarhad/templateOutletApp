import { Pipe, PipeTransform } from '@angular/core';
import { MenuOption } from '../enums/menu-option';

@Pipe({
  name: 'renderOptionPipe'
})
export class RenderOptionPipe implements PipeTransform {

  transform(value: MenuOption): string {
    if(value === MenuOption.AVAILABLE) {
      return 'available';
    }
    if(value === MenuOption.LOW_SUPPLY) {
      return 'low supply';
    }
    if(value === MenuOption.SOLD_OUT) {
      return 'sold out';
    }
    return '';
  }

}
