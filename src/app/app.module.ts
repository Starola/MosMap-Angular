import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { MarkerService } from "./services/marker.service";
import { HttpClientModule } from "@angular/common/http";
import { PopUpService } from "./services/pop-up.service";
import { ShapeService } from "./services/shape.service";
import { TilesComponent } from './tiles/tiles/tiles.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { TestComponent } from './test/test.component';
import { Map1Component } from './test/map1/map1.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TilesComponent,
    TestComponent,
    Map1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [
    MarkerService,
    PopUpService,
    ShapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
