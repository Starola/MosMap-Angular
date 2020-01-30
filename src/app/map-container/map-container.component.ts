import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { SubcategoryContainerComponent } from './subcategory-container/subcategory-container.component';
import { CategoryService } from '../_services/category.service';
import { GeoJSONprocessingService } from '../_services/geo-jsonprocessing.service';
import { MapComponent } from './map/map.component'

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  @ViewChild(SubcategoryContainerComponent, {static: false}) subcategoryContainer: SubcategoryContainerComponent;
  @ViewChild(MapComponent, {static: false}) mapComponent: MapComponent;
  @Output() curentlySelectedCategories: EventEmitter<number[]> = new EventEmitter<number[]>();


  breakpoint: number;
  selectedCategories: number[];
  latestChangedCategory: number;

  constructor(
    private categoryService: CategoryService,
    private geoJSONProcessingService: GeoJSONprocessingService
  ) {
    this.selectedCategories = [];
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 3 : 4;
    this.selectedCategories = this.categoryService.curentlySelectedCategories;
  }

  ngAfterViewInit(){
    this.selectedCategories.forEach(element => {
      if(this.mapComponent){
        this.mapComponent.addGeoJSON(element);
      }
    });
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 3 : 4;
  }

  selectCategory($event: number) {
    this.changeCategoryList($event);
    this.categoryService.curentlySelectedCategories = this.selectedCategories;
    this.curentlySelectedCategories.emit(this.selectedCategories);
  }

  changeCategoryList(changedCategory: number){
    this.latestChangedCategory = changedCategory;
    if(this.selectedCategories.includes(changedCategory)){
      this.selectedCategories = this.selectedCategories.filter(item => item !== changedCategory);
      this.mapComponent.removeGeoJSON(changedCategory);
      return false;
    } else {
      this.selectedCategories.push(changedCategory);
      this.mapComponent.addGeoJSON(changedCategory);
      return true;
    }
  }

  testButton(){
  }
}
