import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../entity/address';
import { Profile } from '../entity/profile';
import { ProfileService } from './../services/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  profile:Profile = new Profile();
  address:Address = new Address();
  notAuth = false;

  constructor(
    private profileService: ProfileService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  saveProfile(){
    this.profileService.addProfile(this.profile).subscribe(data => {
      console.log(data);
      window.location.href = "/home";
    },
    (error:any) => {
      console.log(error);
      if(error.status == 403) {
        this.notAuth = true;
      }
    });
  }

  onSubmit(){
    this.profile.address = this.address;
    this.saveProfile();
  }
}
