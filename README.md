# react-movieList-reviews
Practice React project

## Mockup
![project mockup](https://www.evernote.com/l/Alcy-AU2-UBHuaCwXsHoTOjAjvl5XHLNtlsB/image.png)

## First STEPS:
1. Fork repo then clone onto your machine
2. Run npm install from root folder to download dependencies
3. Take a look at the code base:
  + webpack.config.js file => try to figure out what it does and how it works to use babel to compile React files to ES5.
    + For more info, read: https://www.valentinog.com/blog/webpack-4-tutorial/
    + Check out the .babelrc file to see how we are configuring babel
  + Look at the package.json file to see what dependencies we will be using and what scripts we will use to start up the app
  + Look at the SRC folder - and understand the parts
    + Lib folder will be where we are creating API call functions
    + Config folder to put our API keys (more instructions below)
    + Components folder
      + Check out the different components and how they work together
  + We will be using ES6 ‘import’ statements and ‘export’ing functions in the application instead of putting all files and components on the global scope in the browser:
    + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
    + https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac
  + Do not change index.js and index.html in src file
    + They are used as starting files for webpack and are compiled to the index.js and index.html in the dist folder
4. Get API keys
  + Visit: www.omdbapi.com (open movie database)
    + Click API Key on top bar
    + Get a Free account
    + API Key sent to your email
  + Visit: http://developer.nytimes.com/
    + Click Get API key
    + Add name/email
    + For Website type “none”
    + Choose API Key => Movie Reviews API
    + Scroll down the page and use the API tool to explore the data you can get from the movie reviews api
  + Usage:
    + http://www.omdbapi.com/?apikey=[yourkey]&
    + http://api.nytimes.com/svc/movies/v2/reviews/search.json
    + **YOU GET TO DECIDE WHAT DATA YOU WANT TO USE IN YOUR COMPONENTS**
  + Fix config files by removing the ‘example’ in the filename then adding api keys

5. Npm run react-dev (to compile code)
6. Npm start (to start live-server on compiled code)

## BUILD THE APP
+ Create a dynamic **MovieList** component
+ Create **MovieListItem** components to populate MovieList
  + Instead of just creating a ‘list’ create individual ‘cards’ to be displayed holding all info you want returned from OMDB API
+ Write OMDB API helper function to get data back from API
+ Write **Search** component that uses API helper function to get data from OMDB
+ Populate **MovieList** and **MovieListItem** with data returned from OMDB
+ Make **MovieListItem** ‘clickable’ and dynamically render to top of page when clicked
+ Using lifecycle methods or click handler, call NYTimes movie review API with name of clicked Movie and dynamically render **MovieReviews** component
  + Dynamically render **MovieReviews** component with data returned from Movie Reviews API and render **MovieReviews** component at top of page underneath **MovieListItem**
  + Note: can create ‘container’ component to hold both clicked **MovieListItem** component and **MovieReviews** component.

## ADVANCED CONTENT
+ Use ‘styled-components’ npm package to write UI wrapper components for styling the app
+ Write small node server to serve up static compiled html file (dist/html)
  + Fix npm start command to start node server instead of using live-server
+ Implement ‘live search’ where options are listed with each keystroke while searching
