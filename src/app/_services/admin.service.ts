import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationForCheck } from '../_models/locationForCheck';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.apiUrl + 'admin/';

  constructor(private http: HttpClient) { }

  getUncheckedLocations(): Observable<LocationForCheck[]> {
    return this.http.get<LocationForCheck[]>(this.baseUrl + "uncheckedlocations");
  }

}
