import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-locationCategoryList',
  templateUrl: './locationCategoryList.component.html',
  styleUrls: ['./locationCategoryList.component.css']
})
export class LocationCategoryListComponent implements OnInit {
  @Input() categoryId: number;

  locationList: Location[];

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getLocations(this.categoryId).subscribe((locations: Location[]) => {
      this.locationList = locations;
    }, error => {
      console.log(error);
    });
  }

}
