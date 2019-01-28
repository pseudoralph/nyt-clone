import { Component, OnInit } from '@angular/core';
import { BriefingsArticle } from '../models/briefings-article';

import { USMarkets } from '../models/stock-getter';
import { FindLocation } from '../models/ip-getter'
import { LocalTemp } from '../models/temp-getter';

@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.css']
})

export class BriefingsComponent implements OnInit {
  ngOnInit() {
    this.getMarket();
    this.getWeather();
  }

  stocks: USMarkets = new USMarkets();
  location: FindLocation = new FindLocation();
  localWeather: LocalTemp = new LocalTemp();

  gpscResults = {
    changePercent: null,
    ready: false
  };
    
  djiaResults = {
    changePercent: null,
    ready: false
  };
    
  weatherResults = {
    icon: null,
    fahrenheit: null,
    styledLocation: null,
    ready: false
  };

  getWeather() {
    this.location.getLatLong()
    .then( (geo) => {
      this.weatherResults.styledLocation = `${geo["city"]}, ${geo["region_code"]}`;
      this.localWeather.getLocalWeather({lat: geo["latitude"], long: geo["longitude"]})
      .then( (weather) => {
        this.weatherResults.icon = weather["weather"][0].icon;
        this.weatherResults.fahrenheit = (weather["main"].temp - 273.15) * 9/5 +32 ;
        this.weatherResults.ready = true;
      });
    });

  }

  getMarket() {
    this.stocks.getTicker('gspc').then((response)=>{
      this.gpscResults.changePercent =  parseFloat(response["change percent"]).toFixed(2);
      this.gpscResults.ready = true;
    });
  
    this.stocks.getTicker('djia').then((response)=>{
      this.djiaResults.changePercent =  parseFloat(response["change percent"]).toFixed(2);
      this.djiaResults.ready = true;
    });

  }

  artcilesArray: BriefingsArticle[] = [
    // snapshot from Friday, Jan 25
    new BriefingsArticle(`Listen to 'The Daily'`, 'One country, two presidents: explaining the crisis in Venezuela.'),
    new BriefingsArticle(`In the 'At War' Newsletter`,'The relics of war left behind in an Afghan clinic.'),
    new BriefingsArticle('The Neediest Cases Fund','Born with a danerous infection, a daughter needs close care.')
  ];  

}
