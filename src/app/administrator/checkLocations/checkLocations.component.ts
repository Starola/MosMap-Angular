import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { LocationForCheck } from 'src/app/_models/locationForCheck';

@Component({
  selector: 'app-checkLocations',
  templateUrl: './checkLocations.component.html',
  styleUrls: ['./checkLocations.component.css']
})
export class CheckLocationsComponent implements OnInit {
  locationsToCheckList: LocationForCheck[];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getLocationsToCheck();
  }

  getLocationsToCheck() {
    this.adminService.getUncheckedLocations().subscribe((locations: LocationForCheck[]) => {
      this.locationsToCheckList = locations;
      console.log(this.locationsToCheckList)
    }, error => {
      console.log(error);
    });
  }



}
