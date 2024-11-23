import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { Category } from '../interfaces/category'
@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  lang = localStorage.getItem('lang');
  categoryList:Category[]=[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1199px',
      numVisible: 6,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '499px',
      numVisible: 1,
      numScroll: 1,
    }
];
  
  constructor(private _homeServiceService:HomeServiceService) { }
  ngOnInit(): void {
    this.getAllCategories();
  }
  
  getAllCategories(){
    this._homeServiceService.getAllCategories().subscribe({
      next:(response)=>{
        this.categoryList = response.data;
      }
    })
  }
}
