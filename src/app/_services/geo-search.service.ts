import {Injectable} from '@angular/core';
import {OpenStreetMapProvider} from 'leaflet-geosearch';

@Injectable({
  providedIn: 'root'
})
export class GeoSearchService {

  constructor() {
  }

  async geoSearch(query: string) {
    const provider = new OpenStreetMapProvider();
    const results = await provider
      .search({query: query})
      .then(function (result: any) {
        return result[0];
      });
      console.log(results.x);
      return results;
  }
}
