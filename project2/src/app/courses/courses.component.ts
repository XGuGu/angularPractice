import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses;
  name = 'Tom';
  constructor(private service1: CoursesService) {
    this.courses = service1.getCourses();
  }

  course = {
    title: "CCCourse title",
    rating: 4.9785,
    students: 3000,
    price: 190.95
  };

}
