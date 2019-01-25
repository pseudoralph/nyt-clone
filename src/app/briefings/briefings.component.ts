import { Component, OnInit } from '@angular/core';
import { BriefingsArticle } from '../models/briefings-article';
import { USMarkets } from '../stock-getter';

// private tickers = ['DJIA','GSPC'];




@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.css']
})

export class BriefingsComponent implements OnInit {

  ngOnInit() {
    console.log('hi')
    const stocks: USMarkets = new USMarkets();
    stocks.getStocks('GSPC').then(function(results) {
      console.log(results)
    });
  }

  


  artcilesArray: BriefingsArticle[] = [
    new BriefingsArticle(`Listen to 'The Daily'`, 'One country, two presidents: explaining the crisis in Venezuela.'),
    new BriefingsArticle(`In the 'At War' Newsletter`,'The relics of war left behind in an Afghan clinic.'),
    new BriefingsArticle('The Neediest Cases Fund','Born with a danerous infection, a daughter needs close care.')
  ];  



}
