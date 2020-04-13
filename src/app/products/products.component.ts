import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productCreationForm;
  products$;
  constructor(private http: HttpClient) {
    this.productCreationForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      quantity: new FormControl()
    });
  }

  ngOnInit(): void {
    this.products$ = this.http.get('http://localhost:9080/products').pipe(
      map((res: any) => {
        return res.products;
      })
    );
  }
  create() {
    console.log(this.productCreationForm.value);
    this.http
      .post('http://localhost:9080/products', this.productCreationForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
