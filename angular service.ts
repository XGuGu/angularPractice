Services

Service features:
1.Services are singleton objects // a class that allows only a single instance of itself to be created and gives access to that created instance. !! for  uniqueness
2.Services are capable of returning the data in the form promises or observables
3.Service class is decorated with Injectable decorator
4.The Injectable decorator is required only if our service is making use of some Angular injectable like Http, Response and HttpModule service within it


@Injectable() decorator is a must!

Why are we using Service

A class with a specific purpose
1) Share data
2) Implement application logic
3) External Interaction (connecting to a database)
Nameing convention - .service.ts

Dependency Injection (DI)

Code without DI drawbacks:
1. Code is not flexiable
2. Code is not suitable for testing

DI as design pattern: a Class receives its dependencies from external sources rather than creating them.

DI as framework:
  1. Define Service
  2. Register with Injector
  3. Declare as dependency in List A and List B.....

ng g s employee.service.ts
register in app module: import and in providers[service]
in component:

public employees = [];

constructor(private _employeeService:EmployeeService) {

}
ngOnInit() {
  this.employees = this._employeeService.getEmployees();
}

Observables
is a sequence of items that arrive asynchronously over time.
is a sequence of single item(http response) that arrive asynchronously
HTTP call - single item
Single item - HTTP response

Differences between Observables & Promises?
1. Promise: Promises are only called once and it can return only a single value at a time and the Promises are not cancellable.
2. Observables handle multiple values over time and it can return multiple values and the Observables are cancellable.
3. The Observables are more advanced than Promises.

1. HTTP Get request from EmpService
2. Receive the observable and cast it into an employee array
3. Subscribe to the observable from EmpList and EmpDetail
4. Assign the employee array to a local variable

RxJS
-Reactive Extensions for Javascript
-External library to wrk with Observables

in appmodule.ts:
import { HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule
]

in employee.service.ts:

import { HttpClient } from '@angular/common/http';

@Injectable()
class EmployeeService {

  private: _url: string  = "/assets/data/employees.json";
  constructor(private http: HttpClient) {

  }

  getEmployees():  Observable<Any> {
    return this.http.get(this._url);
  }
}

employee-list.component.ts:

class EmployeeListComponent {

  public employees = [];

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => this,employees = data);
  }
}


Handling HTTP Errors

1. Use the catch operator on the Observable
2. if there is an error, the errorHandler method(the argument) is excuted
3. from the errorHandler, we just throw the exception out
4. component subscribe to the Observable, we get access to the data and error 


in employee.service.ts:

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
class EmployeeService {

  private: _url: string  = "/assets/data/employees.json";
  constructor(private http: HttpClient) {

  }

  getEmployees():  Observable<Any> {
    return this.http.get(this._url)
              .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}

display error in the component:

employee-list.component.ts:

template: `
  <h2>Employee List </h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
`

class EmployeeListComponent {

  public employees = [];
  public errorMsg;

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => this,employees = data,
                  error => this.errorMsg = error);
  }
}
