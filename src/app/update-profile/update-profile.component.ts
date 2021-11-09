import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../entity/address';
import { Profile } from '../entity/profile';
import { ProfileService } from './../services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id!:number;
  profile:Profile = new Profile();
  address:Address = new Address();

  constructor(
    private profileService: ProfileService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profileService.getProfileById(this.id).subscribe(data=>{
      console.log(data);
      this.profile = data;
      this.address = this.profile.address;
    },error => console.log(error)
    );
  }

  updateProfile(){
    this.profileService.updateProfile(this.id,this.profile).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  
  }

  onSubmit() {
    this.updateProfile();
    this.router.navigate(["/home"]);
  }
}
