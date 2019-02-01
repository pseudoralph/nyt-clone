import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
