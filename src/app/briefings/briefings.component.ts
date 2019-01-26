import { Component, OnInit } from '@angular/core';
import { BriefingsArticle } from '../models/briefings-article';
import { USMarkets } from '../stock-getter';
import { LocalizedTemp } from '../temp-getter';

@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.css']
})

export class BriefingsComponent implements OnInit {
  // stocksReady: boolean;
  gpscResults = {
    changePercent: null,
    price: null,
    ready: false};

    // parseFloat(".0243").toFixed(2);


  djiaResults = {
    changePercent: null,
    price: null,
    ready: false};

  stocks: USMarkets = new USMarkets();

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


  ngOnInit() {
    // const stocks: USMarkets = new USMarkets();

    // stocks.getStocks('gspc').then(function(results) {
    //   console.log(results)
    // });

    // stocks.getStocks('djia').then(function(results) {
    //   console.log(results)
    // });

    const weatherHere = new LocalizedTemp();
    weatherHere.getLatLong().then( (response)=> console.log(response) );

  }

  artcilesArray: BriefingsArticle[] = [
    new BriefingsArticle(`Listen to 'The Daily'`, 'One country, two presidents: explaining the crisis in Venezuela.'),
    new BriefingsArticle(`In the 'At War' Newsletter`,'The relics of war left behind in an Afghan clinic.'),
    new BriefingsArticle('The Neediest Cases Fund','Born with a danerous infection, a daughter needs close care.')
  ];  

}
