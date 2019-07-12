//angular life cycle:
A component has a lifecycle managed by Angular
1. creates the component
2. renders the component
3. creates and renders the component children
4. Check when the component data-bound properties change
5. Destroy the component before removing it from the DOM

ngOnChanges *
ngOninit *
ngDoCheck
  ngAfterContentinit
  ngAfterContentChecked
  ngAfterViewinit
  ngAfterViewChecked
ngOnDestroy *


//angular 5 new feature with angular 4, angularJS
`https://www.simplilearn.com/angularjs-vs-angular-2-vs-angular-4-differences-article`

1.smaller and faster angular framework
2. HttpClientModule from '@angular/common/http' replace HttpModule
3. Cli v1.5, with this version of Angular CLI, all app genereated by default on Angular5
   The build optimizer is activated by default, which can benefit developers from smaller packages
4. some Animation updates
5. RxJS 5.5.2

compare to AngularJS :
//                                AngularJS                                     Angular 2/4
1.Architecture:                     MVC                              controllers were replaced by components and directives
                                                                    Angular4,ngIf and ngFor improved, can use if/else syntax in templates

2.Language:                      JavaScript                        TypeScript(Microsoft, superset of ES6) Angular4 new TS version,powerful type checking and Object-oriented features

3.Expression Syntax:   to bind, remember right ng directive        Angular focuseson "()" for event binding and "[]" for property binding

4.Mobile Support            not built with mobile support                   mobile support

5.Routing                   uses $routeprovider.when()                       @RouteConfig{(...)}

6.Speed        for designers, not enough to fulfill requirements   Angular2 provides better structure, faster
                  client side page load slow


// AngularJS:
  Advantages:
  1. It is unit testing ready.
  2. It has great MVC data binding makes app development fast.
  3. Using HTML as a declarative language makes it very intuitive.
  4. It is a comprehensive solution for rapid front-end development since it does not need any other frameworks or plugins.
  5. AngularJS apps can run on every significant program and advanced cells including iOS and Android-based phones and tablets.

  Disadvantages:
  1. It is big and complicated due to the multiple ways of doing the same thing.
  2. Implementations scale poorly.
  3. If a user of an AngularJS application disables JavaScript, nothing but the basic page is visible.
  4. There’s a lagging UI if there are more than 200 watchers.

// Angular2:
  Advantages:
  1. TypeScript allows code optimization using the OOPS concept.
  2. It is mobile-oriented.
  3. It has improved dependency injection and modularity.
  4. It provides more choice for languages such as Dart, TypeScript, ES5, and ES6 for writing codes.
  5. It offers simpler routing.

  Disadvantages:
  1. It is more complicated to set up compared to AngularJS.
  2. It’s inefficient if you only need to create simple, small web apps.

// Angular4:
  Advantages:
  1. It enables a fast development process.
  2. It’s ideal for single-page web applications with an extended interface.
  3. Full TypeScript support helps in building bulky applications.
  4. Tests are easy to write.
  5. An improved View Engine generates less code in AOT mode.
  6. It has a modularized animation package.

  Disadvantages:
  1. It’s slow when displaying enormous amounts of data.


//difference between constructor and ngOnInit

//Pass data between components

//ngFor and ngRepeat

//Single page application (angluar5)

// Single-Page Applications
(SPAs) are Web apps that load a single HTML page and dynamically
update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create
fluid and responsive Web apps, without constant page reloads. However, this means much of
the work happens on the client side, in JavaScript.

//angular middleware:
They run in front of each erquest made by a router at a specific route.
So in your middleware you can authorize if the current user can see that state

//what is service ? (angular)
Singleton objects in Angular that get instantiated only once during the lifetime of an
application are called services. An Angular service contains methods that maintain the
data throughout the life of an application.

//what are directives in Angular? (angular )
Directives are one of the core features of Angular. They allow an Angular developer
to write new, application-specific HTML syntax. In actual, directives are functions
that are executed by Angular compiler when the same finds them in the DOM.


//how can we create service ?(angular js)
1. service factory
2. provider
3. service (less code than other two)

//what is lazy loading ? (angular)
lazy loading is a module which is used to decrease the start-up time.
When lazy is used, our system application does not need to load everything at once.
It only needs to load what the user expects to see when the application first loads.
The modules which are lazily loaded will only be loaded when the user navigates to their routes.

//why we use lazy loading ?
Lazy loading improves the performance of our system applications. It keeps the initial payload
small and these smaller payloads lead to faster download speeds. It helps in lowering the resource
cost, especially on mobile networks. If a user doesn’t visit a section of the application,
they won’t ever download those resources.

//ng repeat & ngfor
repeat is for angularjs
ngfor is for angular

//what does spa mean ? how to implement spa?

//what is DI and how to implement DI?
DI is a design pattern.
a Class receives its dependencies from external sources rather than create them.



//what is structural directives?
reshape the DOM tree in templates of the components

//Three ways to create a registered service ? (AngularJs)
1.service
2.factory
3.provider
//difference between factory and service
see the cheat sheet
