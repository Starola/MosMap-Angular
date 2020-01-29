import {Component, OnInit, ViewChild} from '@angular/core';
import {MapComponent} from '../map-container/map/map.component';
import {LocationService} from '../_services/location.service';
import {GeoJSONprocessingService} from '../_services/geo-jsonprocessing.service'
import {ActivatedRoute} from '@angular/router';
import { LocationDetail } from '../_models/locationDetail';
import { AuthService } from '../_services/auth.service';
import { Photo } from '../_models/Photo';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-locationSingelDetail',
  templateUrl: './locationSingelDetail.component.html',
  styleUrls: ['./locationSingelDetail.component.css']
})
export class LocationSingelDetailComponent implements OnInit {
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

  private name: string;
  private description: string;
  private address: string;
  locationId: number;

  ngOnInit() {
    let locationId = this.activatedRoute.snapshot.params['id']
    this.locationId = locationId;
    this.getData(locationId);
  }

  getData(locationId: number) {
    this.locationService.getLocationById(locationId).subscribe((res: any) => {
      this.location = res;
      this.name = res.locationName;
      this.description = res.locationDescription;
      this.address = res.address;
      this.mapComponent.addSingleGeoJSON(locationId)
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

}
