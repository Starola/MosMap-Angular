import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteCategory',
  templateUrl: './deleteCategory.component.html',
  styleUrls: ['./deleteCategory.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private alertify: AlertifyService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log(this.categories);
    }, error => {
      console.log(error);
    });
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategoryById(categoryId).subscribe(next => {
      this.alertify.success("Kategorie mit Id " + categoryId + " erfolgreich gelöscht");
      this.categories = this.categories.filter(item => item.id != categoryId);
      this.router.navigate(['/admin']);
    }, error => {
      console.log(error);
    });
  }

}
