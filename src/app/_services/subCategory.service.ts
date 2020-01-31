import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';
import { SubCategory } from '../_models/subCategory';
import { SubcategoryForCreation } from '../_models/subcategoryForCreation';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  baseUrl = environment.apiUrl + 'subcategory/';

  constructor(private http: HttpClient) { }

  getSubCategories(categoryId): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.baseUrl + "categoryid/" + categoryId);
  }

  getSubCategorieById(id): Observable<SubCategory> {
    return this.http.get<SubCategory>(this.baseUrl  + id);
  }

  createNewSubCategory(subCategory: SubcategoryForCreation) {
    return this.http.post(this.baseUrl, subCategory);
  }

  deleteSubCategoryById(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
