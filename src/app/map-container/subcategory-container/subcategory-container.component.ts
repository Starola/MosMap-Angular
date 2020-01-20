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

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit() {}

}
