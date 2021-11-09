import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../entity/profile';
import { ProfileService } from './../services/profile.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {

  profiles: Profile[] = [];
  filteredProfiles : Profile[] = [];
  p:number = 1;
  filterTerm!:string;

  constructor(
    private profileService:ProfileService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.profileService.getAllProfiles().subscribe( data => {
      this.profiles = data;
    });
  }

  // filterProfiles() {
  //   this.filteredProfiles = this.profiles.filter( res => {
  //     for (let index = 0; index < this.profiles.length; index++) {
  //       const element =[index];
        
  //     }
  //   })
  // }
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
