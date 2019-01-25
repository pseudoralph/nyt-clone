export class USMarkets {
  private api = 'E8E527S2C4TU78JR';

  getStocks(ticker) {
    return new Promise((resolve, reject) => {
      const url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${this.api}`;
      const request: XMLHttpRequest = new XMLHttpRequest();
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(JSON.parse(request.response))
        } else {
          reject(Error(request.statusText))
          }
      };

      request.open('GET',url);
      request.send();
    });

  }


}


// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GSPC&interval=5min&apikey=E8E527S2C4TU78JR");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("Postman-Token", "19657a9b-7c89-490d-9373-24d42d596cb2");

// xhr.send(data);


