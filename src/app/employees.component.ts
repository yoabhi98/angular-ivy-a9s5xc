import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div>
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor="let employee of employees>
    <a [routerLink]="employee.id">
    {{employee.name}}
    </a>
    </li>
    </ul>
    </div>`,
})
export class EmployeesComponent {
  title: String = 'Employee List';

  employees = [
    {
      id: 1,
      name: 'Ram',
    },
    {
      id: 2,
      name: 'Ramkk',
    },
    {
      id: 3,
      name: 'Ramjj',
    },
  ];
}
