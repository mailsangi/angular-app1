import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  parentCatgories$;
  constructor(private categoryService: CategoryService) {
    this.parentCatgories$ = this.categoryService.getAllParent();
  }

  ngOnInit(): void {}
}
