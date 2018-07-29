import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/coruse.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = new User();
  userId;
  courses: Course[] = [];
  enrolledCourses: Course[] = [];
  sections = [];

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (!user.err) {
          this.user = user;
          this.userId = user._id;
          this.courseService.findAllCourses()
            .then(courses => this.courses = courses)
            .then(() => {
              this.sectionService
                .findSectionsForStudent(this.userId)
                .then(sections => this.sections = sections)
                .then(() => {
                  for (let i = 0; i < this.sections.length; i++) {
                    for (let j = 0; j < this.courses.length; j++) {
                      if (this.sections[i].section.courseId === this.courses[j].id) {
                        this.enrolledCourses.push(this.courses[j]);
                      }
                    }
                  }
                });
            });
        }
      }).then(() => console.log(this.userId));
  }

}
