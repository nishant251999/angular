import { Router } from '@angular/router';
import { Profile } from './../entity/profile';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../services/profile.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(
    private profileService:ProfileService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe( data => {
      this.profiles = data
    });
  }
  goToUpdatePage(id: number) {
    this.router.navigate(["/updateProfile",id]);
  }

  deleteProfile(id: number) {
    this.profileService.deleteProfile(id).subscribe(data=> {
      console.log(data);
    });
  }
}
