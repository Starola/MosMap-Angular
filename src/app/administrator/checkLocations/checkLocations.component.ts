import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-checkLocations',
  templateUrl: './checkLocations.component.html',
  styleUrls: ['./checkLocations.component.css']
})
export class CheckLocationsComponent implements OnInit {
  locationsToCheckList: Location[];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getLocationsToCheck();
  }

  getLocationsToCheck() {
    this.adminService.getUncheckedLocations().subscribe((locations: Location[]) => {
      this.locationsToCheckList = locations;
      console.log(locations)
    }, error => {
      console.log(error);
    });
  }



}
