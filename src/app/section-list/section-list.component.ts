import { Component, OnInit } from '@angular/core';
import {Section} from '../models/section.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  section: Section = new Section();
  sections = [];

  loadSections(courseId) {
    this.section.courseId = courseId;
    if (this.section.courseId) {
      this.service
        .findSectionsForCourse(courseId)
        .then(sections => this.sections = sections);
    }
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.section.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.section.courseId);
      });
  }

  delete(section) {
    // alert(section._id);
    this.service
      .deleteSection(section._id)
      .then(() => this.loadSections(this.section.courseId));
  }

  ngOnInit() {
  }

}
