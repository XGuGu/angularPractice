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

<a routerLink="/departments" routerLinkActive="active">Departments</a>
<a routerLink="/employees" routerLinkActive="active">Employees</a>

<router-outlet></router-outlet>
