import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {routing} from './app-routing';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import { RegisterComponent } from './register/register.component';
import {UserServiceClient} from './services/user.service.client';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CourseGridComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CourseViewerComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    ModuleServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
