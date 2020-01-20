import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locationList',
  templateUrl: './locationList.component.html',
  styleUrls: ['./locationList.component.css']
})
export class LocationListComponent implements OnInit {
  selectedCategories: number[];
  constructor() {
    this.selectedCategories = [];
   }

  ngOnInit() {
  }

}
