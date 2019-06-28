import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  //{path:'', redirectTo: '/departments', pathMatch: 'prefix'} //prefix means if the path matches the url, redirect to department. In this case, not good.
  {path:'', redirectTo: '/departments', pathMatch: 'full'}, //redirect only if the full url match
  {path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent },
  {path: 'employees', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent} // the wild card route must be the last of the routes. Because router tries to match the route from the top
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
