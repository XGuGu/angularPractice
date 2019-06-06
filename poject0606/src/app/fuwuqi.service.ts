import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuwuqiService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  public updatePost(post): Observable<any> {
    return this.http.patch(this.url + '/' + post.id,
      JSON.stringify({isRead: true}));
  }
}
