export class USMarkets {
  private api = 'E8E527S2C4TU78JR';

  getStocks(ticker) {
    return new Promise((resolve, reject) => {
      const url=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&interval=5min&apikey=${this.api}`;
      const request: XMLHttpRequest = new XMLHttpRequest();
      
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