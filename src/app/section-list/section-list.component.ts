import { Component, OnInit } from '@angular/core';
import {Section} from '../models/section.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
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
  course;

  loadSections(courseId) {
    this.section.courseId = courseId;
    if (this.section.courseId) {
      this.service
        .findSectionsForCourse(courseId)
        .then(sections => this.sections = sections);
    }
  }

  createSection(sectionName, seats) {
    if (!this.section.courseId) {
      alert('Please select a course before create section');
    } else {
        if (this.section.seats) {
          if (!this.section.name) {
            this.service
              .createSection(this.section.courseId, this.course.title + ' Section ' + this.sections.length + 1, seats)
              .then(() => {
                this.loadSections(this.section.courseId);
              });
          } else {
            this.service
              .createSection(this.section.courseId, sectionName, seats)
              .then(() => {
                this.loadSections(this.section.courseId);
              });
          }
        } else {
          alert('Please enter valid section name and seats');
        }
    }
  }

  delete(section) {
    this.service
      .deleteSection(section._id)
      .then(() => this.loadSections(this.section.courseId));
  }

  update(section) {
    this.service
      .updateSection(section)
      .then(() => this.loadSections(this.section.courseId))
      .then(() => alert('Update Successful !'));
  }


  ngOnInit() {
  }

}
