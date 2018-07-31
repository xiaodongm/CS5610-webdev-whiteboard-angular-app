import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Section} from '../models/section.model.client';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {this.loadSections(params['courseId']);
      this.courseService.findCourseById(params['courseId'])
        .then(course => this.course = course);
    });
  }

  section: Section = new Section();
  sections = [];
  user = new User();
  userId;
  course;

  loadSections(courseId) {
    this.section.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  findDuplicateSections(section, sections) {
    for (let i = 0; i < sections.length; i++) {
      if (sections[0].section._id === section._id) {
        return true;
      }
    }
    return false;
  }

  enroll(userId, section) {
    if (section.seats === 0) {
      alert('No available seat for this section!');
    } else {
      let enrolledSections;
      this.service.findSectionsForStudent(this.userId)
        .then(sections => enrolledSections = sections)
        .then(() => {
          if (this.findDuplicateSections(section, enrolledSections)) {
          alert('Student already enrolled in this Section, can not enroll again!');
          } else {
            this.service
              .enrollStudentInSection(userId, section._id)
              .then((response) => {
                return response.json();
              })
              .then(response => {
                if (response.err) {
                  alert('Please log in before enroll!');
                } else {
                  this.router.navigate(['profile']);
                }
              });
          }
        });
    }
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.user = user;
        this.userId = user._id;
      });
  }

}
