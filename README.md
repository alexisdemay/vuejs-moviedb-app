# VueJS Sample Application

:rocket: A sample Vue.js application to test performance optimization.

# Usage

## Installing

To install the application, you have to run the following command:
```
npm install
```

Create a `.env` file and add the following values:

```
VUE_APP_MOVIE_DB_API_KEY=<your movie db api key>
MOVIE_DB_API_URL=https://api.themoviedb.org/
```

## Running
### With compiles and hot-reloads for development

```
npm run serve
```

### With express server

```
npm run build
npm run start
```

## Deploying

This project is automatically built and deployed on [Heroku](https://www.google.com) at each push on master branch. You can see the `main.yml` file in `.github/worflows` to have more details about the deployment.
