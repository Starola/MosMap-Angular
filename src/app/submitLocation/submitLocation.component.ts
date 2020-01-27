import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Category } from '../_models/category';

@Component({
  selector: 'app-submitLocation',
  templateUrl: './submitLocation.component.html',
  styleUrls: ['./submitLocation.component.css']
})
export class SubmitLocationComponent implements OnInit {


  selectedValue: any


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
    ) { }
  basicdata: FormGroup;
  coordinates: FormGroup;
  category: FormGroup;

  categories: Category[];

  ngOnInit() {
    this.basicdata = this.fb.group({
      name: [''],
      adress: [''],
      description: ['']
    })
    this.coordinates = this.fb.group({
      latitude: [''],
      longitude: ['']
    })
    this.category = this.fb.group({
      latitude: [''],
      longitude: ['']
    })
    {
  }
  this.getCategories();
  }


getCategories(){
  this.categoryService.getCategories().subscribe((categories: Category[]) => {
    this.categories = categories;
    console.log(this.categories);
  }, error => {
    console.log(error);
  });
}
}
