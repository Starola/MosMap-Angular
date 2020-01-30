import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {MarkerService} from "../../_services/map-services/marker.service";
import {ShapeService} from "../../_services/map-services/shape.service";
import {GeoJSONprocessingService} from '../../_services/geo-jsonprocessing.service'
import {OpenStreetMapProvider} from 'leaflet-geosearch';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  public map;

  constructor(private markerService: MarkerService,
              private shapeService: ShapeService,
              private geoJSONProcessingService: GeoJSONprocessingService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    let accessToken = 'pk.eyJ1IjoibWFqb3J0b21sIiwiYSI6ImNqc2E1bHlzZzFud3A0M3JuYTU1MnIxcHMifQ.RJQyiR5__e25Vd-HkhOfsg';
    this.map = L.map('map', {
      center: [49.3481568, 9.1274993],
      zoom: 13.5
    });
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
      maxZoom: 19,
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const provider = new OpenStreetMapProvider();

    const results = provider.search({query: "Rathaus Mosbach"}).then(function (result) {
    })
  }

  private locateUser() {
    let map = this.map;
    this.map.locate({setView: true, maxZoom: 15});
    this.map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
      let radius = e.accuracy;
      L.marker(e.latlng).addTo(map);
      L.circle(e.latlng, radius, {color: "primary"}).addTo(map);
    }
  }

  addGeoJSON(categoryID: number) {
    this.geoJSONProcessingService.addGeoJSON(categoryID, this.map);
  }

  removeGeoJSON(categoryID: number) {
    this.geoJSONProcessingService.removeGeoJSONbyCategoryId(categoryID, this.map)
  }

  addSingleGeoJSON(locationID: number) {
    this.geoJSONProcessingService.addGeoJSONSingle(locationID, this.map)
  }

  removeSingleGeoJSON(locationId: number) {
    this.geoJSONProcessingService.removeGeoJSONSingle(locationId, this.map)
  }
}
