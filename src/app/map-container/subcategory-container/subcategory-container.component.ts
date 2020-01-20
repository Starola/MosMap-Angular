import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { SubCategory } from 'src/app/_models/subCategory';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.css']
})
export class SubcategoryContainerComponent implements OnInit {
  currentCategories: number[];
  
  constructor(
    private subCategoryService: SubCategoryService
  ) {
    this.currentCategories = [];
   }

  ngOnInit() {
  }

  changeSubCategories(categoryId: number, addedCategory: boolean) {
    if(addedCategory == true){
      this.currentCategories.push(categoryId);
    }
    else{
      this.currentCategories = this.currentCategories.filter(item => item !== categoryId);
    }
  }

}
