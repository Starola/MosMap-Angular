import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl + 'category/';
  curentlySelectedCategories: number[]

  constructor(private http: HttpClient) {
    this.curentlySelectedCategories = [];
   }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategorieById(id): Observable<Category> {
    return this.http.get<Category>(this.baseUrl  + id);
  }
}



