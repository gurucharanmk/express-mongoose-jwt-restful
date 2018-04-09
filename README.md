

# express-mongoose-jwt-restful (Development in progress)

### Overview
A demonstration of RESTful API implementation using express and mongoose with JWT secured endpoints by following best practices.
Currently we are able to serve the simple endpoint, and project is under development state.

### Features
| Feature | Brief Explanation |
| ------ | ------ |
| ES2015 support | Used latest available language feature through [babel](https://babeljs.io/) |
| Linting support | Used [Airbnb Javascript coding guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) through [ESlint](https://eslint.org/) |
| Code formatting | Used [prettier](https://prettier.io/) to format the code along with linting |
| Monitor source changes | Used [nodemon](https://nodemon.io/) to monitor / watch source code changes |
| Pre-commit hooks | Used [husky](https://github.com/typicode/husky) hook to pre-commit git hook and [lint-staged](https://github.com/okonet/lint-staged) to get the staged changes |
|Environment configuration | Used [dotenv](https://github.com/motdotla/dotenv)  to configure the setup through ".env" file |
|Database support | Used NoSQL database [MongoDB](https://www.mongodb.com/) along with [Mongoose](http://mongoosejs.com/) as ODM  |
|Request validations | Made use of [express-validator](https://github.com/ctavan/express-validator) for validating requests and also for sanitizing  |
|HTTP Status code | Used [http-status](https://github.com/adaltas/node-http-status) to return the status code to connected clients  |
|Promises | Used [Bluebird](http://bluebirdjs.com/docs/getting-started.html) for [Mongoose](http://mongoosejs.com/) promises  |

### Project setup

##### Database setup
If you have installed [MongoDB](https://www.mongodb.com/) locally, use below command to run as server.
```sh
$ mongod
```
> **Note:** Use [mlab](https://mlab.com/), which provides free 512MiB of [MongoDB](https://www.mongodb.com/) if you don't want to install it locally.

##### Clone the code
```sh
$ git clone https://github.com/gurucharanmk/express-mongoose-jwt-restful.git
```

##### Install npm dependencies of the project
```sh
$ cd express-mongoose-jwt-restful
$ yarn install
```

##### Update the environment
```sh
$ mv .env-sample .env
```
Update .env with relevant information.

##### Run the server in development mode
```ssh
$ yarn dev
```

##### Run the server in production mode
```ssh
$ yarn build
$ yarn prod
```

##### Run the server in testing mode (Not implemented yet!)
```ssh
$ yarn test
```
##### Using code formatter and linter (On code changes)
```sh
$ yarn pretty
$ yarn lint
```

## Contributing and Participating
We welcome and encourage participation in the project under [this guidance](https://github.com/gurucharanmk/express-mongoose-jwt-restful/blob/master/CODE_OF_CONDUCT.md)
We also welcome and encourage contribution and comments, please contribute  with PR and unit test.

## License
This project is licensed under the [MIT License](https://github.com/gurucharanmk/express-mongoose-jwt-restful/blob/master/LICENSE)
