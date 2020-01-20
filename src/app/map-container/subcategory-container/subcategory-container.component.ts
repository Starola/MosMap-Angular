import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { SubCategory } from 'src/app/_models/subCategory';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.css']
})
export class SubcategoryContainerComponent implements OnInit {
  subCategories: SubCategory[];
  constructor(
    private subCategoryService: SubCategoryService
  ) { }

  ngOnInit() {
  }

  getSubCategories(categoryId) {
    this.subCategoryService.getSubCategories(categoryId).subscribe((categories: SubCategory[]) => {
      this.subCategories = categories;
      console.log(this.subCategories);
    }, error => {
      console.log(error);
    });
  }

}
