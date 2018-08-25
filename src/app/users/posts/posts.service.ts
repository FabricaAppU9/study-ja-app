import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  homeUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.homeUrl}`);
  }

}
