import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { JwtModule } from '@auth0/angular-jwt'
import { environment } from 'src/environments/environment';
import { MapComponent } from './map-container/map/map.component';
import { MarkerService } from './_services/map-services/marker.service';
import { PopUpService } from './_services/map-services/pop-up.service';
import { ShapeService } from './_services/map-services/shape.service';
import { CategorySelectionComponent } from './map-container/category-selection/category-selection.component';
import { SubcategoryContainerComponent } from './map-container/subcategory-container/subcategory-container.component';
import { ResponsiveColumnsDirective } from './_directives/ResponsiveColsDirective.directive';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { CategorySingelSelectorComponent } from './map-container/category-selection/category-singel-selector/category-singel-selector.component';
import { SubcategorySingelSelectorComponent } from './map-container/subcategory-container/subcategory-singel-selector/subcategory-singel-selector.component';
import { SubcategoryElementComponent } from './map-container/subcategory-container/subcategory-singel-selector/subcategory-element/subcategory-element.component';
import { LocationListComponent } from './home/locationList/locationList.component';
import { LocationCategoryListComponent } from './home/locationList/locationCategoryList/locationCategoryList.component';
import { LocationComponent } from './home/locationList/locationCategoryList/location/location.component';
import { LocationSingelDetailComponent } from './locationSingelDetail/locationSingelDetail.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CheckLocationsComponent } from './administrator/checkLocations/checkLocations.component';
import { AddCategoryComponent } from './administrator/addCategory/addCategory.component';
import { AuthInterceptor, AuthInterceptorProvider } from './_services/authInterceptor';
import { LocationToCheckSingleComponent } from './administrator/checkLocations/locationToCheckSingle/locationToCheckSingle.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    MapContainerComponent,
    MapComponent,
    CategorySelectionComponent,
    SubcategoryContainerComponent,
    ResponsiveColumnsDirective,
    CategorySingelSelectorComponent,
    SubcategorySingelSelectorComponent,
    SubcategoryElementComponent,
    LocationListComponent,
    LocationCategoryListComponent,
    LocationComponent,
    LocationSingelDetailComponent,
    AdministratorComponent,
    CheckLocationsComponent,
    AddCategoryComponent,
    LocationToCheckSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [environment.apiUrl],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    AuthService,
    MarkerService,
    PopUpService,
    ShapeService,
    ErrorInterceptorProvider,
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
