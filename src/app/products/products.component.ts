import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from './product.service';
import { CategoryService } from '../category/category.service';

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
  categories$;
  subCategories$;

  filterProductsForm: FormGroup;
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {
    console.log('Logging from Products');
    this.categories$ = this.categoryService.getAllParent();

    this.productCreationForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      quantity: new FormControl(),
      category: new FormControl(),
      subCategory: new FormControl(),
    });

    this.filterProductsForm = new FormGroup({
      mainCategory: new FormControl(),
      subCategory: new FormControl(),
    });

    // this.subCategories$ = this.categoryService.getAllSubCategories(
    //   this.mainCategory
    // );

    this.productCreationForm.controls.category.valueChanges.subscribe(
      (value) => {
        console.log('Category', value);
        this.subCategories$ = this.categoryService.getAllSubCategories(value);
        // .subscribe((res) => console.log('Sub Category', res));
      }
    );
    this.filterProductsForm.controls.mainCategory.valueChanges.subscribe(
      (value) => {
        console.log('Category', value);
        this.subCategories$ = this.categoryService.getAllSubCategories(value);
        // .subscribe((res) => console.log('Sub Category', res));
      }
    );
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
