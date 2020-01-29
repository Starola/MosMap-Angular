import { Component, OnInit, Input } from '@angular/core';
import { LocationDetail } from 'src/app/_models/locationDetail';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() location: LocationDetail;
  constructor() { }

  ngOnInit() {
    console.log(this.location);
  }

}
