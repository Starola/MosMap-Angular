import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { SubCategory } from 'src/app/_models/subCategory';
import { CategoryService } from 'src/app/_services/category.service';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteSubCategory',
  templateUrl: './deleteSubCategory.component.html',
  styleUrls: ['./deleteSubCategory.component.css']
})
export class DeleteSubCategoryComponent implements OnInit {

  categories: Category[];
  subCategories: SubCategory[];
  selectedCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
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

  getSubCategories(){
    this.subCategoryService.getSubCategories(this.selectedCategory.id).subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
    }, error => {
      this.subCategories = [];
    });
  }

  deleteSubCategory(subCategoryId: number) {
    this.subCategoryService.deleteSubCategoryById(subCategoryId).subscribe(next => {
      this.alertify.success("Unterkategorie mit Id " + subCategoryId + " erfolgreich gelöscht");
      this.subCategories = this.subCategories.filter(item => item.id != subCategoryId);
    }, error => {
      console.log(error);
    });
  }

}
