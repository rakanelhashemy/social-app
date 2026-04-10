import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForgetPaswordComponent } from './features/forget-pasword/forget-pasword.component';
import { FeedComponent } from './features/feed/feed.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ChangePasswordComponent } from './features/change-password/change-password.component';
import { NotFoundError } from 'rxjs';
import { guestGuard } from './core/auth/guards/guest-guard';
import { authGuard } from './core/auth/guards/auth-guard';
import { NotificationComponent } from './features/notification/notification.component';
import { DailsComponent } from './features/dails/dails.component';

export const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{   path:'',
    component:AuthLayoutComponent,
     
     canActivate:[guestGuard],
    children:[
{path:'login' , component:LoginComponent ,title:'Login page'},
{path:'register' , component:RegisterComponent ,title:'Register page'},
{path:'forget' , component:ForgetPaswordComponent ,title:'Forget page'}
]
},
{path:'', 
    component:MainLayoutComponent, 
    canActivate:[authGuard]     
     ,
    children:[
{path:'feed' , component:FeedComponent ,title:'TimeLine page'},
{path:'profile' , component:ProfileComponent ,title:'Profile page'} ,
{path:'notification' , component:NotificationComponent ,title:'Notification Page'},
{path:'change' , component:ChangePasswordComponent ,title:'Change Password Page'},
{path:'details/:id' , component:DailsComponent ,title:'details Page'}
]},
{path:'**',component:NotFoundError ,title:'NotFound Page'}
];
