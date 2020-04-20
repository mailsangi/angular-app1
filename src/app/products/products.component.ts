import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productCreationForm: FormGroup;
  products$: Observable<any>;
  editMode = false;
  currentProductId: string;
  constructor(private productsService: ProductsService) {
    console.log('Logging from Products');

    this.productCreationForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      quantity: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.products$ = this.productsService.get();
  }

  create() {
    console.log(this.productCreationForm.value);
    this.productsService
      .create(this.productCreationForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }

  edit(product) {
    console.log('Product', product);
    this.currentProductId = product._id;
    this.editMode = true;
    this.productCreationForm.patchValue(product);
  }

  update() {
    this.productsService
      .update(this.productCreationForm.value, this.currentProductId)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  delete(id) {
    this.productsService.delete(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
