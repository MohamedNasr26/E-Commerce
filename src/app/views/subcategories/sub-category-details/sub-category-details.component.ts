import { Component } from '@angular/core';
import { SubCategoriesService } from '../services/sub-categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category-details',
  templateUrl: './sub-category-details.component.html',
  styleUrls: ['./sub-category-details.component.scss']
})
export class SubCategoryDetailsComponent {
  subcategoryId:string ='';
  subcategoryItem:any;
  
  constructor(private _subCategoriesService: SubCategoriesService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubcategoryId();
    this.getSpecificSubCategory(this.subcategoryId);
  }

  getSubcategoryId(){
    this.subcategoryId = this._activatedRoute.snapshot.params["subCategoryId"];
  }

  getSpecificSubCategory(subcategoryId:string) {
    this._subCategoriesService.getSpecificSubCategory(subcategoryId).subscribe({
      next: (response) => {
        this.subcategoryItem = response.data;
      }
    })
  }

}
