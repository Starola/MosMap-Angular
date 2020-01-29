import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';
import { SubCategory } from 'src/app/_models/subCategory';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { SubcategoryForCreation } from 'src/app/_models/subcategoryForCreation';
import { SubCategoryForCreationClass } from 'src/app/_models/subCategoryForCreationClass';

@Component({
  selector: 'app-addSubCategory',
  templateUrl: './addSubCategory.component.html',
  styleUrls: ['./addSubCategory.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  subCategory: SubcategoryForCreation;

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private alertify: AlertifyService,
    private router: Router
    ) {
      this.selectedCategory = null;
      this.subCategory = new SubCategoryForCreationClass();
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

  setCategoryId(){
    this.subCategory.categoryId = this.selectedCategory.id;
  }

  createSubCategory() {
    this.setCategoryId();
    this.subCategoryService.createNewSubCategory(this.subCategory).subscribe(next => {
      this.alertify.success("Unterkategorie erfolgreich erstellt");
      this.router.navigate(['/admin']);
    }, error => {
      this.alertify.error("Fehler beim anlegen der Unterkategorie");
      console.log(error);
    });
  }

}
