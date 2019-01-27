# NY Times clone

#### NY Times clone website

#### Ralph Perdomo. January 25, 2019

## Description

A study in converting a site to Angular

## Details

This study attempts to modularize the NYTimes website by creating logical components to represent website functionality. This includes a navigation bar (accessible by the ubiquitous pancake stack) that responds much like the NYTimes' site does— click to open, mouse out to close. Navigation is a seperate component (navigation-component) this is attached to the app-component module .

Similar functionality was observed and duplicated in the search module (accessible by the magnifying glass icon). It operates as a toggle, where the only way to close it is by clicking on the icon. Search is then passed along to a method at the header-component level.

The current date displayed on the left-hand side is produced by parsing JS's Date.now() object. This is handled by an imported module (date-builder.ts).

The briefings section is a seperate component detached from heading-component. It instantiates breifings articles provided by a class module (models/briefings-article.ts). Additionally, the breifings section calls on an API (openweather & alphavantage) to retreive up-to-date stock market numbers (DJIA & S&P500) along with localilized weather. 

Note, the above features were implement past Friday's deadline and are still considered works-in-progress (will be refactoring into seperate components & researching other methods to fulfill a promise).

Hierarchical overview:

* app-component
  * navigation-comonent
  * header-component
  * briefing-component
  * main-content-component

![Alt NYTimes clone](https://github.com/pseudoralph/nyt-clone/blob/master/src/assets/screen_shots/cloned_nytimes_screen_shot.png)

## Setup/Installation Requirements

The following API keys are necessary to successfull build and launch this environment: ipStack, OpenWeatherMap, and Alphavantage. Enter these keys into the `template.env.js` file and rename to `.env.js` before launching.

* clone this repository using `git clone https://github.com/pseudoralph/nyt-clone`
* navigate into this repo and download dependencies: `npm install`
* launch dev environment using `ng serve --open`
  * a new browser window will open at `localhost:4200`

## Technologies Used

JS, Angular

## Objectives
 - [x] Project includes a detailed README with information on all completed features as well as features to be added.

 - [x] Project includes a detailed commit history that clearly shows at least eight hours of work between 8 and 5 on Friday. You are also welcome to put additional work into your project outside of that time frame.

 - [x] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

* Weather icons provided by [https://github.com/iconic/open-iconic](https://github.com/iconic/open-iconic)
* Weather data provided by [https://openweathermap.org/](https://openweathermap.org/)
* Geolocation data provided by [https://ipstack.com/](https://ipstack.com/)
* Stock market data provided by [https://www.alphavantage.co/](https://www.alphavantage.co/)

### License

MIT License

Copyright (c) 2019, Ralph Perdomo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
