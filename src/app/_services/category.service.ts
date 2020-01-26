import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';
import { CategoryForCreation } from '../_models/categoryForCreation';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl + 'category/';
  curentlySelectedCategories: number[];

  constructor(private http: HttpClient) {
    this.curentlySelectedCategories = [];
   }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategorieById(id: number): Observable<Category> {
    return this.http.get<Category>(this.baseUrl  + id);
  }

  createNewCategory(category: CategoryForCreation) {
    return this.http.post(this.baseUrl, category);
  }

  deleteCategoryById(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}



