import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentservService {
  private readonly httpClient = inject(HttpClient)

getPostComment(postId:string):Observable<any>
{
  return this.httpClient.get(environment.baseUrl +`/posts/${postId}/comments?page=1&limit=10`)
}

createPostComment(postId:string ,data:object):Observable<any>
{
  return this.httpClient.post(environment.baseUrl +`/posts/${postId}/comments` ,data)
}

deletepostcomment(postId:string ,commentid:string):Observable<any>
{
  return this.httpClient.delete(environment.baseUrl +`/posts/${postId}/comments/${commentid}`)
}
}
