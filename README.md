# what-to-wear

Work In Progress!

##About
Weather forecast app built using React, Redux, ES6, NodeJS, and Express.

###External APIs
- [Place Autocomplete](https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests)
- [Open Weather Map](http://openweathermap.org/)

##Setup
1. clone repo and install dependencies:

  ```javascript
  > git clone https://github.com/girb0t/what-to-wear.git
  > cd what-to-wear
  > npm install
  ```

2. create config.js in the root directory modeled after config_example.js

3. Snag API keys for Google Place Autocomplete and Open Weather Map and put them in config.js

4. Start server

  ```javascript
  > npm run start
  ```

Visit `http://localhost:3000`

##Dev Notes

To run tests:
```
> npm run test:watch
```

To run node-inspector for debugging:
```
> node-inspector
```
