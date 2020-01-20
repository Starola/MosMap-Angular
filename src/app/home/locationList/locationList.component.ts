import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';

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
