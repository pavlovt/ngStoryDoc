# Basic Angular 5 project with Storybook and Compodoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.
It contains also [Storybook](https://storybook.js.org/basics/guide-angular/) for shared components documentation and [Compodoc](https://compodoc.github.io/website/guides/features.html) for all components, moduels and routing documentation.

## Angular server
### Development server

Run `yarn start` or `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` or `npm run build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Storybook server
Create new storyes in /stories folder and include them in /stories/config.js.
Run `yarn sbook` or `npm run sbook` and open the storyboard server on `http://localhost:9001`

## Compodoc server
Compile the documentation by running `yarn doc` or `npm run doc`. Then run `node doc` and open the server on `http://localhost:8080`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
