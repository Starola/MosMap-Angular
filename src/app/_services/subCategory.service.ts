import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';
import { SubCategory } from '../_models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  baseUrl = environment.apiUrl + 'subcategory/';

  constructor(private http: HttpClient) { }

  getSubCategories(categoryId): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.baseUrl + categoryId);
  }

  getSubCategorieById(id): Observable<SubCategory> {
    return this.http.get<SubCategory>(this.baseUrl  + id);
  }
}
