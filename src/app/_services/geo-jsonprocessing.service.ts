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

  private group = L.layerGroup();

  private markerIcon = L.icon({ //Test für Custom Markers, muss noch besprochen werden
    iconUrl: '../../../assets/pin.png',
    shadowUrl: '',

    iconSize: [20, 20], // size of the icon
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  })

  addGeoJSON(categoryId: number, map: L.map) {
    this.locationService.getGeoJSON(categoryId).subscribe((res: any) => {
      this.group.addTo(map);
      for (const c of res) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        //let marker = L.marker([lon, lat]);
        //marker.addTo(this.group);

        let popup = L.popup({autoClose: false, closeOnClick: false, closeButton: false})
          .setLatLng([lon, lat])
          .setContent(c.properties.name)
          .addTo(this.group);

        this.group.eachLayer(function (layer) {
          if (layer.layerCategoryID == null) {
            layer.layerCategoryID = categoryId;
            if (layer.layerLocationID == null) {
              layer.layerLocationID = c.properties.id;
            }
          }
        })
      }
    })
  }


  removeGeoJSONbyCategoryId(categoryId: number, map: L.map) {
    this.group.eachLayer(function (layer) {
      if (layer.layerCategoryID === categoryId) {
        map.removeLayer(layer)
      }
    })
  }

  addGeoJSONSingle(locationId: number, map: L.map) {
    this.locationService.getLocationById(locationId).subscribe((res: any) => {
      this.group.addTo(map);

      const lat = res.latitude
      const lon = res.longitude

      let marker = L.marker([lat, lon]).addTo(this.group)

      this.group.eachLayer(function (layer) {
        if (layer.layerCategoryID == null) {
          layer.layerCategoryID = res.categoryId
          if (layer.locationID == null) {
            layer.locationID = locationId;
          }
        }
      })
    })
  }

  removeGeoJSONSingle(locationId: number, map: L.map) {
    this.group.eachLayer(function (layer){
      if (layer.layerLocationID === locationId) {
        map.removeLayer(layer)
      }
    })
  }
}
