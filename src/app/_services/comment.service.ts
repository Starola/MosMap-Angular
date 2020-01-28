import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentForCreation } from '../_models/commentForCreation';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  baseUrl = environment.apiUrl + 'comment/';

  constructor(private http: HttpClient) { }

  getCommentsByLocationId(locationId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + "location/" + locationId);
  }

  createComment(comment: CommentForCreation) {
    return this.http.post(this.baseUrl, comment);
  }

}
