# Zelp Single Page Application AngularJS
### To install:

`$ git clone https://github.com/CFin86/zelp.git`

`$ cd zelp`

`$ npm install `
### Start & watch
`$npm start`
### Overview
You will create a single-page application (SPA) with Angular JS. You will build a website called Zelp. This website will help people decide where to go for food by returning a list of top rated restaurants in a selected city serving a user’s preferred choice of cuisine. The [API from Zomato.com](https://developers.zomato.com/) will be utilized as a data source. You will need to create an account for Zomato to receive an access key to access the API. There is a rate limit – only a certain number of requests can be made per day per key.

### Project Architecture
The Angular JS application will have three states (pages): a home state, a cuisines state, and a restaurants state. Templates for each associated state will live in the *./templates* folder along with the template for the navbar component. Controller logic and any other JavaScript code should go in modularized folders with the *./js* folder. All necessary images are provided in *./images,* mockups of each state for desktop and mobile devices can be found [here](https://imgur.com/a/ryILC), and any styling you need should go within *./css/site.css.*
  

### Code Conceptualization
Zelp will consist of three states (pages). Each page will have an accompanying template and controller.
#### Navbar
* Create an Angular JS component for the navbar that references a template: *./templates/navbar.html*
#### Home Page
* The home page should have a state mapped to the url of “/” (the root of the site)
* When a user enters the name of a city in the text input and presses either the
“Enter” key or presses the “Go” button, send that search value to the */cities* endpoint
for Zomatos API to get a list of matching cities
* Display the list of matching cities in a Bootstrap Modal
* When the user clicks the “Select” button next to their desired city, transition the app
to the **cuisines** state and pass through the city id as a state parameter
#### Cuisines Page
* If the user navigates to this cuisine url directly instead of going through the homepage, use the city_id state parameter from the URL to make the same API request in Step 1 and set the city id in the application
* The cuisines page should have a state mapped to the url of “/:city_id/cuisines”, where :city_id is a state parameter
* Use the city id from the home page to make a request to the /cuisines endpoint of Zomato’s API to get a list of cuisines in that city
* Create a “selected” property on each cuisine to keep track of whether the user has clicked on it or not (or unselected it)
* Once a user has chosen three cuisines, transition the app to the **restaurants** state, passing through the city id and list of selected cuisine ids as state parameters
#### Restaurants Page
* If the user navigates to this restaurants url directly instead of going through the homepage, use the city_id state parameter from the URL to make the same API request in Step 1 and set the city id in the application

* Use the city_id and cuisines_id state parameters to make a request to the */search* endpoint of Zomato’s API to get a list of matching restaurants, sorted by rating descending (highest rated first)
* When a user clicks on the “Get Directions” button, send them to Google Maps with the latitude/longitude of the restaurant pre-set.
