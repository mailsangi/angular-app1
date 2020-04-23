import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:9080/products';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(`${URL}/all`).pipe(
      map((res: any) => {
        console.log('RES', res);
        return res.result;
      })
    );
  }

  getById(id) {
    return this.http.get(`${URL}/${id}`).pipe(
      map((res: any) => {
        console.log('RES', res);
        return res.result;
      })
    );
  }
  create(product) {
    console.log(product);
    return this.http.post(`${URL}/create`, product);
  }

  update(product, id) {
    return this.http.put(
      `${URL}/update/${id}?country=IND&continent=ASIA&planet=earth&id=${id}`,
      product
    );
  }

  delete(id) {
    return this.http.delete(`${URL}/remove/${id}`);
  }
}
