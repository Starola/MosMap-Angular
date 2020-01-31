import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { SubcategoryContainerComponent } from './subcategory-container/subcategory-container.component';
import { CategoryService } from '../_services/category.service';
import { GeoJSONprocessingService } from '../_services/geo-jsonprocessing.service';
import { MapComponent } from './map/map.component';
import {GeoSearchService} from '../_services/geo-search.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  @ViewChild(SubcategoryContainerComponent, {static: false}) subcategoryContainer: SubcategoryContainerComponent;
  @ViewChild(MapComponent, {static: false}) mapComponent: MapComponent;
  //@Output() curentlySelectedCategories: EventEmitter<number[]> = new EventEmitter<number[]>();


  breakpoint: number;
  selectedCategories: number[];
  latestChangedCategory: number;

  constructor(
    private geoSearchService: GeoSearchService,
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
    console.log("Kategorie zu verändenr " + $event)
    this.changeCategoryList($event);
    console.log(this.categoryService.curentlySelectedCategories);
    //this.curentlySelectedCategories.emit(this.selectedCategories);
  }

  changeCategoryList(changedCategory: number){
    this.latestChangedCategory = changedCategory;
    if(this.selectedCategories.includes(changedCategory)){
      this.selectedCategories = this.selectedCategories.filter(item => item != changedCategory);
      this.categoryService.curentlySelectedCategories = this.categoryService.curentlySelectedCategories.filter(item => item != changedCategory);
      console.log("Löschen");
      this.mapComponent.removeGeoJSON(changedCategory);
      return false;
    } else {
      this.selectedCategories.push(changedCategory);
      this.categoryService.curentlySelectedCategories.push(changedCategory);
      console.log("Addieren");
      this.mapComponent.addGeoJSON(changedCategory);
      return true;
    }
  }

  testButton(){
    this.geoSearchService.geoSearch("Rathaus Mosbach");
  }
}
