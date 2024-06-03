import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform {

  transform(value: number, unit: string): unknown {
    if(value && !isNaN(value)) {
      if(unit === 'C') {
        return (value * 9/5) + 32;
      } else if(unit === 'F') {
        return (value - 32) * 5/9;
      } 
    }
    return 'Invalid value';
  }

}
