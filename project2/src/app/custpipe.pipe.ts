import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'custpipe'
})

export class CustPipe implements PipeTransform {
  transform(value: number, addnum: number) {
    if (!addnum) {
      addnum = 10;
    }
    let res = value + addnum;
    return res;
  }
}
