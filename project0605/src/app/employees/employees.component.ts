import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Output() employeeEvent = new EventEmitter();

  onChange1() {
    this.employeeEvent.emit('Tom');
  }

  tom2() {
    this.employeeEvent.emit('Peter');
  }
  constructor() { }

  ngOnInit() {
  }

}
