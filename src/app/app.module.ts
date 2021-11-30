import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { ConfigInterceptor } from './interceptor/config.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ProfilesListComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
