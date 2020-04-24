import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MyPipe implements PipeTransform {
  transform(data, arg1) {
    console.log('DATA From temp', data, arg1);
    // return 'ABC';
    // return JSON.stringify(data);
    if (data[arg1]) {
      return data[arg1];
    } else {
      return 'Prop not available';
    }
  }
}
