import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-locationCategoryList',
  templateUrl: './locationCategoryList.component.html',
  styleUrls: ['./locationCategoryList.component.css']
})
export class LocationCategoryListComponent implements OnInit {
  @Input() categoryId: number;

  locationList: Location[];
  categoryName: string;

  constructor(
    private locationService: LocationService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getLocations();
    this.getCategoryName();
  }

  getLocations() {
    this.locationService.getLocations(this.categoryId).subscribe((locations: Location[]) => {
      this.locationList = locations;
    }, error => {
      console.log(error);
    });
  }

  getCategoryName() {
    this.categoryService.getCategorieById(this.categoryId).subscribe((category: Category) => {
      this.categoryName = category.categoryName;
    }, error => {
      console.log(error);
    });
  }

}
