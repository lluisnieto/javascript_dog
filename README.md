# DogApp

This is a 'DogComponent' ES6 class with 4 basic methods (bark, walk, run, sleep) and 4 auxiliar methods. It executes any of these 4 tasks immediatly unless it is sleeping. In that case it will remember the actions requested and will execute as soon as it wakes up. It's a good boy.

## Angular

Very briefly, Angular is a Javascript framework that runs with Microsoft Typescript.
Typescript is a Javascript superset that implements types and interfaces (contracts).
Angular comes with lots of built in tools ready to develop high performance and mantainable web projects:
- Angular CLI ease a lot working with angular 2: https://cli.angular.io/
- Karma/Jasmine is a JS Unit testing framework and runner: https://karma-runner.github.io/1.0/index.html  https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework)
- Linter to keep clean and well formed code (Not passing with current rules)

## Commands to run this exercise
- git clone https://github.com/lluisnieto/javascript_dog.git
- Inside cloned repository: npm install
- Start the project: ng serve
- Run unit tests: ng test
- Run linter: ng lint