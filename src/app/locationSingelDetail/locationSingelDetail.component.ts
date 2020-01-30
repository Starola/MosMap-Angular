import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MapComponent} from '../map-container/map/map.component';
import {LocationService} from '../_services/location.service';
import {GeoJSONprocessingService} from '../_services/geo-jsonprocessing.service'
import {ActivatedRoute} from '@angular/router';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import * as L from 'leaflet';
import { LocationDetail } from '../_models/locationDetail';
import { AuthService } from '../_services/auth.service';
import { Photo } from '../_models/Photo';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-locationSingelDetail',
  templateUrl: './locationSingelDetail.component.html',
  styleUrls: ['./locationSingelDetail.component.css']
})
export class LocationSingelDetailComponent implements AfterViewInit, OnInit{
  @ViewChild(MapComponent, {static: false}) mapComponent: MapComponent;
  @ViewChild(GalleryComponent, {static: false}) galleryComponent: GalleryComponent;

  location: LocationDetail;

  newPhoto: Photo;

  constructor(
    private locationService: LocationService,
    private geoJsonProcessingService: GeoJSONprocessingService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    ) {}

  private map: L.map;
  private name: string;
  private description: string;
  private address: string;
  locationId: number;

  ngOnInit(){
    let locationId = this.activatedRoute.snapshot.params['id']
    this.locationId = locationId;
    this.getData(locationId);
  }

  ngAfterViewInit() {
    this.initMap();
  }

  getData(locationId: number) {
    this.locationService.getLocationById(locationId).subscribe((res: any) => {
      this.location = res;
      this.name = res.locationName;
      this.description = res.locationDescription;
      this.address = res.address;

      this.geoJsonProcessingService.addGeoJSONSingleOnDetailComponent(locationId, this.map);
    });
  }

  private initMap(): void {
    let accessToken = 'pk.eyJ1IjoibWFqb3J0b21sIiwiYSI6ImNqc2E1bHlzZzFud3A0M3JuYTU1MnIxcHMifQ.RJQyiR5__e25Vd-HkhOfsg'
    this.map = L.map('map', {
      center: [49.3481568, 9.1274993],
      zoom: 13.5
    });
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
      maxZoom: 19,
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

}
