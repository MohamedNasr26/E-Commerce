import { Component } from '@angular/core';
import { SubCategoriesService } from './services/sub-categories.service';
import { SubCategory } from './interfaces/subCategory';

@Component({
  selector: 'app-subCategories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {

  categoryId: string = '';
  subCategoryList: SubCategory[] = [];

  constructor(private _subCategoriesService: SubCategoriesService) { }

  ngOnInit(): void {
    this.getAllSubCategories();
  }


  getAllSubCategories() {
    this._subCategoriesService.getAllSubcategories().subscribe({
      next: (response) => {
        this.subCategoryList = response.data;
      }
    })
  }

}
