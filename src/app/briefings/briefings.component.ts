import { Component } from '@angular/core';
import { BriefingsArticle } from '../models/briefings-article';

import { USMarkets } from '../models/stock-getter';
import { FindIP } from '../models/ip-getter'
import { LocalizedTemp } from '../models/temp-getter';

@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.css']
})

export class BriefingsComponent {
  stocks: USMarkets = new USMarkets();
  location: FindIP = new FindIP();
  localWeather: LocalizedTemp = new LocalizedTemp();

  gpscResults = {
    changePercent: null,
    price: null,
    ready: false
  };
    
  djiaResults = {
    changePercent: null,
    price: null,
    ready: false
  };
    
  weatherResults = {
    icon: null,
    fahrenheit: null,
    location: null,
    rawLocation: null,
    rawWeaather: null,
    ready: false
  };

  gspc = this.stocks.getStocks('gspc').then((response)=>{
    this.gpscResults.changePercent =  parseFloat(response["change percent"]).toFixed(2);
    this.gpscResults.price = response["price"];
    this.gpscResults.ready = true;
  });

  djia = this.stocks.getStocks('djia').then((response)=>{
    this.djiaResults.changePercent =  parseFloat(response["change percent"]).toFixed(2);
    this.djiaResults.price = response["price"];
    this.djiaResults.ready = true;
  });

  weatherHere = this.location.getLatLong()
  .then( (ip) => {
    const locationData = {lat: ip["latitude"], long: ip["longitude"]};
    this.weatherResults.rawLocation = ip;
    this.weatherResults.location = `${ip["city"]}, ${ip["region_code"]}`;
    this.localWeather.getLocalWeather(locationData)
    .then( (weather) => {
      this.weatherResults.icon = weather["weather"][0].icon;
      this.weatherResults.fahrenheit = (weather["main"].temp - 273.15) * 9/5 +32 ;
      this.weatherResults.rawWeaather = weather;
      this.weatherResults.ready = true;
    });
  });

  artcilesArray: BriefingsArticle[] = [
    new BriefingsArticle(`Listen to 'The Daily'`, 'One country, two presidents: explaining the crisis in Venezuela.'),
    new BriefingsArticle(`In the 'At War' Newsletter`,'The relics of war left behind in an Afghan clinic.'),
    new BriefingsArticle('The Neediest Cases Fund','Born with a danerous infection, a daughter needs close care.')
  ];  

}
