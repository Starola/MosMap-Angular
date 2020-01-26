import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { LocationForCheck } from 'src/app/_models/locationForCheck';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';
import { LocationChecked } from 'src/app/_models/locationChecked';
import { AdminService } from 'src/app/_services/admin.service';
import { LocationCheckedClass } from 'src/app/_models/locationCheckedClass';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-locationToCheckSingle',
  templateUrl: './locationToCheckSingle.component.html',
  styleUrls: ['./locationToCheckSingle.component.css']
})
export class LocationToCheckSingleComponent implements OnInit, OnChanges {
  @Input() location: LocationForCheck;
  @Output() locationChecked: EventEmitter<number> = new EventEmitter<number>();

  checkedLocation: LocationChecked;

  constructor(
    private adminService: AdminService
  ) {
    this.checkedLocation = new LocationCheckedClass();
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.location) {
    }
  }

  locationAccepted(){
    this.checkedLocation.Accepted = true;
    this.setLocationDecission();

  }

  locationDeclined(){
    this.checkedLocation.Accepted = true;
    this.setLocationDecission();
  }

  setLocationDecission(){
    this.checkedLocation.LocationId = this.location.id;
    this.adminService.setLocationChecked(this.checkedLocation).subscribe(() =>{
      this.locationChecked.emit(this.location.id);
    }, error => {
      console.log(error);
    });
  }
}
