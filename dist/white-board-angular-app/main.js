(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: red;\r\n  border-color: red;\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n\r\n#profile {\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row container-fluid\">\n  <div class=\"col-4\">\n    <h1>Admin</h1>\n    <a id=\"profile\" routerLink=\"/profile\">Profile</a>\n    <a routerLink=\"/home\">Home</a>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Courses</li>\n      <li *ngFor=\"let course of courses\"\n          class=\"list-group-item wbdv\"\n          [ngClass]=\"{'active': course.id == courseId}\">\n        <a routerLink=\"/admin/course/{{course.id}}/section\">\n          {{course.title}}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-8\">\n    <app-section-list></app-section-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.courses = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    AdminComponent.prototype.loadCourses = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    AdminComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.loadCourses();
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _section_viewer_section_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-viewer/section-viewer.component */ "./src/app/section-viewer/section-viewer.component.ts");








var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'admin/course/:courseId/section', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'course/:courseId/section', component: _section_viewer_section_viewer_component__WEBPACK_IMPORTED_MODULE_7__["SectionViewerComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CourseViewerComponent"] },
    { path: '**', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _topic_tabs_topic_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./topic-tabs/topic-tabs.component */ "./src/app/topic-tabs/topic-tabs.component.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _section_viewer_section_viewer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./section-viewer/section-viewer.component */ "./src/app/section-viewer/section-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_6__["CourseGridComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_12__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_13__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_15__["LessonTabsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _topic_tabs_topic_tabs_component__WEBPACK_IMPORTED_MODULE_19__["TopicTabsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__["SectionListComponent"],
                _section_viewer_section_viewer_component__WEBPACK_IMPORTED_MODULE_24__["SectionViewerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_7__["CourseServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_9__["UserServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_14__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_16__["LessonServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_20__["TopicServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__["WidgetServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__["SectionServiceClient"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#enroll {\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Course Grid ({{courses.length}})</h2>\n\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <a routerLink=\"/course/{{course.id}}\"\n           class=\"btn btn-primary\">View</a>\n        <a routerLink=\"/course/{{course.id}}/section\"\n           id=\"enroll\"\n           class=\"btn btn-primary\">Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>{{course.title}}</h2>\n  <a routerLink=\"/home\">Home</a>\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_coruse_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/coruse.model.client */ "./src/app/models/coruse.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.course = new _models_coruse_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\r\n  margin-right: 5px;\r\n}\r\n\r\n#register {\r\n  margin-right: 5px;\r\n}\r\n\r\n#user {\r\n  margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <h1>White Board</h1>\n\n  <a id=\"login\" routerLink=\"/login\" class=\"btn btn-info\">Login</a>\n  <a id=\"register\" routerLink=\"/register\" class=\"btn btn-info\">Register</a>\n  <a *ngIf=\"userId\" routerLink=\"/profile\" class=\"btn btn-info\">Profile</a>\n  <!--<a routerLink=\"/quizzes\">Quizzes</a>-->\n\n  <hr *ngIf=\"userId\" class=\"my-4\">\n  <h4 id=\"user\" *ngIf=\"userId\">Logged in as : {{user.username}}</h4>\n  <hr *ngIf=\"userId\" class=\"my-4\">\n\n  <h3 *ngIf=\"userId\">Enrolled Courses ({{enrolledCourses.length}})</h3>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let course of enrolledCourses\" class=\"list-group-item\">\n      <strong>{{course.title}}</strong>\n      <a routerLink=\"/course/{{course.id}}\"\n         class=\"btn btn-primary float-right\">View</a>\n    </li>\n  </ul>\n  <hr class=\"my-4\">\n\n  <app-course-grid></app-course-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(userService, courseService, sectionService, router) {
        this.userService = userService;
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.courses = [];
        this.enrolledCourses = [];
        this.sections = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            if (!user.err) {
                _this.user = user;
                _this.userId = user._id;
                _this.courseService.findAllCourses()
                    .then(function (courses) { return _this.courses = courses; })
                    .then(function () {
                    _this.sectionService
                        .findSectionsForStudent(_this.userId)
                        .then(function (sections) { return _this.sections = sections; })
                        .then(function () {
                        for (var i = 0; i < _this.sections.length; i++) {
                            for (var j = 0; j < _this.courses.length; j++) {
                                if (_this.sections[i].section.courseId === _this.courses[j].id) {
                                    _this.enrolledCourses.push(_this.courses[j]);
                                }
                            }
                        }
                    });
                });
            }
        }).then(function () { return console.log(_this.userId); });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: red;\r\n  border-color: red;\r\n}\r\n\r\n.active.wbdv {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item\">\n    <a class=\"nav-link wbdv\"\n       [ngClass]=\"{'active': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n\n<app-topic-tabs></app-topic-tabs>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        if (this.moduleId) {
            this.loadLessons(this.courseId, this.moduleId);
        }
    };
    LessonTabsComponent.prototype.loadLessons = function (courseId, moduleId) {
        var _this = this;
        this.courseId = courseId;
        this.moduleId = moduleId;
        console.log(moduleId);
        this.service.findLessonsForModule(courseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register {\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n\n  <a id=\"register\" routerLink=\"/register\">Register</a>\n  <a routerLink=\"/home\">Home</a>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        console.log([username, password]);
        if (username && password) {
            this.service
                .login(username, password)
                .then(function (response) {
                return response.json();
            })
                .then(function (user) {
                if (!user.err) {
                    _this.router.navigate(['profile']);
                }
                else {
                    alert('User not exist or Password incorrect');
                }
            });
        }
        else {
            alert('Please enter valid Username and Password!');
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/coruse.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/coruse.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/section.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/section.model.client.ts ***!
  \************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section() {
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: red;\r\n  border-color: red;\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Modules</li>\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item wbdv\">\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logout {\r\n  margin-right: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#home {\r\n  margin-right: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#admin {\r\n  margin-right: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#delete {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <input [(ngModel)]=\"user.username\"\n         placeholder=\"username\"\n         class=\"form-control\"\n         readonly/>\n  <input [(ngModel)]=\"user.firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.phone\"\n         placeholder=\"phone\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.address\"\n         placeholder=\"address\"\n         class=\"form-control\"/>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n\n  <hr class=\"my-3\">\n\n  <h2>Enrolled Courses ({{enrolledCourses.length}})</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let course of enrolledCourses\" class=\"list-group-item\">\n      <strong>{{course.title}}</strong>\n      <a routerLink=\"/course/{{course.id}}\"\n         class=\"btn btn-primary float-right\">View</a>\n    </li>\n  </ul>\n  <hr class=\"my-3\">\n\n  <h2>Sections ({{sections.length}})</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n     <span> {{enrollment.section.name}}\n      ({{enrollment.section.seats}})\n      | Grade: {{enrollment.grade}}</span>\n      <button (click)=\"unEnroll(userId, enrollment.section._id)\"\n              class=\"btn btn-outline-danger float-right\">Un-Enroll\n      </button>\n    </li>\n  </ul>\n\n  <a id=\"logout\" class=\"btn btn-warning\" (click)=\"logout()\">Logout</a>\n  <a id=\"home\" class=\"btn btn-primary\" routerLink=\"/home\">Home</a>\n  <a id=\"admin\" *ngIf=\"user.username === 'admin' && user.password === 'admin'\"\n     routerLink=\"/admin\"\n     class=\"btn btn-dark\">Admin</a>\n  <button id=\"delete\" (click)=\"delete()\" class=\"btn btn-danger\">Delete Profile</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, courseService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.router = router;
        // user = {};
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.sections = [];
        this.courses = [];
        this.enrolledCourses = [];
    }
    ProfileComponent.prototype.update = function () {
        console.log(this.user);
        this.service
            .update(this.user).then(function () { return alert('Update Successful!'); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.delete = function () {
        var _this = this;
        if (confirm('Do you really want to delete this user profile?')) {
            this.service.delete()
                .then(function () { return _this.logout(); });
        }
    };
    ProfileComponent.prototype.findEnrolledCourses = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; })
            .then(function () {
            _this.sectionService
                .findSectionsForStudent(_this.userId)
                .then(function (sections) { return _this.sections = sections; })
                .then(function () {
                _this.enrolledCourses = new Array();
                for (var i = 0; i < _this.sections.length; i++) {
                    for (var j = 0; j < _this.courses.length; j++) {
                        if (_this.sections[i].section.courseId === _this.courses[j].id) {
                            _this.enrolledCourses.push(_this.courses[j]);
                        }
                    }
                }
                return _this.enrolledCourses;
            });
        });
    };
    ProfileComponent.prototype.unEnroll = function (userId, sectionId) {
        var _this = this;
        this.sectionService.unEnrollSection(userId, sectionId)
            .then(function () { return _this.sectionService.findSectionsForStudent(userId); })
            .then(function (sections) { return _this.sections = sections; })
            .then(function () { return _this.findEnrolledCourses(); });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            if (user.err) {
                alert('You have not logged in!');
            }
            else {
                _this.user = user;
                _this.userId = user._id;
                _this.courseService.findAllCourses()
                    .then(function (courses) { return _this.courses = courses; })
                    .then(function () {
                    _this.sectionService
                        .findSectionsForStudent(_this.userId)
                        .then(function (sections) { return _this.sections = sections; })
                        .then(function () {
                        for (var i = 0; i < _this.sections.length; i++) {
                            for (var j = 0; j < _this.courses.length; j++) {
                                if (_this.sections[i].section.courseId === _this.courses[j].id) {
                                    _this.enrolledCourses.push(_this.courses[j]);
                                }
                            }
                        }
                    });
                })
                    .then(function () {
                    console.log(_this.sections);
                    console.log(_this.courses);
                    console.log(_this.userId);
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
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password2\"\n         placeholder=\"verify password\"\n         class=\"form-control\"/>\n  <button (click)=\"register(username, password, password2)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n  <a id=\"login\" routerLink=\"/login\">Login</a>\n  <a routerLink=\"/home\">Home</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (username && password) {
            if (password !== password2) {
                alert('Passwords Do Not Match!');
            }
            else {
                this.service
                    .createUser(username, password)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.err) {
                        _this.router.navigate(['profile']);
                    }
                    else {
                        alert('Username already exist, can not register');
                    }
                });
            }
        }
        else {
            alert('Please enter username and password!');
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#update {\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#secondInput {\r\n  margin-top: 5px;\r\n}\r\n\r\n#addBtn {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Section List</h1>\n  <input [(ngModel)]=\"section.name\"\n         placeholder=\"Section Name\"\n         class=\"form-control\">\n  <input [(ngModel)]=\"section.seats\"\n         placeholder=\"Seats available\"\n         class=\"form-control\">\n  <button (click)=\"createSection(section.name, section.seats)\" class=\"btn btn-success btn-block\" id=\"addBtn\">\n    Add Section\n  </button>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      {{section.name}} Seats: {{section.seats}}\n      <button (click)=\"delete(section)\"\n              class=\"btn btn-danger float-right\">Delete</button>\n      <button (click)=\"update(section)\" id=\"update\"\n              class=\"btn btn-warning float-right\">Update</button>\n      <div>\n        <input [(ngModel)]=\"section.name\" class=\"form-control\" placeholder=\"update section name\">\n        <input [(ngModel)]=\"section.seats\" class=\"form-control\" placeholder=\"update section seats\" id=\"secondInput\">\n      </div>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_section_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/section.model.client */ "./src/app/models/section.model.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, courseService, router, route) {
        var _this = this;
        this.service = service;
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.section = new _models_section_model_client__WEBPACK_IMPORTED_MODULE_1__["Section"]();
        this.sections = [];
        this.route.params.subscribe(function (params) {
            _this.loadSections(params['courseId']);
            _this.courseService.findCourseById(params['courseId'])
                .then(function (course) { return _this.course = course; });
        });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.section.courseId = courseId;
        if (this.section.courseId) {
            this.service
                .findSectionsForCourse(courseId)
                .then(function (sections) { return _this.sections = sections; });
        }
    };
    SectionListComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        if (!this.section.courseId) {
            alert('Please select a course before create section');
        }
        else {
            if (this.section.seats) {
                if (!this.section.name) {
                    this.service
                        .createSection(this.section.courseId, this.course.title + ' Section ' + (this.sections.length + 1), seats)
                        .then(function () {
                        _this.loadSections(_this.section.courseId);
                    });
                }
                else {
                    this.service
                        .createSection(this.section.courseId, sectionName, seats)
                        .then(function () {
                        _this.loadSections(_this.section.courseId);
                    });
                }
            }
            else {
                alert('Please enter valid section name and seats');
            }
        }
    };
    SectionListComponent.prototype.delete = function (section) {
        var _this = this;
        this.service
            .deleteSection(section._id)
            .then(function () { return _this.loadSections(_this.section.courseId); });
    };
    SectionListComponent.prototype.update = function (section) {
        var _this = this;
        this.service
            .updateSection(section)
            .then(function () { return _this.loadSections(_this.section.courseId); })
            .then(function () { return alert('Update Successful !'); });
    };
    SectionListComponent.prototype.ngOnInit = function () {
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/section-viewer/section-viewer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/section-viewer/section-viewer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-viewer/section-viewer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/section-viewer/section-viewer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Sections for {{course.title}}</h1>\n  <a routerLink=\"/home\">Home</a>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      {{section.name}} Seats: {{section.seats}}\n      <button (click)=\"enroll(userId, section)\"\n              class=\"float-right btn btn-primary\">Enroll</button>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/section-viewer/section-viewer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/section-viewer/section-viewer.component.ts ***!
  \************************************************************/
/*! exports provided: SectionViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionViewerComponent", function() { return SectionViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_section_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/section.model.client */ "./src/app/models/section.model.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SectionViewerComponent = /** @class */ (function () {
    function SectionViewerComponent(service, userService, courseService, router, route) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.section = new _models_section_model_client__WEBPACK_IMPORTED_MODULE_3__["Section"]();
        this.sections = [];
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.route.params.subscribe(function (params) {
            _this.loadSections(params['courseId']);
            _this.courseService.findCourseById(params['courseId'])
                .then(function (course) { return _this.course = course; });
        });
    }
    SectionViewerComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.section.courseId = courseId;
        this
            .service
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionViewerComponent.prototype.findDuplicateSections = function (section, sections) {
        for (var i = 0; i < sections.length; i++) {
            if (sections[i].section.courseId === this.course.id) {
                return true;
            }
        }
        return false;
    };
    SectionViewerComponent.prototype.enroll = function (userId, section) {
        var _this = this;
        if (section.seats === 0) {
            alert('No available seat for this section!');
        }
        else {
            var enrolledSections_1;
            this.service.findSectionsForStudent(this.userId)
                .then(function (sections) { return enrolledSections_1 = sections; })
                .then(function () {
                if (_this.findDuplicateSections(section, enrolledSections_1)) {
                    alert('Student already enrolled in one Section of current class, can not enroll again!');
                }
                else {
                    _this.service
                        .enrollStudentInSection(userId, section._id)
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (response) {
                        if (response.err) {
                            alert('Please log in before enroll!');
                        }
                        else {
                            _this.router.navigate(['profile']);
                        }
                    });
                }
            });
        }
    };
    SectionViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            _this.user = user;
            _this.userId = user._id;
        });
    };
    SectionViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-viewer',
            template: __webpack_require__(/*! ./section-viewer.component.html */ "./src/app/section-viewer/section-viewer.component.html"),
            styles: [__webpack_require__(/*! ./section-viewer.component.css */ "./src/app/section-viewer/section-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_6__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SectionViewerComponent);
    return SectionViewerComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://webdev-summerfull-2018-xma.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
    }
    LessonServiceClient.prototype.findLessonsForModule = function (courseId, moduleId) {
        return fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = 'https://webdev-summerfull-2018-xma.herokuapp.com/api/course/COURSE_ID/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        // SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
        this.SECTION_URL = 'https://whiteboard-nodejs-server.herokuapp.com/api/course/COURSEID/section';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function (userId) {
        var url = 'https://whiteboard-nodejs-server.herokuapp.com/api/student/' + userId + '/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (userId, sectionId) {
        var url = 'https://whiteboard-nodejs-server.herokuapp.com/api/student/' + userId + '/section/' + sectionId;
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        var url = 'https://whiteboard-nodejs-server.herokuapp.com/api/section/' + sectionId;
        return fetch(url, {
            method: 'delete'
        });
    };
    SectionServiceClient.prototype.updateSection = function (section) {
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/section/' + section._id, {
            method: 'put',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.unEnrollSection = function (userId, sectionId) {
        var url = 'https://whiteboard-nodejs-server.herokuapp.com/api/student/' + userId + '/section/' + sectionId;
        return fetch(url, {
            method: 'delete',
            credentials: 'include',
        });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
    }
    TopicServiceClient.prototype.findTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/'
            + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.update = function (user) {
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/profile', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.delete = function () {
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/profile', {
            method: 'delete',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForTopic = function (topicId) {
        return fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-tabs/topic-tabs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/topic-tabs/topic-tabs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: red;\r\n  border-color: red;\r\n}\r\n\r\n.active.wbdv {\r\n  color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/topic-tabs/topic-tabs.component.html":
/*!******************************************************!*\
  !*** ./src/app/topic-tabs/topic-tabs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let topic of topics\"\n      class=\"nav-item\">\n    <a class=\"nav-link wbdv\"\n       [ngClass]=\"{'active': topic.id == topicId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n      {{topic.title}}\n    </a>\n  </li>\n</ul>\n\n<app-widget-list></app-widget-list>\n"

/***/ }),

/***/ "./src/app/topic-tabs/topic-tabs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/topic-tabs/topic-tabs.component.ts ***!
  \****************************************************/
/*! exports provided: TopicTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicTabsComponent", function() { return TopicTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicTabsComponent = /** @class */ (function () {
    function TopicTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        if (this.lessonId) {
            this.loadLessons(this.courseId, this.moduleId, this.lessonId);
        }
    };
    TopicTabsComponent.prototype.loadLessons = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.courseId = courseId;
        this.moduleId = moduleId;
        this.lessonId = lessonId;
        console.log(lessonId);
        this.service.findTopicsForLesson(courseId, moduleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicTabsComponent.prototype.ngOnInit = function () {
    };
    TopicTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-tabs',
            template: __webpack_require__(/*! ./topic-tabs.component.html */ "./src/app/topic-tabs/topic-tabs.component.html"),
            styles: [__webpack_require__(/*! ./topic-tabs.component.css */ "./src/app/topic-tabs/topic-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicTabsComponent);
    return TopicTabsComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#widgetList {\r\n  margin: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"widgetList\" *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget.widgetType\">\n\n    <div class=\"jumbotron\" *ngSwitchCase=\"'Heading'\">\n      <h3>Heading Widget</h3>\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n        <!--<h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>-->\n        <!--<h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>-->\n        <!--<h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>-->\n      </div>\n      <hr class=\"my-4\">\n    </div>\n\n    <div class=\"jumbotron\" *ngSwitchCase=\"'Link'\">\n      <h3>Link Widget</h3>\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\n      <hr class=\"my-4\">\n    </div>\n\n    <div class=\"jumbotron\" *ngSwitchCase=\"'List'\">\n      <h3>ListWidget</h3>\n      <div [ngSwitch]=\"widget.listType\">\n        <ul *ngSwitchCase=\"'Unordered'\">\n          <li\n              *ngFor=\"let item of widget.listItems.split('\\n')\">\n            {{item}}\n          </li>\n        </ul>\n        <ol *ngSwitchCase=\"'Ordered'\">\n          <li\n              *ngFor=\"let item of widget.listItems.split('\\n')\">\n            {{item}}\n          </li>\n        </ol>\n\n      </div>\n      <hr class=\"my-4\">\n    </div>\n\n    <div class=\"jumbotron\" *ngSwitchCase=\"'Paragraph'\">\n      <h3>Paragraph Widget</h3>\n      <p>{{widget.text}}</p>\n      <hr class=\"my-4\">\n    </div>\n\n    <div class=\"jumbotron\" *ngSwitchCase=\"'Image'\">\n      <h3>Image Widget</h3>\n      <img src={{widget.src}}>\n      <hr class=\"my-4\">\n    </div>\n\n    <!--<div *ngSwitchCase=\"'Exam'\">-->\n      <!--<h1>Exam Widget</h1>-->\n    <!--</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        if (params.topicId) {
            this.loadWidgets(params.topicId);
        }
    };
    WidgetListComponent.prototype.loadWidgets = function (topicId) {
        var _this = this;
        this.service.findWidgetsForTopic(topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\neu\CS5610webdev\white-board-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map