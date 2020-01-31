import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-singel-selector',
  templateUrl: './category-singel-selector.component.html',
  styleUrls: ['./category-singel-selector.component.css']
})
export class CategorySingelSelectorComponent implements OnInit {
  @Input() singleCategory: Category;
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter<number>();

  categorySelected: boolean;
  constructor(
    private categoryService: CategoryService
  ) {
    this.categorySelected = false;
   }

  ngOnInit() {
    if(this.categoryService.curentlySelectedCategories.includes(this.singleCategory.id)){
      this.categorySelected = true;
    }
  }

  changetCategorySelection() {
    var categoryId = this.singleCategory.id;
    if(this.categorySelected == true){
      this.categorySelected = false;
    } else{
      this.categorySelected = true;
    }
    console.log(categoryId);
    this.selectedCategory.emit(categoryId);
  }
}
