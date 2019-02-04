import { Component, OnInit } from '@angular/core';
import { BriefingsArticle } from '../models/briefings-article';

import { TempService } from '../temp.service';
import { MarketDataService } from '../market-data.service';

@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.css']
})

export class BriefingsComponent implements OnInit {
  weather = {};
  djia;
  gspc;

  constructor(private tempService: TempService, private marketData: MarketDataService) { }

  ngOnInit() {
    this.marketData.market('djia').subscribe(response => {
      this.djia = parseFloat(response['Global Quote']['10. change percent'].replace(/%/,'')).toFixed(2);
    });

    this.marketData.market('gspc').subscribe(response => {
      this.gspc = parseFloat(response['Global Quote']['10. change percent'].replace(/%/,'')).toFixed(2);
    });

    this.tempService.getLocalWeather().subscribe(results => {
      this.weather['icon'] = `assets/img/weather_icons/${results["weather"][0].icon}.svg`;
      this.weather['fahrenheit'] = (results["main"].temp - 273.15) * 9/5 +32;
      this.weather['styledLocation'] = "Portland, OR";
    });

  }

  artcilesArray: BriefingsArticle[] = [
    // snapshot from Friday, Jan 25
    new BriefingsArticle(`Listen to 'The Daily'`, 'One country, two presidents: explaining the crisis in Venezuela.'),
    new BriefingsArticle(`In the 'At War' Newsletter`,'The relics of war left behind in an Afghan clinic.'),
    new BriefingsArticle('The Neediest Cases Fund','Born with a danerous infection, a daughter needs close care.')
  ];  

}
