import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';

const routes: Routes = [
  {path : "home", component : ProfilesListComponent},
  {path : "", redirectTo : "home", pathMatch : "full"},
  {path : "addProfile", component : AddProfileComponent},
  {path : "updateProfile/:id", component : UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
