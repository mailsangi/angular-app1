import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(data: Product[] = [], mainCategory: string, subCategory: string) {
    console.log('---> From pipe', data, mainCategory);
    const tempArray: Product[] =
      data && data.length > 0 && mainCategory
        ? data.filter((el: Product) => el.category === mainCategory)
        : data;
    // return tempArray;
    return tempArray.length > 0 && subCategory
      ? tempArray.filter((el: Product) => el.subCategory === subCategory)
      : tempArray;
  }
}
