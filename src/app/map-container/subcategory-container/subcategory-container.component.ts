import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { SubCategory } from 'src/app/_models/subCategory';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.css']
})
export class SubcategoryContainerComponent implements OnInit {
  currentCategories: number[];
  
  constructor(
    private subCategoryService: SubCategoryService,
    private categoryService: CategoryService
  ) {
    this.currentCategories = [];
   }

  ngOnInit() {
    if(this.currentCategories != undefined)
    this.currentCategories = this.categoryService.curentlySelectedCategories;
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
