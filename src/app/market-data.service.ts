import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
  apiKey: string = environment.api.markets;

  constructor(private http: HttpClient) { }

  market(ticker) {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&interval=5min&apikey=${this.apiKey}`
    return this.http.get(url);
  }
}



// export class USMarkets {
//   getTicker(ticker) {
//     return new Promise((resolve, reject) => {
//       const request: XMLHttpRequest = new XMLHttpRequest();

//       const apiKey = environment.api.markets;
//       const url=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&interval=5min&apikey=${apiKey}`;
      
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(JSON.parse(request.response.replace(/(\d\d[.]\s)|%/g, ''))["Global Quote"])
//         } else {
//           reject(Error(request.statusText))
//           }
//       };

//       request.open('GET',url);
//       request.send();
//     });

//   }

// }