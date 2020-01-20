import { Component, OnInit, ViewChild } from '@angular/core';
import { SubcategoryContainerComponent } from './subcategory-container/subcategory-container.component';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  @ViewChild(SubcategoryContainerComponent, {static: false}) subcategoryContainer: SubcategoryContainerComponent;

  breakpoint: number;
  selectedCategories: number[];
  latestChangedCategory: number;

  constructor(
  ) {
    this.selectedCategories = [];
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 3 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 3 : 4;
  }

  selectCategory($event: number) {
    var addedCategory: boolean;
    addedCategory = this.changeCategoryList($event); 
    this.subcategoryContainer.changeSubCategories(this.latestChangedCategory, addedCategory);
  }

  changeCategoryList(changedCategory: number){
    this.latestChangedCategory = changedCategory;
    if(this.selectedCategories.includes(changedCategory)){
      this.selectedCategories = this.selectedCategories.filter(item => item !== changedCategory);
      return false;
    } else {
      this.selectedCategories.push(changedCategory);
      return true;
    }
  }

  

}
