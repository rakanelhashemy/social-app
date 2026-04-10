import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  registersub = new Subscription();
  loading = false;
  show = false;
  show2 = false;
show3 =false
  changeerForm: FormGroup = new FormGroup(
    {
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
      ]),

      newPassword: new FormControl("", [
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
    }
  );

  isShow(ref: HTMLInputElement) {
    if (this.show) {
      ref.type = "password";
      this.show = !this.show;
    } else {
      ref.type = "text";
      this.show = !this.show;
    }
  }

  isShow2(ref: HTMLInputElement) {
    if (this.show2) {
      ref.type = "password";
      this.show2 = !this.show2;
    } else {
      ref.type = "text";
      this.show2 = !this.show2;
    }
  }

  
  isShow3(ref: HTMLInputElement) {
    if (this.show3) {
      ref.type = "password";
      this.show3 = !this.show3;
    } else {
      ref.type = "text";
      this.show3 = !this.show3;
    }
  }
  confirmPassword(group: AbstractControl) {
    const newPassword = group.get("newPassword")?.value;
    const repassword = group.get("rePassword")?.value;

    if (newPassword !== repassword && repassword !== "") {
      group.get("rePassword")?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
  }

  submitTheForm() {

    if (this.changeerForm.valid) {

      this.registersub.unsubscribe();

      this.loading = true;

      const body = {
        password: this.changeerForm.value.password,
        newPassword: this.changeerForm.value.newPassword
      };

      this.registersub = this.authService.changePassword(body).subscribe({

        next: (res) => {
          console.log(res);
          console.log("Password changed successfully.");
              localStorage.removeItem("Token")
   localStorage.removeItem("userInfo")
        },

        error: (err) => {
          console.log(err);
          this.loading = false;
        },

        complete: () => {
          this.loading = false;
        }

      });

    } else {
      this.changeerForm.markAllAsTouched();
    }
  }

}