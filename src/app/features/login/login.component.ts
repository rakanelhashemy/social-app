import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {


   private readonly router=  inject(Router);
    private readonly authService=  inject(AuthService)
    registersub= new Subscription();
    loading =false;
 show=false;
  show2=false

loginForm: FormGroup = new FormGroup({

  email: new FormControl("", [
    Validators.required,
    Validators.email
  ]),

  password: new FormControl("", [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
  ]),

},
{
  updateOn: "blur"
});


isShow(ref:HTMLInputElement)
{
  if(this.show)
{
  ref.type="password"
 this.show=!this.show
}
else{
    ref.type="text"
 this.show=!this.show
}
}

isShow2(ref:HTMLInputElement)
{
  if(this.show2)
{ 
  ref.type="password"
 this.show2=!this.show2
}
else{
 
    ref.type="text"
 this.show2=!this.show2
}
}


  submitTheForm(){

if(this.loginForm.valid)
{
this.registersub.unsubscribe()

this.loading =true
 this.registersub= this.authService.signIp(this.loginForm.value).subscribe({

 next: (res)=>{

 console.log(res.data);
   localStorage.setItem("Token",res.data.token )
    localStorage.setItem("userInfo",JSON.stringify(res.data.user) )
  this.router.navigate(["/feed"])
 },

 
 error:(err)=>{
 console.log(err);

   this.loading=false;
 },

complete:()=>{
  this.loading=false;
}


  })



}
else{
  this.loginForm.markAllAsTouched();
}
}



}
