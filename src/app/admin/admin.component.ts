import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courses = [];
  courseId;

  loadCourses() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.loadCourses();
  }
  ngOnInit() {
  }

}
