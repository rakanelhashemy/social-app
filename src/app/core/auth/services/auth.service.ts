import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  
    private readonly httpClient = inject(HttpClient);

 signUp(data:object):Observable<any>{
return this.httpClient.post(environment.baseUrl +'/users/signup' , data)
 }

 signIp(data:object):Observable<any>{
return this.httpClient.post(environment.baseUrl +"/users/signin" , data)
 }

  changePassword(data:object):Observable<any>{
return this.httpClient.patch(environment.baseUrl +"/users/change-password" , data)
 }


}
