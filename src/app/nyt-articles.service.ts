import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
// import { Observable } from 'rxjs/Observable'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NytArticlesService {
  api: string = environment.api['nyt'];

  constructor(private http: HttpClient) {  }

  getArticlesBySection(section: string) {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${this.api}`)

  }
}
