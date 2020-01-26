import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CheckLocationsComponent } from './administrator/checkLocations/checkLocations.component';
import { AddCategoryComponent } from './administrator/addCategory/addCategory.component';
import { DeleteCategoryComponent } from './administrator/deleteCategory/deleteCategory.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdministratorComponent},
  {path: 'admin/checkLocations', component: CheckLocationsComponent},
  {path: 'admin/addCategory', component: AddCategoryComponent},
  {path: 'admin/deleteCategory', component: DeleteCategoryComponent},

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
