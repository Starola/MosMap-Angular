import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from 'src/app/_models/subCategory';

@Component({
  selector: 'app-subcategory-element',
  templateUrl: './subcategory-element.component.html',
  styleUrls: ['./subcategory-element.component.css']
})
export class SubcategoryElementComponent implements OnInit {
  @Input() subCategory: SubCategory;

  constructor() { }

  ngOnInit() {
  }

}
