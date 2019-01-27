import { environment } from 'src/environments/environment';

export class USMarkets {
  getStocks(ticker) {
    return new Promise((resolve, reject) => {
      const request: XMLHttpRequest = new XMLHttpRequest();

      const apiKey = environment.api.markets;
      const url=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&interval=5min&apikey=${apiKey}`;
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(JSON.parse(request.response.replace(/(\d\d[.]\s)|%/g, ''))["Global Quote"])
        } else {
          reject(Error(request.statusText))
          }
      };

      request.open('GET',url);
      request.send();
    });

  }

}