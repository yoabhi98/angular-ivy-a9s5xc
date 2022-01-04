import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employees/:empid', component: EmployeesComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
