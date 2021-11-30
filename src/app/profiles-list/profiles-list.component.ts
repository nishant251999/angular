import { Component, OnInit, ViewEncapsulation, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../entity/profile';
import { ProfileService } from './../services/profile.service';


@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ProfilesListComponent implements OnInit {

  profiles: Profile[] = [];
  p:number = 1;
  filterTerm!:string;

  constructor(
    private profileService:ProfileService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.profileService.generateToken();
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.profileService.getAllProfilesWithJwt().subscribe( data => {
      this.profiles = data;
    });
  }

  goToUpdatePage(id: number) {
    this.router.navigate(["/updateProfile",id]);
  }

  deleteProfile(id: number) {
    if(confirm('Are you sure?')) {
      this.profileService.deleteProfile(id).subscribe(response=> {
      console.log(response);
      this.fetchProfiles();
      });
    }
  }
}
