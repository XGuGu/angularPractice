Routing in Angular

###########################
// How to navigate between two different views with button clicks

local host:4200

<button>Departments</button>
<button>Employees</button>

localhost:4200/departments
DepartmentList

localhost:4200/employees
EmployeeList

Routing App
1.Generate a project with routing option
2.Generate the components
3.Configure the routes
4.Add buttons and use directives to navigate

app-routing.modules.ts:

import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent}
]

//不一定要做
export const routingComponents = [DepartmentListComponent, EmployeeListComponent]
///

router-outlet!!!!

app.component.html:

`<a routerLink="/departments" routerLinkActive="active">Departments</a>
<a routerLink="/employees" routerLinkActive="active">Employees</a>

<router-outlet> </router-outlet>`

Wildcard Route

We can navigate the user to 404 page error component if the url doesnot match any routes.

app-routing.modules.ts:

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{path:'', redirectTo: '/departments', pathMatch: 'prefix'} //prefix means if the path matches the url, redirect to department. In this case, not good.
  {path:'', redirectTo: '/departments', pathMatch: 'full'}, //redirect only if the full url match
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent} // the wild card route must be the last of the routes. Because router tries to match the route from the top
]

How to pass and read Route Parameters

department-list.component.ts:

template:`
  <h3> Department List </h3>
  <ul class = "items">
    <li *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
  </ul>
`

class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
  ]
}

app-routing.modules.ts:

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponet },
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent}
]

department-list.component.ts:
import { Router } from '@angular/router';

template:`
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
`

class {

  constructor(private router: Router) {}

  onSelect(department) {
    this.router.navigate(['/departments',department.id])
  }
}

department-detail.component.ts:

import { ActivateRoute } from '@angular/router';

template:`
  {{departmentId}}
`

class {

  public departmentId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }
}

//using snapshot paramMap has a drawback

let's add go back and forward button in the Department Detail Components

department-detail.component.ts:

import {ActivatedRoute, Router} from '@angular/router';

template:`
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>
`

class {
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId +  1;
    this.router.navigate(['/departments', nextId]);
  }
}

// we can change url , but the id in the view does not change, this is the drawback of using snapshot
//because the angular reuse the component and the ngOnInit does not get called
we need to read the param value using ParamMap Observable

ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.departmentId = id;
  });
}

Optional Route Parameters

department-detail.component.ts:

template: `
  <div>
    <button (click)="gotoDepartments()"> Back </button>
  </div>
`

class {
  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}])
  }

department-list.component.ts:
import ActivatedRoute and injected

template:`
  <[class.selected]="isSelected(department)"
`

class {
  public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
