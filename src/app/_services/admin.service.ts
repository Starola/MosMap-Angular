import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.apiUrl + 'admin/';

  constructor(private http: HttpClient) { }

  getUncheckedLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl + "uncheckedlocations");
  }

}
