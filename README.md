# survey-sumo

Kinda like survey monkey with random questions built with react-redux and node.

**Check it out on Heroku** https://survey-sumo.herokuapp.com/

## Highlights
This app is really awesome! It's built with some really cool JavaScript technologies including:
- React/redux
- react-router
- Webpack
- Babel
- Node.js
- Express
- Realtime responses with socket.io
- Sequelize
- Fetch
- Json Web Tokens
- Eslint

## Run locally
**Prerequisites**
- mysql server
- node 0.10.46
- npm ^2.15.1

To run locally:

1. Clone the repository  
`$ git clone git@github.com:ndollar/survey-sumo.git`

2. Install NPM dependencies  
`$ npm install`
**Note:**
- My local NPM install takes > 10 minutes.
Probably because I don't have an SSD and were using NPM 2.x.
- There are several NPM warnings because the packages want a newer version of Node

4. Configure MySQL database
- Login to mysql and create `survey_sumo` database
`$ mysql -u <username> -p`
`mysql> create database survey_sumo;`
- Update `/app/db/config/config.js` "development" with username and password

5. Run database migrations  
`$ npm run dbmigrate`

6. Build front-end assets  
`$ npm run bundle`

7. Start server  
`$ npm run start`

8. Check it out!  
Go to `http://localhost:3000`
