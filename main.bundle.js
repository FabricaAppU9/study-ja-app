webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/admin/login.component.html"),
            styles: [__webpack_require__("./src/app/admin/login.component.scss")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_routing_module__ = __webpack_require__("./src/app/admin/admin.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_posts_component__ = __webpack_require__("./src/app/admin/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__("./src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_header_header_component__ = __webpack_require__("./src/app/admin/shared/components/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
    Import dos Modulos do projeto
*/

/*
    Import dos Components do projeto
*/

//import { SigninComponent } from './signin/signin.component';



var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__admin_routing_module__["a" /* AdminRoutesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
                //SigninComponent,
                __WEBPACK_IMPORTED_MODULE_3__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_header_header_component__["a" /* HeaderComponent */]
            ],
            exports: [],
            providers: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_posts_component__ = __webpack_require__("./src/app/admin/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__("./src/app/admin/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
    Import dos components do projeto
*/



var adminRoutes = [
    {
        path: 'my-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'posts',
        component: __WEBPACK_IMPORTED_MODULE_3__posts_posts_component__["a" /* PostsComponent */],
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */]
    }
];
var AdminRoutesModule = /** @class */ (function () {
    function AdminRoutesModule() {
    }
    AdminRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(adminRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AdminRoutesModule);
    return AdminRoutesModule;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<header></header>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            moduleId: module.i,
            template: __webpack_require__("./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"login-wrapper\">\r\n      <div class=\"row\">\r\n        <h4 class=\"blue-text darken-2 center-align\">Entrar</h4>\r\n        <div class=\"col s12 m8 offset-m2 l6 offset-l3\">\r\n          <div class=\"input-field col s12\">\r\n             <input id=\"first_name\" type=\"text\" class=\"validate\">\r\n             <label for=\"first_name\">E-mail ou Usuario</label>\r\n           </div>\r\n           <div class=\"input-field col s12\">\r\n             <input id=\"last_name\" type=\"password\" class=\"validate\">\r\n             <label for=\"last_name\">Senha</label>\r\n             <span class=\"helper-text right-align\" data-error=\"wrong\" data-success=\"right\">Helper text</span>           \r\n           </div>\r\n           <div class=\"col s12\">\r\n             <p>\r\n               <label>\r\n                  <input class=\"filled-in\" type=\"checkbox\"/>\r\n                  <span>Deseja memorizar sua senha?</span>\r\n               </label>\r\n             </p>\r\n          </div>\r\n          <div class=\"col s12\">\r\n            <button class=\"btn waves-effect blue darken-1 col s12\" type=\"submit\" name=\"action\">Entrar</button>\r\n          </div> \r\n          <div class=\"col s12\">\r\n            <p class=\"center-align\">Não posui uma conta? <a routerLink=\"register\" class=\"blue-text\">Clique aqui</a></p>\r\n          </div>\r\n          \r\n          <div class=\"col s12\">\r\n            <p class=\"col s12 center-align\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque laborum, et deleniti iste dolor in quam. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/admin/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Posts OK\r\n</p>"

/***/ }),

/***/ "./src/app/admin/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'posts',
            template: __webpack_require__("./src/app/admin/posts/posts.component.html")
        })
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"nav-wrapper\">\r\n      <a href=\"#!\" class=\"brand-logo\"><i class=\"material-icons\">cloud</i>Logo</a>\r\n      <ul class=\"right hide-on-med-and-down\">\r\n        <li><a href=\"sass.html\"><i class=\"material-icons\">search</i></a></li>\r\n        <li><a href=\"badges.html\"><i class=\"material-icons\">view_module</i></a></li>\r\n        <li><a href=\"collapsible.html\"><i class=\"material-icons\">refresh</i></a></li>\r\n        <li><a href=\"mobile.html\"><i class=\"material-icons\">more_vert</i></a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/admin/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',
            template: __webpack_require__("./src/app/admin/shared/components/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Users OK\r\n</p>"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'users',
            template: __webpack_require__("./src/app/admin/users/users.component.html")
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_module__ = __webpack_require__("./src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_module__ = __webpack_require__("./src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_errors_errors_module__ = __webpack_require__("./src/app/shared/errors/errors.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_4__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_errors_errors_module__["a" /* ErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_signin_signin_component__ = __webpack_require__("./src/app/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_signup_signup_component__ = __webpack_require__("./src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_home_home_component__ = __webpack_require__("./src/app/user/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_3__user_signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_4__user_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__user_home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/components/likes/likes.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"post-likes\">\r\n    <li><i class=\"material-icons\"\r\n        [ngStyle]=\"{\r\n            'color': isActiveLike ? activeColor : defaultColor\r\n        }\"\r\n        (click)=\"onClickLike('like')\">thumb_up</i>\r\n        15,9k\r\n    </li>\r\n\r\n    <li><i class=\"material-icons\" \r\n        [ngStyle]=\"{\r\n            'color': isActiveDislike ? activeColor : defaultColor\r\n        }\"\r\n        (click)=\"onClickLike('dislike')\">thumb_down</i>\r\n        2k\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/shared/components/likes/likes.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-likes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .post-likes li {\n    padding: 4px 10px;\n    color: #bababa; }\n"

/***/ }),

/***/ "./src/app/shared/components/likes/likes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikesComponent = /** @class */ (function () {
    function LikesComponent() {
        this.isActiveLike = false;
        this.isActiveDislike = false;
        this.activeColor = '#1775fc';
        this.defaultColor = 'grey';
    }
    LikesComponent.prototype.onClickLike = function (value) {
        console.log(value);
        if (value == 'like') {
            this.isActiveDislike = false;
            this.isActiveLike = !this.isActiveLike;
        }
        else if (value == 'dislike') {
            this.isActiveLike = false;
            this.isActiveDislike = !this.isActiveDislike;
        }
        else {
            console.log("Valor atribuido no evento click do component LIKES é inexistente");
            this.isActiveLike = false;
            this.isActiveDislike = false;
        }
    };
    LikesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'likes',
            template: __webpack_require__("./src/app/shared/components/likes/likes.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/likes/likes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LikesComponent);
    return LikesComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ratings/ratings.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <li *ngFor=\"let i of starActive\"><i class=\"material-icons\" (click)=\"ratingClick(i)\">{{ valor }}</i></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/shared/components/ratings/ratings.component.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  ul li {\n    padding: 4px; }\n"

/***/ }),

/***/ "./src/app/shared/components/ratings/ratings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RatingsComponents = /** @class */ (function () {
    function RatingsComponents() {
        this.starActive = [1, 2, 3, 4, 5];
        this.isActive = false;
        this.valor = "star_border";
    }
    RatingsComponents.prototype.ratingClick = function (starSelecet) {
        this.isActive = !this.isActive; // Altera o valor da variavel
        if (this.isActive == true) {
            this.valor = "star";
            console.log(starSelecet);
        }
        else {
            this.valor = "star_border";
            console.log(starSelecet);
        }
    };
    RatingsComponents = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ratings',
            template: __webpack_require__("./src/app/shared/components/ratings/ratings.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ratings/ratings.component.scss")]
        })
    ], RatingsComponents);
    return RatingsComponents;
}());



/***/ }),

/***/ "./src/app/shared/errors/errors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__("./src/app/shared/errors/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a" /* NotfoundComponent */]
            ],
            imports: [],
            exports: [],
            providers: []
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "./src/app/shared/errors/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"wrapper\">\r\n        <h1 class=\"text-error\">\r\n            404 - Not Found\r\n        </h1>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/errors/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ".container .wrapper {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .container .wrapper .text-error {\n    color: #3b3b3b; }\n"

/***/ }),

/***/ "./src/app/shared/errors/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'not-found',
            template: __webpack_require__("./src/app/shared/errors/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/shared/errors/not-found/not-found.component.scss")]
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/user/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\r\n  <div class=\"container\">\r\n      <header [headerColor]=\"'transparent'\"></header>\r\n  </div>\r\n  <div class=\"banner-actionbar\">\r\n    <p>The book is a project of study simple, easy, and amazing.</p>\r\n  \r\n    <a class=\"waves-effect waves-light btn-small\">Ler Agora</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <post-list></post-list>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".banner {\n  position: relative;\n  height: 200px;\n  z-index: -998;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.7))), url('banner__main.3408d254706ee6477edf.jpg');\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('banner__main.3408d254706ee6477edf.jpg');\n  background-position: attachment;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .banner .container {\n    width: 100%; }\n  .banner .banner-actionbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    background: rgba(30, 27, 24, 0.6); }\n  .banner .banner-actionbar p {\n      width: 50%;\n      color: #fffaff; }\n"

/***/ }),

/***/ "./src/app/user/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("./src/app/user/home/home.component.html"),
            styles: [__webpack_require__("./src/app/user/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_list_post_list_component__ = __webpack_require__("./src/app/user/home/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_component__ = __webpack_require__("./src/app/user/home/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("./src/app/user/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_header_header_component__ = __webpack_require__("./src/app/user/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_list_post_list_service__ = __webpack_require__("./src/app/user/home/post-list/post-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_routing_module__ = __webpack_require__("./src/app/user/user.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_ratings_ratings_component__ = __webpack_require__("./src/app/shared/components/ratings/ratings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_likes_likes_component__ = __webpack_require__("./src/app/shared/components/likes/likes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post_service__ = __webpack_require__("./src/app/user/home/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_text_post_text_component__ = __webpack_require__("./src/app/user/home/post-text/post-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Imports dos modulos










var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_3__post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_components_ratings_ratings_component__["a" /* RatingsComponents */],
                __WEBPACK_IMPORTED_MODULE_10__shared_components_likes_likes_component__["a" /* LikesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__post_text_post_text_component__["a" /* PostTextComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__user_routing_module__["a" /* UserRoutingModule */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__post_list_post_list_service__["a" /* PostListService */],
                __WEBPACK_IMPORTED_MODULE_11__post_post_service__["a" /* PostService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/user/home/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col s5 m6\" *ngFor=\"let post of posts\">\r\n        <div class=\"card\">\r\n            <div class=\"card-image waves-effect waves-block waves-light\">\r\n                <img class=\"activator\" src=\"https://http2.mlstatic.com/livro-harry-potter-e-a-cmara-secreta-capa-dura-novo-lacrado-D_NQ_NP_732839-MLB26492967186_122017-F.jpg\">\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <span class=\"card-title activator grey-text text-darken-4\">{{ post.liv_nome }}</span>\r\n                <!--p>I am a very simple card.</p-->\r\n            </div>\r\n            <div class=\"card-action\">\r\n                <a [routerLink]=\"['/post', post.tra_id ]\" [queryParams]=\"{ tipo: post.tra_tipo }\">Ler Agora</a>\r\n            </div>\r\n        </div>    \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/home/post-list/post-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-content {\n  padding: 4px; }\n  .card-content .card-title {\n    text-align: center; }\n  @media (max-width: 500px) {\n      .card-content .card-title {\n        font-size: 15px;\n        line-height: 23px; } }\n  .card-action {\n  padding: 4px;\n  text-align: center; }\n  .card-action a {\n    margin-right: 0 !important; }\n"

/***/ }),

/***/ "./src/app/user/home/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_list_service__ = __webpack_require__("./src/app/user/home/post-list/post-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
        this.posts = [];
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.listarLivros();
    };
    PostListComponent.prototype.listarLivros = function () {
        var _this = this;
        this.postService
            .listFromPosts('LIVRO')
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post-list',
            template: __webpack_require__("./src/app/user/home/post-list/post-list.component.html"),
            styles: [__webpack_require__("./src/app/user/home/post-list/post-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__post_list_service__["a" /* PostListService */]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/user/home/post-list/post-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API = 'http://localhost:3000/';
var PostListService = /** @class */ (function () {
    function PostListService(http) {
        this.http = http;
    }
    PostListService.prototype.listFromPosts = function (tipo) {
        if (tipo == "LIVRO") {
            return this.http
                .get(API + "resumos");
        }
        else if (tipo == "ARTIGO") {
            console.log("Breakpoint não configurado na API para Artigo");
        }
    };
    PostListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostListService);
    return PostListService;
}());



/***/ }),

/***/ "./src/app/user/home/post-text/post-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1>Vinte mil léguas submarinas</h1>\r\n        <p>Criado por Rafael Marinho</p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <!-- Linha de ações do texto -->\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nulla dolorem. Incidunt praesentium provident assumenda, itaque blanditiis ut amet voluptatem pariatur cumque a harum repellendus consequatur ullam minus adipisci officiis.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/home/post-text/post-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PostTextComponent = /** @class */ (function () {
    function PostTextComponent() {
    }
    PostTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/user/home/post-text/post-text.component.html")
        })
    ], PostTextComponent);
    return PostTextComponent;
}());



/***/ }),

/***/ "./src/app/user/home/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<header [headerColor]=\"'blue'\"></header>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <figure class=\"col s10 offset-s1 post-image\">\r\n            <img src=\"https://http2.mlstatic.com/livro-harry-potter-e-a-cmara-secreta-capa-dura-novo-lacrado-D_NQ_NP_732839-MLB26492967186_122017-F.jpg\" class=\"responsive-img\" alt=\"\">\r\n        </figure>\r\n\r\n        <div class=\"col s10 offset-s1 post-title\">\r\n            <div class=\"row post-badges\">\r\n                <span class=\"new badge blue\" data-badge-caption=\"Favorito\"></span>\r\n                <span class=\"new badge red\" data-badge-caption=\"Mais curtido\"></span>\r\n            </div>\r\n            <h1>Vinte mil léguas submarinas</h1>\r\n        </div>\r\n\r\n        <div class=\"col s10 offset-s1 post-description\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur eius quo dolor optio, quis harum possimus, beatae provident laboriosam quaerat dignissimos consectetur dolores nisi et! Doloribus ad harum quia!</p>\r\n        </div>\r\n\r\n        <div class=\"col s10 offset-s1 post-actions\">\r\n            <div class=\"row\">\r\n                <ratings></ratings>\r\n                <likes></likes>\r\n            </div>\r\n            <div class=\"row\">\r\n                <a class=\"waves-effect waves-light btn col s12 blue\" [routerLink]=\"['/viewer', 2, nomelivro]\">Ler Resumo</a>    \r\n            </div>\r\n            <div class=\"row\">\r\n                <a class=\"waves-effect waves-light btn col s12 white\">Comentar</a>\r\n            </div>            \r\n        </div>\r\n\r\n        <div class=\"col s10 offset-s1 post-suggested\">\r\n            <h6>Sugeridos para você</h6>\r\n            <post-list></post-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/home/post/post.component.scss":
/***/ (function(module, exports) {

module.exports = ".post-title .post-badges {\n  margin-bottom: 4px; }\n\n.post-title h1 {\n  font-size: 22px;\n  text-align: center;\n  margin: 0; }\n\n.post-description p {\n  text-align: center; }\n\n.post-actions .white {\n  color: #1e1b18; }\n"

/***/ }),

/***/ "./src/app/user/home/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("./src/app/user/home/post/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(activatedRoute, postService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.post = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.carregaPost(this.id);
    };
    PostComponent.prototype.carregaPost = function (id) {
        var _this = this;
        this.postService
            .listPost(id)
            .subscribe(function (post) {
            _this.post = post;
            console.log(post);
        });
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'post',
            template: __webpack_require__("./src/app/user/home/post/post.component.html"),
            styles: [__webpack_require__("./src/app/user/home/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/user/home/post/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API = 'http://localhost:3000/resumos'; // Buscar uma alternativa de declarar globalmente
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.listPost = function (id) {
        return this.http
            .get(API);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/user/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [className]=\"getClasses()\">\r\n    <div class=\"nav-wrapper\">\r\n        <a href=\"#!\" class=\"brand-logo\">Logo</a>\r\n        <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\r\n        <ul class=\"right hide-on-med-and-down\">\r\n            <li><a href=\"sass.html\">Sass</a></li>\r\n            <li><a href=\"badges.html\">Components</a></li>\r\n            <li><a href=\"collapsible.html\">Javascript</a></li>\r\n            <li><a href=\"mobile.html\">Mobile</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n    \r\n<ul class=\"sidenav\" id=\"mobile-demo\">\r\n    <li><a href=\"sass.html\">Sass</a></li>\r\n    <li><a href=\"badges.html\">Components</a></li>\r\n    <li><a href=\"collapsible.html\">Javascript</a></li>\r\n    <li><a href=\"mobile.html\">Mobile</a></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/user/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.hasColor = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.headerColor == 'transparent') {
            this.montaStr = this.headerColor + " z-depth-0";
        }
        else {
            this.montaStr = this.headerColor;
        }
    };
    HeaderComponent.prototype.getClasses = function () {
        return this.montaStr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "headerColor", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',
            template: __webpack_require__("./src/app/user/shared/components/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"login-wrapper\">\r\n      <div class=\"row\">\r\n        <h4 class=\"blue-text darken-2 center-align\">Entrar</h4>\r\n        <div class=\"col s12 m8 offset-m2 l6 offset-l3\">\r\n          <div class=\"input-field col s12\">\r\n             <input id=\"first_name\" type=\"text\" class=\"validate\">\r\n             <label for=\"first_name\">E-mail ou Usuario</label>\r\n           </div>\r\n           <div class=\"input-field col s12\">\r\n             <input id=\"last_name\" type=\"password\" class=\"validate\">\r\n             <label for=\"last_name\">Senha</label>\r\n             <span class=\"helper-text right-align\" data-error=\"wrong\" data-success=\"right\">Helper text</span>           \r\n           </div>\r\n           <div class=\"col s12\">\r\n             <p>\r\n               <label>\r\n                  <input class=\"filled-in\" type=\"checkbox\"/>\r\n                  <span>Deseja memorizar sua senha?</span>\r\n               </label>\r\n             </p>\r\n          </div>\r\n          <div class=\"col s12\">\r\n            <button routerLink=\"/home\" class=\"btn waves-effect blue darken-1 col s12\" type=\"submit\" name=\"action\">Entrar</button>\r\n          </div> \r\n          <div class=\"col s12\">\r\n            <p class=\"center-align\">Não posui uma conta? <a routerLink=\"register\" class=\"blue-text\">Clique aqui</a></p>\r\n          </div>\r\n          \r\n          <div class=\"col s12\">\r\n            <p class=\"col s12 center-align\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque laborum, et deleniti iste dolor in quam. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/user/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/user/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/user/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/user/signin/signin.component.scss")]
        })
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"register-wrapper\">\r\n      <div class=\"row\">\r\n        <h4 class=\"red-text lighten-1 center-align\">Cadastre-se</h4>\r\n        <div class=\"col s12 m8 offset-m2 l6 offset-l3\">\r\n          <div class=\"input-field col s12\">\r\n             <input id=\"username\" type=\"text\">\r\n             <label for=\"username\">E-mail</label>\r\n           </div>\r\n          <div class=\"input-field col s12\">\r\n             <input id=\"email\" type=\"text\">\r\n             <label for=\"email\">Nome de usúario</label>\r\n           </div>\r\n           <div class=\"input-field col s12\">\r\n             <input id=\"password\" type=\"password\">\r\n             <label for=\"password\">Senha</label>\r\n             <span class=\"helper-text right-align\" data-error=\"wrong\" data-success=\"right\">Helper text</span>           \r\n           </div>\r\n           <div class=\"col s12\">\r\n             <p>\r\n               <label>\r\n                  <input class=\"filled-in\" type=\"checkbox\"/>\r\n                  <span>Deseja memorizar sua senha?</span>\r\n               </label>\r\n             </p>\r\n             <p>\r\n               <label>\r\n                  <input class=\"filled-in\" type=\"checkbox\"/>\r\n                  <span>Desejo receber notificaçoes em meu e-mail</span>\r\n               </label>\r\n             </p>\r\n          </div>\r\n          <div class=\"col s12\">\r\n            <button class=\"btn waves-effect red lighten-1 col s12\" type=\"submit\" name=\"action\">Criar Conta</button>\r\n          </div> \r\n          <div class=\"col s12\">\r\n            <p class=\"center-align\">Já possui uma conta? <a routerLink=\"\" class=\"red-text lighten-1\">Clique aqui</a></p>\r\n          </div>\r\n          \r\n          <div class=\"col s12\">\r\n            <p class=\"col s12 center-align\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque laborum, et deleniti iste dolor in quam. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ".register-wrapper {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'signup',
            template: __webpack_require__("./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/user/signup/signup.component.scss")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routing_module__ = __webpack_require__("./src/app/user/user.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("./src/app/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("./src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("./src/app/user/home/home.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modulo de roteamento

// Modulos da aplicação


// Import Modulos de funcionalidade

var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
            ],
            exports: [],
            providers: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/user/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_post_post_component__ = __webpack_require__("./src/app/user/home/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_post_text_post_text_component__ = __webpack_require__("./src/app/user/home/post-text/post-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var userRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'post/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__home_post_post_component__["a" /* PostComponent */]
    },
    {
        path: 'viewer/:id/:titulo',
        component: __WEBPACK_IMPORTED_MODULE_4__home_post_text_post_text_component__["a" /* PostTextComponent */]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(userRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map