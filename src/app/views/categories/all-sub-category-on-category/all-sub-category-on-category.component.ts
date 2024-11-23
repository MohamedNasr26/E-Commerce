import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { SubCategory } from '../interfaces/subCategory';

@Component({
  selector: 'app-all-sub-category-on-category',
  templateUrl: './all-sub-category-on-category.component.html',
  styleUrls: ['./all-sub-category-on-category.component.scss']
})
export class AllSubCategoryOnCategoryComponent implements OnInit {

  categoryId: string = '';
  subCategoryOnCategoryList: SubCategory[] = [];

  constructor(private _categoriesService: CategoriesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoryId();
    this.getAllSubCategoriesOnCategory(this.categoryId);
  }

  getCategoryId() {
    this.categoryId = this._activatedRoute.snapshot.params['categoryId'];
  }

  getAllSubCategoriesOnCategory(categoryId: any) {
    this._categoriesService.getAllSubCategoriesOnCategory(categoryId).subscribe({
      next: (response) => {
        this.subCategoryOnCategoryList = response.data;
      }
    })
  }
}
