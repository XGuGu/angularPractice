import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  constructor() {
    this.courses = ['course1', 'course2', 'course3', 'course4']
  }

  add() {
    this.courses.push('courseadded');
  }

  remove(course) {

  }

  ngOnInit() {
  }

}
