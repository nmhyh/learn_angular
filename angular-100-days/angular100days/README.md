# Angular100days

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Data & Event Binding
  HTMLInputElement {
    type: 'text',
    value: '123',
    attributes: [],
    ...
  }
  - DATA BINDING
  - EVENT BINDING
  - TWO WAY BINDING

## NgIf Structural Directive

## NgFor Structural Directive

## Class & Style Binding

## Input Binding
  - Data Down: parent component interact with child component

## Output Binding
  - Event Up: child component interact with parent component

## Custom Two-way Data Binding
  - [(ngModel)] = [ngModel] + [ngModelChange]

## ViewChild/ViewChildren

## Content Projection

## ng-template & ng-container

## Basic Dependency Injection
  ** providers **
  useExisting: TabBsGroupComponent (sử dụng cái component có sẵn)
  useClass: SomeClass
  useValue: new SomeClass()
  useFactory: (configService) => {return configService}
  deps: [ConfigurationService]
  multi: ... (custom)

## Content Child & Content Children

## Transform data with Angular Pipes
  - DatePipe
  - UpperCasePipe
  - LowerCasePipe
  
## RxJS Concepts
