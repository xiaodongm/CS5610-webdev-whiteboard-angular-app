import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/coruse.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) { }

  // user = {};
  user = new User();
  userId;
  sections = [];
  courses: Course[] = [];
  enrolledCourses: Course[] = [];

  update() {
    console.log(this.user);
    this.service
      .update(this.user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  findEnrolledCourses() {
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
                  this.enrolledCourses = new Array();
                  this.enrolledCourses.push(this.courses[j]);
                  return this.enrolledCourses;
                }
              }
            }
          });
      });
  }

  unEnroll(userId, sectionId) {
    this.sectionService.unEnrollSection(userId, sectionId)
      .then(() => this.sectionService.findSectionsForStudent(userId))
      .then(sections => this.sections = sections)
      .then(() => this.findEnrolledCourses())
      .then(enrolledCourses => this.enrolledCourses);
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        if (user.err) {
          alert('You have not logged in!');
        } else {
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
            })
            .then(() => {
            console.log(this.sections);
            console.log(this.courses);
            console.log(this.userId);
          });
        }
      });
      // .then(() => { if (this.userId) {
      // this.sectionService
      // .findSectionsForStudent(this.userId)
      // .then(sections => this.sections = sections ); }
      // });
    //   .then(() => {
    //     this.courseService.findAllCourses()
    //       .then(courses => this.courses = courses);
    //   })
    //   .then(() => {
    //     for (let i = 0; i < this.sections.length; i++) {
    //       for (let j = 0; j < this.courses.length; j++) {
    //         if (this.sections[i].section.courseId === this.courses[j].id) {
    //           this.enrolledCourses.push(this.courses[j]);
    //         }
    //       }
    //     }
    //   }).then(() => {
    //     console.log(this.sections);
    //     console.log(this.courses);
    //     console.log(this.userId);
    // });

  }


}
