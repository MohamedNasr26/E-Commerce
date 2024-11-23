import { Component } from '@angular/core';
import { Category } from './interfaces/category';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  lang = localStorage.getItem('lang');
  categoryList:Category[]=[];
  contentLoaded = false;


  constructor(private _categoriesService:CategoriesService){}
  ngOnInit(): void {
    this.getAllCategories();
    this.contentLoadedInterval();
  }

  getAllCategories(){
    this._categoriesService.getAllCategories().subscribe({
      next:(response)=>{
        this.categoryList = response.data;
      }
    })
  }

  contentLoadedInterval(){
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }


}
