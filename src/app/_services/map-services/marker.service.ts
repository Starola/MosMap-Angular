import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet'
import { PopUpService } from "./pop-up.service";

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  //capitals: string = '/assets/usa-state-capitals.geojson';

  constructor(private http: HttpClient,
              private popUpService: PopUpService,
              ) {
  }

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  makeMarkers(map: L.map, path: string): void {
    this.http.get(path).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]);

        marker.bindPopup(this.popUpService.makePopup(c));
        marker.addTo(map);
      }
    });
  }

  setMarker(map: L.map, latlng: any): void {
    const marker = L.marker(latlng);

    marker.addTo(map);
  }

  /*makeCapitalCircleMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {

      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat],
          {
            radius: 10
          });

        circle.bindPopup(this.popUpService.makeCapitalPopup(c));

        circle.addTo(map);
      }
    });

  }*/
}
