import { Component, inject, OnInit } from '@angular/core';
import { ProfileserService } from './profileser.service';

@Component({
  selector: 'app-profile',
  imports: [],
templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
 private readonly profileserService=inject(ProfileserService)

 userprofile:userr={}as userr

userid!:string
 ngOnInit(): void {
   this.userid = JSON.parse(localStorage.getItem("userInfo")!)?._id
   this.getprofileinfo()
   
 }

getprofileinfo()
{
  this.profileserService.profileinfo(this.userid).subscribe({


    next:(res)=>
    {
      console.log(res.data.user);
      this.userprofile =res.data.user
    },
     error:(err)=>
    {
      console.log(err);
      
    }
  })
}


}
