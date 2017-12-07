webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Bungee+Shade);", ""]);

// module
exports.push([module.i, "@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n* {\n  text-align: center;\n}\n\nh1 {\n  text-align: center;\n  text-shadow: 0.5px 0.5px;\n  font-family: Bungee Shade, cursive;\n  font-size: 80px;\n  -webkit-animation: pulse 1s linear infinite;\n          animation: pulse 1s linear infinite;\n  background-color: #0077b3;\n  overflow: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Meal tracker</h1>\n<hr/>\n<meal-form (newMealSender)=\"addMeal($event)\"></meal-form>\n<hr/>\n<meal-info [childMealList]=\"MealList\" (clickSender)=\"showDetails($event)\"></meal-info>\n\n<meal-edit [childSelectedMeal]=\"selectedMeal\" (doneClickedSender)=\"finishedEditing()\"></meal-edit>\n\n<footer>\n  <p id=\"copyright\"><br/>\n    <small>Abdullahinur Abdullahi 2017</small>\n  </p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.MealList = [
            { name: 'Chicken with rice', details: 'Chicken in tomato sauce with rice', calories: 500 },
            { name: 'Fish with pasta', details: 'Fish in cream sauce with fussili', calories: 600 },
            { name: 'Lamb with rice', details: 'Grilled lamb with mint sauce and rice', calories: 800 },
            { name: 'Hamburger', details: 'Hamburger with fries', calories: 1000 },
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.MealList.push(newMealFromChild);
    };
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'meal-tracker',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meal_form_meal_form_component__ = __webpack_require__("../../../../../src/app/meal-form/meal-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meal_info_meal_info_component__ = __webpack_require__("../../../../../src/app/meal-info/meal-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meal_edit_meal_edit_component__ = __webpack_require__("../../../../../src/app/meal-edit/meal-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__meal_form_meal_form_component__["a" /* MealFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__meal_info_meal_info_component__["a" /* MealInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__meal_edit_meal_edit_component__["a" /* MealEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/meal-edit/meal-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  color: #80d4ff;\n  text-align: center;\n}\n\ninput {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/meal-edit/meal-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"childSelectedMeal\">\n\n        <hr/>\n\n        <h2>Edit Meal</h2>\n\n        <div>\n            <label>Name:</label>\n            <input class = \"form-control\" [(ngModel)] = \"childSelectedMeal.name\" type = \"text\" placeholder = \"Name of the meal\">\n        </div>\n\n        <div>\n            <label>Details:</label>\n            <input class = \"form-control\" [(ngModel)] = \"childSelectedMeal.details\" type = \"text\" placeholder = \"Details about the meal\">\n        </div>\n\n        <div>\n            <label>Calories:</label>\n            <input class = \"form-control\" [(ngModel)] = \"childSelectedMeal.calories\" type = \"number\" placeholder = \"Number of calories in the meal\">\n\n            <button class = \"btn btn-add\"\n                (click) = \"doneClicked()\"\n            >Done</button>\n            <button class = \"btn btn-info\"\n                (click) = \"delClicked()\"\n            >Delete</button>\n\n        </div>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/meal-edit/meal-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meal__ = __webpack_require__("../../../../../src/app/meal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealEditComponent = (function () {
    function MealEditComponent() {
        this.doneClickedSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    MealEditComponent.prototype.doneClicked = function () {
        this.doneClickedSender.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__meal__["a" /* Meal */])
    ], MealEditComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MealEditComponent.prototype, "doneClickedSender", void 0);
    MealEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'meal-edit',
            template: __webpack_require__("../../../../../src/app/meal-edit/meal-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/meal-edit/meal-edit.component.css")]
        })
    ], MealEditComponent);
    return MealEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/meal-form/meal-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n\n* {\n  -webkit-animation: bounceInUp 2.5s ease-in;\n          animation: bounceInUp 2.5s ease-in;\n  color: #66ccff;\n  display: inline;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/meal-form/meal-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <label>Meal:\n    <input  class =\"form-control\" name=\"value\" #newName type=\"text\" placeholder=\"Enter meal here..\">\n  </label>\n  <label>Details:\n    <textarea class =\"form-control\" name=\"details\" #newDetails type=\"text\" rows=\"1\" placeholder=\"Enter details here..\"></textarea>\n  </label>\n  <label>Calories:\n    <input class = \"form-control\" name=\"calories\" #newCalories type = \"number\" placeholder=\"Enter calories here..\">\n  </label>\n  <button\n            class = \"btn btn-info\"\n            (click) = \"\n            addClicked (newName.value, newDetails.value, newCalories.value);\n            newNames.value =  '';\n            newDetails.value = '';\n            newCalories.value = '';\n        \">Add New Meal</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/meal-form/meal-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meal__ = __webpack_require__("../../../../../src/app/meal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealFormComponent = (function () {
    function MealFormComponent() {
        this.newMealSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    MealFormComponent.prototype.addClicked = function (name, details, calories) {
        var newMealToAdd = new __WEBPACK_IMPORTED_MODULE_1__meal__["a" /* Meal */](name, details, calories);
        if (name === '' || details === '' || calories === '') {
            alert('Plesae fill in all the form fields');
        }
        else {
            this.newMealSender.emit(newMealToAdd);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MealFormComponent.prototype, "newMealSender", void 0);
    MealFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'meal-form',
            template: __webpack_require__("../../../../../src/app/meal-form/meal-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/meal-form/meal-form.component.css")]
        })
    ], MealFormComponent);
    return MealFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/meal-info/meal-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/meal-info/meal-info.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Meals</h2>\n\n  <section class = \"currentMealList\">\n\n      <div *ngFor=\"let currentMeal of childMealList\">\n\n          <h4 (click) = \"nameHasBeenClicked(currentMeal)\"> {{currentMeal.name}} </h4>\n\n      </div>\n\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/meal-info/meal-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MealInfoComponent = (function () {
    function MealInfoComponent() {
        this.clickSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    MealInfoComponent.prototype.nameHasBeenClicked = function (mealToEdit) {
        this.clickSender.emit(mealToEdit);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], MealInfoComponent.prototype, "childMealList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MealInfoComponent.prototype, "clickSender", void 0);
    MealInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'meal-info',
            template: __webpack_require__("../../../../../src/app/meal-info/meal-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/meal-info/meal-info.component.css")]
        })
    ], MealInfoComponent);
    return MealInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/meal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Meal; });
var Meal = (function () {
    function Meal(name, details, calories) {
        this.name = name;
        this.details = details;
        this.calories = calories;
    }
    return Meal;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map