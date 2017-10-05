webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_skate_skate__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TourPage = (function () {
    function TourPage(navCtrl, navParams, skate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skate = skate;
        this.skate.getTour(function (tour) {
            console.log(tour);
        });
    }
    TourPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TourPage');
    };
    return TourPage;
}());
TourPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tour',template:/*ion-inline-start:"E:\osmq\web\node\skate\skate2019\src\pages\tour\tour.html"*/'<!--\n  Generated template for the TourPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar color="dark">\n\n</ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true" color="dark">\n  <video style="opacity: 0.25;" autoplay muted loop src="assets/videos/bg_video.mp4" type="video/mp4">\n\n  </video>\n  <ion-grid>\n    <ion-row class="align-center">\n\n      <ion-col col-md-4 col-sm-12><div class="tourbox">\n        <div class="text">\n          <h6 class="center">9-15 Oktober</h6>\n\n          <h1 class="center">Umeå Universitet</h1>\n          <br>\n          <div class="cntr"><button id="button" class="bootn btn-style animated fadeInUp animation-delay-4"><span>Mer Info</span></button>\n            <br><br>\n            <h6 class="center"> Malmö</h6>\n            <br>\n            <p class="center">Föreläsning - Jesper Truedsson</p>\n\n          </div>\n        </div>\n\n        </div>\n      </ion-col>\n      <ion-col col-md-4 col-sm-12><div class="tourbox">\n        <div class="text">\n          <h6 class="center">9-15 Oktober</h6>\n\n          <h1 class="center">Mittuniversitetet</h1>\n          <br>\n          <div class="cntr"><button id="button" class="bootn btn-style animated fadeInUp animation-delay-4"><span>Mer Info</span></button>\n            <br><br>\n            <h6 class="center"> Malmö</h6>\n            <br>\n            <p class="center">Föreläsning - Jesper Truedsson</p>\n\n          </div>\n        </div>\n\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row class="align-center">\n\n      <ion-col col-md-4 col-sm-12><div class="tourbox">\n        <div class="text">\n          <h6 class="center">9-15 Oktober</h6>\n\n          <h1 class="center">Mcdonald\'s</h1>\n          <br>\n          <div class="cntr"><button id="button" class="bootn btn-style animated fadeInUp animation-delay-4"><span>Mer Info</span></button>\n            <br><br>\n            <h6 class="center"> Malmö</h6>\n            <br>  <p class="center">Fö\n            reläsning - Jesper Truedsson</p>\n\n          </div>\n        </div>\n\n        </div>\n      </ion-col>\n      <ion-col col-md-4 col-sm-12><div class="tourbox">\n        <div class="text">\n          <h6 class="center">9-15 Oktober</h6>\n\n          <h1 class="center">Polishuset</h1>\n          <br>\n          <div class="cntr"><button id="button" class="bootn btn-style animated fadeInUp animation-delay-4"><span>Mer Info</span></button>\n            <br><br>\n            <h6 class="center"> Malmö</h6>\n            <br>  <p class="center">Föreläs\n            ning - Jesper Truedsson</p>\n\n          </div>\n        </div>\n\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row class="align-center">\n\n      <ion-col col-md-4 col-sm-12><div class="tourbox">\n        <div class="text">\n          <h6 class="center">9-15 Oktober</h6>\n\n          <h1 class="center">Legoland</h1>\n          <br>\n          <div class="cntr"><button id="button" class="bootn btn-style animated fadeInUp animation-delay-4"><span>Mer Info</span></button>\n            <br><br>\n            <h6 class="center"> Malmö</h6>\n            <br>\n            <p class="center">Föreläsning - Jesper Truedsson</p>\n          </div>\n        </div>\n\n        </div>\n      </ion-col>\n      <ion-col col-md-4 col-sm-12><div class="tourbox">\n        <div class="text">\n          <h6 class="center">9-15 Oktober</h6>\n\n          <h1 class="center">Stapelbäddsparken</h1>\n          <br>\n          <div class="cntr"><button id="button" class="bootn btn-style animated fadeInUp animation-delay-4"><span>Mer Info</span></button>\n            <br><br>\n            <h6 class="center"> Malmö</h6>\n            <br>\n            <p class="center">Föreläsning - Jesper Truedsson</p>\n\n          </div>\n        </div>\n\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n\n<ion-menu [content]="mycontent">\n  <ion-content>\n    <ion-list>\n      ...\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\osmq\web\node\skate\skate2019\src\pages\tour\tour.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_skate_skate__["a" /* SkateProvider */]])
], TourPage);

//# sourceMappingURL=tour.js.map

/***/ }),

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tour/tour.module": [
		265,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_tour__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.showGallery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gallery_gallery__["a" /* GalleryPage */]);
    };
    HomePage.prototype.showTour = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tour_tour__["a" /* TourPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\osmq\web\node\skate\skate2019\src\pages\home\home.html"*/'<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">\n <ion-header>\n  <ion-navbar color="dark">\n    <div class="right">\n      <button ion-button clear color="light" (click)="showTour()">Turné</button>\n      <button ion-button clear color="light" (click)="showGallery()">Galleri</button>\n\n\n\n      </div>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n       <h1 class="header" style="font-weight: bolder; text-decoration: underline; font-size: 35px;">Skate!</h1>\n       <h2 class="subheader">Personer och platser</h2>\n        <div id="parallelogram" style="box-shadow: 10px 10px 5px #000000 !important;"><h1 class="para">En vandringsutställning<br> dam, tem fugitecus<br> eium eseque pers<br> peritas is aut eso <br> blaborerum quaturia nosaped et.</h1></div>\n\n      </ion-col>\n\n      <ion-col>\n        <h3 class="subheader">En vandringsutställning dam fem fugitecus <br>\n        eium eseque persperitos is aut esto blaborerum <br>\n        quaturia nosaped et</h3>\n        <div style="box-shadow: 10px 10px 10px #000000;"><ion-img src="https://i.imgur.com/uWEXZV7.jpg" width="100%" height="500px"></ion-img></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n<ion-menu [content]="mycontent">\n  <ion-content>\n    <ion-list>\n      ...\n    </ion-list>\n  </ion-content>\n</ion-menu>\n  <ion-content padding>\n\n  </ion-content>\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\osmq\web\node\skate\skate2019\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_skate_skate__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryPage = (function () {
    function GalleryPage(navCtrl, skate) {
        this.navCtrl = navCtrl;
        this.skate = skate;
        this.skate.getMedia(function (media) {
            console.log(media);
        });
    }
    return GalleryPage;
}());
GalleryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\osmq\web\node\skate\skate2019\src\pages\gallery\gallery.html"*/'<!--\nGenerated template for the PicturesPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=dark>\n    <h1> Galleri </h1>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-12 col-md>\n      <ion-card id="ramKort" color="yellow">\n        <ion-card id="infoKort">\n          <h3>vadå utställning ?</h3>\n          <p>\n            Vad är Lorem Ipsum?\n            Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.<br />\n             Lorem ipsum har varit standard ända sedan 1500-talet,\n             när en okänd boksättare tog att antal bokstäver och blandade dem för <br />\n             att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden,\n              utan även övergången till elektronisk typografi utan större förändringar.\n               Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark\n                med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.\n          </p>\n        </ion-card>\n    </ion-card>\n    </ion-col>\n\n\n      <ion-col col-12 col-md>\n        <ion-card color="dark-green">\n          <img src="../assets/karlstad.jpg"/>\n          <h2>Karlstad</h2>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-md>\n        <ion-card color="dark-green">\n          <img src="../assets/karlstad.jpg"/>\n          <h2>Karlstad</h2>\n        </ion-card>\n      </ion-col>\n\n\n      <ion-col col-12 col-md>\n        <ion-card color="dark-green">\n          <img src="../assets/stockholm.jpg"/>\n          <h2>Stockholm</h2>\n        </ion-card>\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\osmq\web\node\skate\skate2019\src\pages\gallery\gallery.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_skate_skate__["a" /* SkateProvider */]])
], GalleryPage);

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gallery_gallery__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tour_tour__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_skate_skate__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_gallery_gallery__["a" /* GalleryPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tour_tour__["a" /* TourPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/tour/tour.module#TourPageModule', name: 'TourPage', segment: 'tour', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_gallery_gallery__["a" /* GalleryPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tour_tour__["a" /* TourPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_skate_skate__["a" /* SkateProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\osmq\web\node\skate\skate2019\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\osmq\web\node\skate\skate2019\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkateProvider = (function () {
    function SkateProvider() {
        this.version = "0.5";
    }
    SkateProvider.prototype.toDecimal = function (number) {
        return number[0].num / number[0].den + (number[1].num / (60 * number[1].den)) + (number[2].num / (3600 * number[2].den));
    };
    ;
    SkateProvider.prototype.getTags = function (callback) {
        var xhrTag = new XMLHttpRequest();
        xhrTag.open('GET', 'http://nile16.nu:5984/misc/tags', true);
        xhrTag.onreadystatechange = function (response) {
            if (xhrTag.readyState == 4) {
                callback(JSON.parse(xhrTag.response).value);
            }
        };
        xhrTag.send();
    };
    SkateProvider.prototype.getMedia = function (callback) {
        var xhrTag = new XMLHttpRequest();
        xhrTag.open('GET', 'http://nile16.nu:5984/media/_all_docs?include_docs=true', true);
        xhrTag.onreadystatechange = function (response) {
            if (xhrTag.readyState == 4) {
                var rows = JSON.parse(xhrTag.response).rows;
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    var temp = {
                        description: null,
                        nick: null,
                        tags: null,
                        takenTime: null,
                        uploadTime: null,
                        lat: null,
                        lon: null,
                        //mediaType:false,
                        url: null
                    };
                    if (rows[i].doc.description)
                        temp.description = rows[i].doc.description;
                    if (rows[i].doc.nick)
                        temp.nick = rows[i].doc.nick;
                    if (rows[i].doc.tags)
                        temp.tags = rows[i].doc.tags;
                    if (rows[i].doc.takenTime)
                        temp.takenTime = rows[i].doc.takenTime;
                    if (rows[i].doc.uploadTime)
                        temp.uploadTime = rows[i].doc.uploadTime;
                    if (rows[i].doc.lat)
                        temp.lat = rows[i].doc.lat;
                    if (rows[i].doc.lon)
                        temp.lon = rows[i].doc.lon;
                    if (rows[i].doc._attachments)
                        temp.url = "http://nile16.nu:5984/media/" + rows[i].doc._id + "/" + Object.keys(rows[i].doc._attachments)[0];
                    result.push(temp);
                }
                callback(result);
            }
        };
        xhrTag.send();
    };
    SkateProvider.prototype.getTour = function (callback) {
        var xhrTag = new XMLHttpRequest();
        xhrTag.open('GET', 'http://nile16.nu:5984/misc/tourInfo/', true);
        xhrTag.onreadystatechange = function (response) {
            if (xhrTag.readyState == 4) {
                var rows = JSON.parse(xhrTag.response).value;
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    var temp = {
                        ort: null,
                        tid: null,
                        adress: null,
                        info: null
                    };
                    if (rows[i].ort)
                        temp.ort = rows[i].ort;
                    if (rows[i].tid)
                        temp.tid = rows[i].tid;
                    if (rows[i].adress)
                        temp.adress = rows[i].adress;
                    if (rows[i].info)
                        temp.info = rows[i].info;
                    result.push(temp);
                }
                callback(result);
            }
        };
        xhrTag.send();
    };
    SkateProvider.prototype.getExif = function (file, callback) {
        var self = this;
        var fileReaderExif = new FileReader();
        var lat = null;
        var lon = null;
        var takenTime = false;
        fileReaderExif.onloadend = function () {
            var meta = (new JpegMeta.JpegFile(this.result, file.name).metaGroups);
            if (meta.gps) {
                lat = self.toDecimal(meta.gps.GPSLatitude.value).toFixed(5);
                lon = self.toDecimal(meta.gps.GPSLongitude.value).toFixed(5);
            }
            if (meta.exif && meta.exif.DateTimeOriginal)
                takenTime = meta.exif.DateTimeOriginal.value;
            callback({ takenTime: takenTime, lat: lat, lon: lon });
        };
        fileReaderExif.readAsBinaryString(file);
    };
    SkateProvider.prototype.upload = function (file, meta, callback) {
        var url = 'http://nile16.nu:5984/media/';
        var fileReader = new FileReader();
        var xhr1 = new XMLHttpRequest();
        xhr1.open('POST', url, true);
        xhr1.setRequestHeader("Content-Type", "application/json");
        xhr1.onreadystatechange = function (response) {
            if (xhr1.readyState == 4) {
                var docId = JSON.parse(xhr1.response).id;
                var docRev = JSON.parse(xhr1.response).rev;
                var name = encodeURIComponent(file.name);
                var type = file.type;
                var xhr2 = new XMLHttpRequest();
                xhr2.open('PUT', url + docId + '/' + name + '?rev=' + docRev, true);
                xhr2.setRequestHeader('Content-Type', type);
                xhr2.onreadystatechange = function (response) {
                    if (xhr2.readyState == 4) {
                        callback(xhr2.response);
                    }
                };
                fileReader.onload = function (readerEvent) {
                    xhr2.send(this.result);
                };
                fileReader.readAsArrayBuffer(file);
            }
        };
        //var uploadTime = Math.floor((new Date().getTime())/1000);
        meta.uploadTime = (new Date()).toString();
        xhr1.send(JSON.stringify(meta));
    };
    return SkateProvider;
}());
SkateProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SkateProvider);

//# sourceMappingURL=skate.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map