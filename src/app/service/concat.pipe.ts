import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: any, value1:String,value2:String): String {
    return value=(value1+''+value2);
  }

}
