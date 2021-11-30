import { AuthGuard } from './services/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';

const routes: Routes = [
  {path : "home", component : ProfilesListComponent, canActivate:[AuthGuard]},
  {path : "#", redirectTo : "home", pathMatch : "full"},
  {path : "addProfile", component : AddProfileComponent, canActivate:[AuthGuard]},
  {path : "updateProfile/:id", component : UpdateProfileComponent, canActivate:[AuthGuard]},
  {path : "login", component: LoginComponent},
  {path : "register", component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
