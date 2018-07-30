import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    if (username && password) {
      if (password !== password2) {
        alert('Passwords Do Not Match!');
      } else {
        this.service
          .createUser(username, password)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.err) {
              this.router.navigate(['profile']);
            } else {
              alert('Username already exist, can not register');
            }
          });
      }
    } else {
      alert('Please enter username and password!');
    }
  }

  ngOnInit() {
  }

}
