import { Component, OnInit } from '@angular/core';
import { BriefingsArticle } from '../models/briefings-article';

import { USMarkets } from '../models/stock-getter';

import { TempService } from '../temp.service';
import { MarketDataService } from '../market-data.service';

@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.css']
})

export class BriefingsComponent implements OnInit {
  weather = {};

  constructor(private tempService: TempService, private marketData: MarketDataService) { }

  ngOnInit() {
    this.getMarket();

    this.marketData.market('djia').subscribe(response => {

      console.log(response["Global Quote"].replace(/(\d\d[.]\s)|%/g, ''))
    })

    this.tempService.getLocalWeather().subscribe(results => {
      this.weather['icon'] = results["weather"][0].icon;
      this.weather['fahrenheit'] = (results["main"].temp - 273.15) * 9/5 +32;
      this.weather['styledLocation'] = "Portland, OR";

      console.log(results);
    });

  }

  stocks: USMarkets = new USMarkets();

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
