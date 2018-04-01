
# express-mongoose-jwt-restful

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

### Project setup
```sh
$ git clone https://github.com/gurucharanmk/express-mongoose-jwt-restful.git
$ cd express-mongoose-jwt-restful
$ #Install all npm dependencies
$ yarn install
$ #Update environmental variables corresponds to setup
$ mv .env-sample .env
$ #Edit .env according to requirement using your favorite editor
$ #Start development server
$ yarn dev
$ #Formatting local code modifications
$ yarn pretty
$ #Linting local code modifications
$ yarn lint
$ #Start server for production mode
$ yarn build
$ yarn prod
$ #Start server for test mode (Not implemented yet)
$ yarn test
```

## Contributing and Participating
We welcome and encourage participation in the project under [this guidance](https://github.com/gurucharanmk/express-mongoose-jwt-restful/blob/master/CODE_OF_CONDUCT.md)
We also welcome and encourage contribution and comments, please contribute  with PR and unit test.

## License
This project is licensed under the [MIT License](https://github.com/gurucharanmk/express-mongoose-jwt-restful/blob/master/LICENSE)
