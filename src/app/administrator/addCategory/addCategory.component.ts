import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { CategoryForCreation } from 'src/app/_models/categoryForCreation';
import { CategoryForCreationClass } from 'src/app/_models/categoryForCreationClass';

@Component({
  selector: 'app-addCategory',
  templateUrl: './addCategory.component.html',
  styleUrls: ['./addCategory.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: CategoryForCreation;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private alertify: AlertifyService
  ) {
    this.category = new CategoryForCreationClass();
   }

  ngOnInit() {
  }

  createCategory() {
    this.categoryService.createNewCategory(this.category).subscribe(next => {
      this.alertify.success("Kategorie erfolgreich angelegt");
      console.log("Kategorie angelegt");
      this.router.navigate(['/admin']);
    }, error => {
      this.alertify.error("Fehler beim anlegen der Kategorie");
      console.log(error);
    });
  }
}
