import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Section} from '../models/section.model.client';

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  section: Section = new Section();
  sections = [];

  loadSections(courseId) {
    this.section.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
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

  ngOnInit() {
  }

}
