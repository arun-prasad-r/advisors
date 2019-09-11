# Advisors

This application is created as part of an interview for Ingenio by Arun Prasad.
View Application at [https://advisors.surge.sh](https://advisors.surge.sh)

This app uses a mock api from mockapi.io. 

# REST Adapter 
This application uses RESTAdapter. 
The host is currently set to: 
https://5d78b1efa8c27100149863e2.mockapi.io

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm) (Requires Node version 8 or greater)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd advisors`
* `npm install`

## Running / Local Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

Note: Tests are not complete.

You can view sample integration test for the <Advisor/> component in /tests/integration/components/advisor-test.js

* `ember test`
* `ember test --server` (Shows test results in a browser window)


### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This app is deployed using [ember-surge](https://www.npmjs.com/package/ember-cli-surge).

To deploy, run:
```bash
ember surge
```


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
