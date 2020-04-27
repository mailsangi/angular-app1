import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from './category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;

  parentCatgories$;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.parentCatgories$ = this.categoryService.getAllParent();
    this.categoryForm = this.fb.group({
      name: [],
      type: [],
      parent: [],
    });
  }

  ngOnInit(): void {}

  create() {
    this.categoryService.create(this.categoryForm.value).subscribe(
      () => {},
      () => {},
      () => {
        this.categoryForm.reset();
      }
    );
  }
}
