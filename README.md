This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Weather app
A simple weather app that fetches data from an API according to a user's location 
and displays weather data and messages based on the response.

### Getting started
Clone the repo and start the server.

The app will run on http://localhost:3000

**Requirements: Node ^7.6**
```
> git clone https://github.com/velislav-p/weather-app.git
> cd weather-app
> npm install
```
#### To run the app in dev mode
The app requires a secure connection. For testing purposes run

#####Linux, macOS (Bash)
```
> HTTPS=true npm start
```
**For other operating systems, check out the official docs:
https://facebook.github.io/create-react-app/docs/using-https-in-development**

####In case of errors
If you get an error about the node-sass module after running `npm start`, run this command:

```$xslt
> npm rebuild node-sass
```

### Running the tests
To start the automated tests with Jest in the interactive watch mode:

```
> npm run test
```
