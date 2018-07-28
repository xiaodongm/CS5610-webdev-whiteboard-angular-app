import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  // user = {};
  user = new User();
  userId;
  sections = [];

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

  unEnroll(userId, sectionId) {
    this.sectionService.unEnrollSection(userId, sectionId)
      .then(() => this.sectionService.findSectionsForStudent(userId))
      .then(sections => this.sections = sections);
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
        }
      }).then(() => { if (this.userId) {
      this.sectionService
      .findSectionsForStudent(this.userId)
      .then(sections => this.sections = sections ); }
      });

  }


}
