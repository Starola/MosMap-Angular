import {Injectable} from '@angular/core';
import {OpenStreetMapProvider} from 'leaflet-geosearch';

@Injectable({
  providedIn: 'root'
})
export class GeoSearchService {

  constructor() {
  }

  geoSearch(query: string) {
    const provider = new OpenStreetMapProvider();
    const results = provider
      .search({query: "Rathaus Mosbach"})
      .then(function (result: any) {
        return result[0];
      });
  }
}
