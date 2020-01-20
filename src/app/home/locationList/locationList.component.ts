import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-locationList',
  templateUrl: './locationList.component.html',
  styleUrls: ['./locationList.component.css']
})
export class LocationListComponent implements OnInit {
  constructor(
    private categoryService: CategoryService
  ) {
   }

  ngOnInit() {
  }

}
