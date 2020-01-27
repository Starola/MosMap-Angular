import {Component, OnInit, ViewChild} from '@angular/core';
import {MapComponent} from '../map-container/map/map.component';
import {LocationService} from '../_services/location.service';
import {GeoJSONprocessingService} from '../_services/geo-jsonprocessing.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-locationSingelDetail',
  templateUrl: './locationSingelDetail.component.html',
  styleUrls: ['./locationSingelDetail.component.css']
})
export class LocationSingelDetailComponent implements OnInit {
  @ViewChild(MapComponent, {static: false}) mapComponent: MapComponent;


  constructor(private locationService: LocationService, private geoJsonProcessingService: GeoJSONprocessingService, private activatedRoute: ActivatedRoute) {
  }

  private name: string;
  private description: string;
  private address: string;

  ngOnInit() {
    let locationId = this.activatedRoute.snapshot.params['id']
    this.getData(locationId);
  }

  getData(locationId: number) {
    this.locationService.getLocationById(locationId).subscribe((res: any) => {
      this.name = res.locationName;
      this.description = res.locationDescription;
      this.address = res.address;

      this.mapComponent.addSingleGeoJSON(locationId)
    });
  }

}
