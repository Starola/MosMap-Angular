import { Component, OnInit, Input } from '@angular/core';
import { LocationForCheck } from 'src/app/_models/locationForCheck';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-locationToCheckSingle',
  templateUrl: './locationToCheckSingle.component.html',
  styleUrls: ['./locationToCheckSingle.component.css']
})
export class LocationToCheckSingleComponent implements OnInit {
  @Input() location: LocationForCheck;


  constructor(
    private categoryService:CategoryService
  ) { }

  ngOnInit() {
  }

  

}
