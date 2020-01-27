import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationForCreation } from '../_models/locationForCreation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl = environment.apiUrl + 'location/';

  constructor(private http: HttpClient) { }

  getLocations(categoryId: number): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl + "categoryid/" + categoryId);
  }

  getLocationById(id): Observable<Location> {
    return this.http.get<Location>(this.baseUrl  + id);
  }

  getGeoJSON(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "geojson/categoryid/" + categoryId);
  }

  createLocation(location: LocationForCreation) {
    return this.http.post(this.baseUrl, location);
  }
}
