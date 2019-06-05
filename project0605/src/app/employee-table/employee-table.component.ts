import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  public employee: string
  constructor() { }

  ngOnInit() {
  }

}
