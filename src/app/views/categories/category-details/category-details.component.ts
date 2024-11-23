import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  categoryId :string ='';
  categoryItem :any;

  constructor(private _categoriesService:CategoriesService,private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getCategoryId();
    this.getSpecificCategory(this.categoryId);
  }

  getCategoryId(){
    this.categoryId = this._activatedRoute.snapshot.params['categoryId'];
  }

  getSpecificCategory(id:string){
    this._categoriesService.getSpecificCategory(id).subscribe({
      next:(response)=>{
        this.categoryItem = response.data;
      }
    })
  }

}
