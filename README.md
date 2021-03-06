# NY Times clone

#### NY Times clone website

#### Ralph Perdomo. February 1, 2019

## Description

A study in converting a site to Angular

## Details

This study attempts to modularize the NYTimes website by creating logical components to represent website functionality. This includes a navigation bar (accessible by the ubiquitous pancake stack) that responds much like the NYTimes' site does— click to open, mouse out to close. Navigation is a seperate component (navigation-component) this is attached to the app-component module .

Similar functionality was observed and duplicated in the search module (accessible by the magnifying glass icon). It operates as a toggle, where the only way to close it is by clicking on the icon. Search is then passed along to a method at the header-component level.

The current date displayed on the left-hand side is produced by parsing JS's Date.now() object. This is handled by an imported module (date-builder.ts).

The briefings section is a seperate component detached from heading-component. It instantiates breifings articles provided by a class module (models/briefings-article.ts). Additionally, the breifings section calls on an API (openweather & alphavantage) to retreive up-to-date stock market numbers (DJIA & S&P500) along with localilized weather. 

Hierarchical overview:

* app-component
  * navigation-comonent
  * header-component
  * briefing-component
  * main-content-component

### February 1, 2019 updates:

Clicking on the pancake stack reveals navigation. Clicking on a section heading will load its content in the main content section. The functionality of loading section content is accomplished by first querying a firebase database to check if data exists. 

If data doesn't exist or the data is evaluated as stale (> 1 day), a request is made to NYT's Top Stories API to populate/refresh the database. Only 1 API request is made per day per section.

  * [NEEDS REFACTOR] An observable w/in an observable seems questionable.

![Alt NYTimes clone](https://github.com/pseudoralph/nyt-clone/blob/master/src/assets/screen_shots/cloned_nytimes_screen_shot.png)


## Setup/Installation Requirements

The following API keys are necessary to successfull build and launch this environment: NYTimes, ipStack, OpenWeatherMap, and Alphavantage. Enter these keys into the `template.env.js` file and rename to `.env.js` before launching. 

A firebase realtime database must be used to serve content. Please include your update config snippet within your `.env.js` (`refer to updated template.env.js`).

* clone this repository using `git clone https://github.com/pseudoralph/nyt-clone`
* navigate into this repo and download dependencies: `npm install`
* launch dev environment using `ng serve --open`
  * a new browser window will open at `localhost:4200`

This site is also accessible at [https://ny-times-clone.firebaseapp.com/](https://ny-times-clone.firebaseapp.com/).

Note: Dynaimic location-based weather has been disabled. Current geolocation API relies on an unsecured conneciton that causes Chrome to notify the user in the address. This results in a poor UX and the feature has been removed.

## Technologies Used

JS, Angular

## Objectives
### Personal
- [x] Dynamic content pulled from API in breifings section

- [x] Refactor market and weather in briefings section to be an observables

- [x] ~~Add button to dynamically pull data from NYT API and push into Firebase database and refresh page to show firebase-hosted articles~~ 

- [x] Auto-load articles after selected from navication bar

- [x] Uses a 24 hour cache to reduce number of API calls

- [ ] User authentication with ability to save an article


---
### Outlined
- [x] Project includes a detailed README with information on all completed features as well as features to be added.

- [x] Project includes a detailed commit history that clearly shows at least eight hours of work between 8 and 5 on Friday. You are also welcome to put additional work into your project outside of that time frame.

- [x] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

- [x] README has been updated to include detailed information on all completed features as well as features you plan to add in the future.

- [x] Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)

- [x] Project includes a working Firebase database.

- [x] Project is deployed.

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

* Weather icons provided by [https://github.com/iconic/open-iconic](https://github.com/iconic/open-iconic)
* Weather data provided by [https://openweathermap.org/](https://openweathermap.org/)
* Geolocation data provided by [https://ipstack.com/](https://ipstack.com/)
* Stock market data provided by [https://www.alphavantage.co/](https://www.alphavantage.co/)