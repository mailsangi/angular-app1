import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  subCategories$;
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.subCategories$ = this.activateRoute.params.pipe(
      switchMap((params) => {
        return this.categoryService.getAllSubCategories(params.category);
      }),
      map((res: any) => res.result)
    );
  }

  ngOnInit(): void {}
}
