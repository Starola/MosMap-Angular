import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from 'src/app/_models/subCategory';
import { SubCategoryService } from 'src/app/_services/subCategory.service';

@Component({
  selector: 'app-subcategory-singel-selector',
  templateUrl: './subcategory-singel-selector.component.html',
  styleUrls: ['./subcategory-singel-selector.component.css']
})
export class SubcategorySingelSelectorComponent implements OnInit {
  @Input() categoryId: number; 
  subCategories: SubCategory[];

  constructor(
    private subCategoryService: SubCategoryService
  ) { }

  ngOnInit() {
    this.getSubCategories(this.categoryId);
  }

  getSubCategories(categoryId: number) {
    this.subCategoryService.getSubCategories(categoryId).subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
      console.log(this.subCategories)
    }, error => {
      console.log(error);
    });
  }

}
