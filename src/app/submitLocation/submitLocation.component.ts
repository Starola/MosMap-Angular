import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Category } from '../_models/category';
import { SubCategory } from '../_models/subCategory';
import { SubCategoryService } from '../_services/subCategory.service';
import { LocationService } from '../_services/location.service';
import { LocationForCreation } from '../_models/locationForCreation';
import { LocationForCreationClass } from '../_models/locationForCreationClass';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { GeoSearchService } from '../_services/geo-search.service';

@Component({
  selector: 'app-submitLocation',
  templateUrl: './submitLocation.component.html',
  styleUrls: ['./submitLocation.component.css']
})
export class SubmitLocationComponent implements OnInit {


  selectedCategory: Category;
  selectedSubCategories = new FormControl();
  locationForCreation: LocationForCreation;
  subcategoryId: number;

  addressResult: string;
  latitudeResult: number;
  longitudeResult: number;


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private locationService: LocationService,
    private searchGeoJsonService: GeoSearchService,
    private alertify: AlertifyService,
    private router: Router
    ) {
      this.locationForCreation = new LocationForCreationClass();
     }
  basicdata: FormGroup;
  coordinates: FormGroup;

  categories: Category[];
  subCategories: SubCategory[];

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
    this.getCategories();
  }

  searchParam: string;

  async searchData(){
    const model = await this.searchGeoJsonService.geoSearch(this.searchParam);
      {
        model.x = model.x.substring(0, 10);
        model.y = model.y.substring(0, 10);
        this.addressResult = model.label;
        this.basicdata.patchValue({adress: model.label});
        this.latitudeResult = model.y;
        this.coordinates.patchValue({latitude: model.y});
        this.longitudeResult = model.x;
        this.coordinates.patchValue({longitude: model.x});
      }
      console.log(model);
  }


  getCategories(){
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    }, error => {
      console.log(error);
    });
  }

  getSubCategories() {
    this.subCategoryService.getSubCategories(this.selectedCategory.id).subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
    }, error => {
      this.subCategories = [];
    });
  }

  saveLocation(){
    this.setData();
    console.log(this.locationForCreation);
    this.locationService.createLocation(this.locationForCreation).subscribe(next => {
      this.alertify.success("Location erfolgreich angelegt");
      this.router.navigate(["/home"]);
    }, error => {
      console.log(error);
      this.alertify.warning(error);
    });
  }

  setData(){
    this.locationForCreation.LocationName = this.basicdata.value.name;
    this.locationForCreation.Address = this.basicdata.value.adress;
    this.locationForCreation.LocationDescription = this.basicdata.value.description;
    this.locationForCreation.Latitude = this.coordinates.value.latitude;
    this.locationForCreation.Longitude = this.coordinates.value.longitude;
    this.locationForCreation.CategoryId = this.selectedCategory.id;
    this.locationForCreation.SubCategoryIds = [];
    this.getSubcategoryIds();
  }

  getSubcategoryIds(){
    if(this.subCategories){
      this.subCategories.forEach(element => {
        this.locationForCreation.SubCategoryIds.push(element.id);
      });
    }
  }
}
