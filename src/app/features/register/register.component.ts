import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {







   private readonly router=  inject(Router);
    private readonly authService=  inject(AuthService)
    registersub= new Subscription();
    loading =false;
 show=false;
  show2=false

registerForm: FormGroup = new FormGroup({
  name: new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]),

  username: new FormControl(""),

  email: new FormControl("", [
    Validators.required,
    Validators.email
  ]),

  gender: new FormControl("", [
    Validators.required
  ]),

  dateOfBirth: new FormControl("", [
    Validators.required
  ]),

  password: new FormControl("", [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
  ]),

  rePassword: new FormControl("", [
    Validators.required
  ]),

},
{
  validators: [this.confirmPassword],
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


confirmPassword(group: AbstractControl) {
  const password = group.get("password")?.value;
  const repassword = group.get("rePassword")?.value;

  if (password !== repassword && repassword !== "") {
    group.get("rePassword")?.setErrors({ mismatch: true });
    return { mismatch: true };
  } else {
  
    return null;
  }
}










  submitTheForm(){

if(this.registerForm.valid)
{
this.registersub.unsubscribe()

this.loading =true
 this.registersub= this.authService.signUp(this.registerForm.value).subscribe({

 next: (res)=>{

 console.log(res.data);
 
  this.router.navigate(["/login"])
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
  this.registerForm.markAllAsTouched();
}
}






}
