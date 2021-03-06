import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter<number>();

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }


  getAllCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    }, error => {
      console.log(error);
    });
  }

  selectCategory($event: number) {
    this.selectedCategory.emit($event);
  }

}
