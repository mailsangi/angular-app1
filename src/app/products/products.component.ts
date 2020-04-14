import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const URL = 'http://localhost:9080/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productCreationForm: FormGroup;
  products$: Observable<any>;
  constructor(private http: HttpClient) {
    this.productCreationForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      quantity: new FormControl()
    });
  }

  ngOnInit(): void {
    this.products$ = this.http.get(`${URL}/all`).pipe(
      map((res: any) => {
        console.log('RES', res);
        return res.result;
      })
    );
  }
  create() {
    console.log(this.productCreationForm.value);
    this.http
      .post(`${URL}/create`, this.productCreationForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
