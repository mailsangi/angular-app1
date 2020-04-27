import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegFormValue } from '../models/userRegFormValue';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:9080/category';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  create(value: any) {
    console.log('Value', value);
    return this.http.post(`${URL}/create`, value);
  }

  getAll() {
    return this.http.get(`${URL}/all`);
  }

  getAllParent() {
    return this.getAll().pipe(
      map((res: any) => {
        console.log(res);
        const arr = res.result;
        const filteredArray = arr.filter((el) => {
          return el.parent === undefined || el.parent === null;
        });
        console.log('Filtered Arr', filteredArray);
        return filteredArray;
      })
    );
  }
}
