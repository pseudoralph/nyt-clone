import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TempService {
  apiKey :string = environment.api.weather;
  location :object = {lat: 45.5231462, long: -122.687949};
  url :string = `https://api.openweathermap.org/data/2.5/weather?lat=${this.location['lat']}&lon=${this.location['long']}&appid=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getLocalWeather() {
    return this.http.get(this.url)
  }
}
