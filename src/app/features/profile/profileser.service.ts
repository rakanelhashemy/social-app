import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileserService {
  private readonly httpClient = inject(HttpClient)
  profileinfo(postId: string): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}/users/${postId}/profile`
    );
  }
}
