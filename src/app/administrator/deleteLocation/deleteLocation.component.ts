import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { SubCategory } from 'src/app/_models/subCategory';
import { CategoryService } from 'src/app/_services/category.service';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/_services/location.service';
import { LocationDetail } from 'src/app/_models/locationDetail';

@Component({
  selector: 'app-deleteLocation',
  templateUrl: './deleteLocation.component.html',
  styleUrls: ['./deleteLocation.component.css']
})
export class DeleteLocationComponent implements OnInit {

  categories: Category[];
  locations: LocationDetail[];
  selectedCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private locationService: LocationService,
    private alertify: AlertifyService,
    private router: Router
    ) {
      this.selectedCategory = null;
     }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    }, error => {
      console.log(error);
    });
  }

  getAllLocations(){
    this.locationService.getLocations(this.selectedCategory.id).subscribe((locations: LocationDetail[]) =>{
      this.locations = locations;
    }, error =>{
      this.locations = [];
      console.log(error);
    });
  }

  deleteLocation(locationId: number){
    console.log(locationId)
    this.locationService.deleteLocation(locationId).subscribe(next => {
      this.alertify.success("Ort mit Id " + locationId + " erfolgreich gelöscht");
      this.locations = this.locations.filter(item => item.id != locationId);

    }, error => {
      console.log(error);
    })
  }
}
