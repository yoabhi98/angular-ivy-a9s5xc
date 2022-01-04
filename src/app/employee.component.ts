import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  template: `<div>
  <h2>Employee Details</h2>
  <div>
        <label>ID:</label>{{id}}
        </div>
  <button (click)="goBack()">Back</button>
    </div>`,
})
export class EmployeeComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('empid');
  }
  goBack(): void {
    this.location.back();
  }
}
