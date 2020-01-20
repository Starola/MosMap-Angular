import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-category-singel-selector',
  templateUrl: './category-singel-selector.component.html',
  styleUrls: ['./category-singel-selector.component.css']
})
export class CategorySingelSelectorComponent implements OnInit {
  @Input() singleCategory: Category;
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter<number>();

  categorySelected: boolean;
  constructor() {
    this.categorySelected = false;
   }

  ngOnInit() {
  }

  changetCategorySelection() {
    var categoryId = this.singleCategory.id;
    if(this.categorySelected == true){
      this.categorySelected = false;
    } else{
      this.categorySelected = true;
      this.selectedCategory.emit(categoryId);
    }
  }
}
