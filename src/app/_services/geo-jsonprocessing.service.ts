import {Injectable} from '@angular/core';
import * as L from 'Leaflet';
import {MarkerService} from './map-services/marker.service';
import {ShapeService} from './map-services/shape.service';
import {PopUpService} from './map-services/pop-up.service';
import {LocationService} from './location.service';

@Injectable({
  providedIn: 'root'
})
export class GeoJSONprocessingService {

  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService,
    private popUpService: PopUpService,
    private locationService: LocationService,
  ) {
  }

  addGeoJSON(categoryId: number, map: L.map) {
    this.locationService.getGeoJSON(categoryId).subscribe((res: any) => {
      /*for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
      }*/
      L.geoJSON(res).addTo(map)
    })
  }

  removeGeoJSONbyCategoryId(categoryId: number) {

  }

  addGeoJSONSingle(geojson: any) {

  }
}
