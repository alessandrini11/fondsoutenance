(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-chartjs/dist/controller.js */ "./vendor/symfony/ux-chartjs/assets/dist/controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_styles_live_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-live-component/styles/live.css */ "./vendor/symfony/ux-live-component/assets/styles/live.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-chartjs/assets/dist/controller.js":
/*!*************************************************************!*\
  !*** ./vendor/symfony/ux-chartjs/assets/dist/controller.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! chart.js/auto */ "./vendor/symfony/ux-chartjs/assets/node_modules/chart.js/auto/auto.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      if (!(this.element instanceof HTMLCanvasElement)) {
        throw new Error('Invalid element');
      }
      var payload = this.viewValue;
      if (Array.isArray(payload.options) && 0 === payload.options.length) {
        payload.options = {};
      }
      this.dispatchEvent('pre-connect', {
        options: payload.options
      });
      var canvasContext = this.element.getContext('2d');
      if (!canvasContext) {
        throw new Error('Could not getContext() from Element');
      }
      var chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_21__["default"](canvasContext, payload);
      this.dispatchEvent('connect', {
        chart: chart
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'chartjs'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
default_1.values = {
  view: Object
};


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ default_1),
/* harmony export */   "getComponent": () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



























































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentNamedArguments = {};
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      named: currentNamedArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentNamedArguments = {};
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    var mixedArgTypesError = function mixedArgTypesError() {
      throw new Error("Normal and named arguments cannot be mixed inside \"".concat(currentActionName, "()\""));
    };
    if (currentArgumentName) {
      if (currentArguments.length > 0) {
        mixedArgTypesError();
      }
      currentNamedArguments[currentArgumentName.trim()] = currentArgumentValue;
    } else {
      if (Object.keys(currentNamedArguments).length > 0) {
        mixedArgTypesError();
      }
      currentArguments.push(currentArgumentValue.trim());
    }
    currentArgumentName = '';
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    if (Object.keys(currentNamedArguments).length > 0) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support named arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        if (_char === '=') {
          currentArgumentName = currentArgumentValue;
          currentArgumentValue = '';
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(part.split(' ')));
  });
  return finalParts;
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element);
      if (modelNameData === null) {
        return null;
      }
      var modelValue = valueStore.get(modelNameData.action);
      if (Array.isArray(modelValue)) {
        return getMultipleCheckboxValue(element, modelValue);
      }
      return element.checked ? inputValue(element) : null;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val == element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        element.checked = element.value == value;
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0 || directive.named.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0 || directive.named.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  component.getChildren().forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
function cloneElementWithNewTagName(element, newTag) {
  var originalTag = element.tagName;
  var startRX = new RegExp('^<' + originalTag, 'i');
  var endRX = new RegExp(originalTag + '>$', 'i');
  var startSubst = '<' + newTag;
  var endSubst = newTag + '>';
  var newHTML = element.outerHTML.replace(startRX, startSubst).replace(endRX, endSubst);
  return htmlToElement(newHTML);
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      currentValues.push(value);
    }
    return currentValues;
  }
  if (index > -1) {
    currentValues.splice(index, 1);
  }
  return currentValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
function setDeepData(data, propertyPath, value) {
  var _parseDeepData2 = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData2.currentLevelData,
    finalData = _parseDeepData2.finalData,
    finalKey = _parseDeepData2.finalKey,
    parts = _parseDeepData2.parts;
  if (_typeof(currentLevelData) !== 'object') {
    var lastPart = parts.pop();
    if (typeof currentLevelData === 'undefined') {
      throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not exist. Did you forget to expose \"").concat(parts[0], "\" as a LiveProp?"));
    }
    throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not appear to be an object (it's \"").concat(currentLevelData, "\"). Did you forget to add exposed={\"").concat(lastPart, "\"} to its LiveProp?"));
  }
  if (currentLevelData[finalKey] === undefined) {
    var _lastPart = parts.pop();
    if (parts.length > 0) {
      throw new Error("The model name ".concat(propertyPath, " was never initialized. Did you forget to add exposed={\"").concat(_lastPart, "\"} to its LiveProp?"));
    } else {
      throw new Error("The model name \"".concat(propertyPath, "\" was never initialized. Did you forget to expose \"").concat(_lastPart, "\" as a LiveProp? Available models values are: ").concat(Object.keys(data).length > 0 ? Object.keys(data).join(', ') : '(none)'));
    }
  }
  currentLevelData[finalKey] = value;
  return finalData;
}
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props, data) {
    _classCallCheck(this, ValueStore);
    this.updatedModels = [];
    this.props = {};
    this.data = {};
    this.props = props;
    this.data = data;
  }
  _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      var result = getDeepData(this.data, normalizedName);
      if (result !== undefined) {
        return result;
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      var currentValue = this.get(name);
      if (currentValue !== value && !this.updatedModels.includes(normalizedName)) {
        this.updatedModels.push(normalizedName);
      }
      this.data = setDeepData(this.data, normalizedName, value);
      return currentValue !== value;
    }
  }, {
    key: "all",
    value: function all() {
      return Object.assign(Object.assign({}, this.props), this.data);
    }
  }, {
    key: "reinitializeData",
    value: function reinitializeData(data) {
      this.updatedModels = [];
      this.data = data;
    }
  }, {
    key: "reinitializeProps",
    value: function reinitializeProps(props) {
      if (JSON.stringify(props) == JSON.stringify(this.props)) {
        return false;
      }
      this.props = props;
      return true;
    }
  }]);
  return ValueStore;
}();
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;

  // document-fragments dont have attributes so lets not do anything
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  // update attributes on original DOM element
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);

  // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        }
        // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0;
      // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}
function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = undefined;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }

    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }

          // Walk recursively
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
        }

        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }

        // update attributes on original DOM element first
        morphAttrs(fromEl, toEl);
        // optional
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;

      // walk the children
      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild);

        // walk the fromNode children all the way through
        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;
          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }
          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType;

          // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
          var isCompatible = undefined;
          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes

              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.

                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                      // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }
              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true;
              // Simply update nodeValue on the original node to
              // change the text value
              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }
          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home
          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}

        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end
        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl);
          // MORPH
          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }
            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }
            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }
        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);

      // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, childComponents, findChildComponent, getKeyFromElement) {
  var childComponentMap = new Map();
  childComponents.forEach(function (childComponent) {
    childComponentMap.set(childComponent.element, childComponent);
    if (!childComponent.id) {
      throw new Error('Child is missing id.');
    }
    var childComponentToElement = findChildComponent(childComponent.id, rootToElement);
    if (childComponentToElement && childComponentToElement.tagName !== childComponent.element.tagName) {
      var newTag = cloneElementWithNewTagName(childComponentToElement, childComponent.element.tagName);
      childComponentToElement.replaceWith(newTag);
    }
  });
  morphdom(rootFromElement, rootToElement, {
    getNodeKey: function getNodeKey(node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      return getKeyFromElement(node);
    },
    onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
      if (fromEl === rootFromElement) {
        return true;
      }
      if (!(fromEl instanceof HTMLElement || fromEl instanceof SVGElement) || !(toEl instanceof HTMLElement || toEl instanceof SVGElement)) {
        return false;
      }
      var childComponent = childComponentMap.get(fromEl) || false;
      if (childComponent) {
        return childComponent.updateFromNewElement(toEl);
      }
      if (modifiedFieldElements.includes(fromEl)) {
        setValueOnElement(toEl, getElementValue(fromEl));
      }
      if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement && fromEl.isEqualNode(toEl)) {
        var normalizedFromEl = cloneHTMLElement(fromEl);
        normalizeAttributesForComparison(normalizedFromEl);
        var normalizedToEl = cloneHTMLElement(toEl);
        normalizeAttributesForComparison(normalizedToEl);
        if (normalizedFromEl.isEqualNode(normalizedToEl)) {
          return false;
        }
      }
      return !fromEl.hasAttribute('data-live-ignore');
    },
    onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      return !node.hasAttribute('data-live-ignore');
    }
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager;
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
  return BackendResponse;
}();
var ChildComponentWrapper = /*#__PURE__*/_createClass(function ChildComponentWrapper(component, modelBindings) {
  _classCallCheck(this, ChildComponentWrapper);
  this.component = component;
  this.modelBindings = modelBindings;
});
var Component = /*#__PURE__*/function () {
  function Component(element, props, data, fingerprint, id, backend, elementDriver) {
    _classCallCheck(this, Component);
    this.defaultDebounce = 150;
    this.pendingActions = [];
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.children = new Map();
    this.parent = null;
    this.element = element;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.fingerprint = fingerprint;
    this.valueStore = new ValueStore(props, data);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.onChildComponentModelUpdate = this.onChildComponentModelUpdate.bind(this);
  }
  _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var modelBindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children.set(child.id, new ChildComponentWrapper(child, modelBindings));
      child.parent = this;
      child.on('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children["delete"](child.id);
      child.parent = null;
      child.off('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = new Map();
      this.children.forEach(function (childComponent, id) {
        children.set(id, childComponent.component);
      });
      return children;
    }
  }, {
    key: "updateFromNewElement",
    value: function updateFromNewElement(toEl) {
      var props = this.elementDriver.getComponentProps(toEl);
      if (props === null) {
        return false;
      }
      var isChanged = this.valueStore.reinitializeProps(props);
      var fingerprint = toEl.dataset.liveFingerprintValue;
      if (fingerprint !== undefined) {
        this.fingerprint = fingerprint;
      }
      if (isChanged) {
        this.render();
      }
      return false;
    }
  }, {
    key: "onChildComponentModelUpdate",
    value: function onChildComponentModelUpdate(modelName, value, childComponent) {
      var _this5 = this;
      if (!childComponent.id) {
        throw new Error('Missing id');
      }
      var childWrapper = this.children.get(childComponent.id);
      if (!childWrapper) {
        throw new Error('Missing child');
      }
      childWrapper.modelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        _this5.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this6 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      this.backendRequest = this.backend.makeRequest(this.valueStore.all(), this.pendingActions, this.valueStore.updatedModels, this.getChildrenFingerprints());
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.updatedModels = [];
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var backendResponse, html, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                headers = backendResponse.response.headers;
                if (!(headers.get('Content-Type') !== 'application/vnd.live-component+html' && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 11;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this6.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this6.renderError(html);
                }
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 11:
                _this6.processRerender(html, backendResponse);
                _this6.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this6.isRequestPending) {
                  _this6.isRequestPending = false;
                  _this6.performRequest();
                }
                return _context2.abrupt("return", response);
              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this7 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (typeof Turbo !== 'undefined') {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      this.valueStore.updatedModels.forEach(function (modelName) {
        modifiedModelValues[modelName] = _this7.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error('There was a problem with the component HTML returned:');
        throw error;
      }
      this.hooks.triggerHook('loading.state:finished', newElement);
      this.valueStore.reinitializeData(this.elementDriver.getComponentData(newElement));
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this7.valueStore);
      }, Array.from(this.getChildren().values()), this.elementDriver.findChildComponentElement, this.elementDriver.getKeyFromElement);
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this7.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this8 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this8.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.children.forEach(function (childComponent) {
        var child = childComponent.component;
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = child.fingerprint;
      });
      return fingerprints;
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this9 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this9.nextRequestPromiseResolve = resolve;
      });
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this10 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this10.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest;
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Backend);
    this.url = url;
    this.csrfToken = csrfToken;
  }
  _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(data, actions, updatedModels, childrenFingerprints) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html'
      };
      var hasFingerprints = Object.keys(childrenFingerprints).length > 0;
      var hasUpdatedModels = Object.keys(updatedModels).length > 0;
      if (actions.length === 0 && this.willDataFitInUrl(JSON.stringify(data), params, JSON.stringify(childrenFingerprints))) {
        params.set('data', JSON.stringify(data));
        if (hasFingerprints) {
          params.set('childrenFingerprints', JSON.stringify(childrenFingerprints));
        }
        updatedModels.forEach(function (model) {
          params.append('updatedModels[]', model);
        });
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        fetchOptions.headers['Content-Type'] = 'application/json';
        var requestData = {
          data: data
        };
        if (hasUpdatedModels) {
          requestData.updatedModels = updatedModels;
        }
        if (hasFingerprints) {
          requestData.childrenFingerprints = childrenFingerprints;
        }
        if (actions.length > 0) {
          if (this.csrfToken) {
            fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
          }
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        fetchOptions.body = JSON.stringify(requestData);
      }
      var paramsString = params.toString();
      return new BackendRequest(fetch("".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''), fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), updatedModels);
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(dataJson, params, childrenFingerprintsJson) {
      var urlEncodedJsonData = new URLSearchParams(dataJson + childrenFingerprintsJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
  return Backend;
}();
var StandardElementDriver = /*#__PURE__*/function () {
  function StandardElementDriver() {
    _classCallCheck(this, StandardElementDriver);
  }
  _createClass(StandardElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentData",
    value: function getComponentData(rootElement) {
      if (!rootElement.dataset.liveDataValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.liveDataValue);
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(rootElement) {
      if (!rootElement.dataset.livePropsValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.livePropsValue);
    }
  }, {
    key: "findChildComponentElement",
    value: function findChildComponentElement(id, element) {
      return element.querySelector("[data-live-id=".concat(id, "]"));
    }
  }, {
    key: "getKeyFromElement",
    value: function getKeyFromElement(element) {
      return element.dataset.liveId || null;
    }
  }]);
  return StandardElementDriver;
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this11 = this;
      component.on('loading.state:started', function (element, request) {
        _this11.startLoading(element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this11.finishLoading(element);
      });
      this.finishLoading(component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(targetElement, backendRequest) {
      this.handleLoadingToggle(true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(targetElement) {
      this.handleLoadingToggle(false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(isLoading, targetElement, backendRequest) {
      var _this12 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(targetElement).forEach(function (_ref4) {
        var element = _ref4.element,
          directives = _ref4.directives;
        if (isLoading) {
          _this12.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this12.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this12.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this13 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        var _a;
        if (validModifiers.has(modifier.name)) {
          var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            _this13.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this13.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this13.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this13.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(element) {
      var loadingDirectives = [];
      element.querySelectorAll('[data-loading]').forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'inline-block';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList2;
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        this.removeAttributes(element, ['class']);
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this14 = this;
      component.on('model:set', function (modelName) {
        _this14.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin;
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this15 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this15.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this15.isConnected = true;
      });
      component.on('disconnect', function () {
        _this15.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin;
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this16 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref5) {
        var actionName = _ref5.actionName,
          duration = _ref5.duration;
        _this16.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this17 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this17.component.render();
        };
      } else {
        callback = function callback() {
          _this17.component.action(actionName, {}, 0);
        };
      }
      var timer = setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector;
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this18.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this18.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this18.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this19 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this19.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin;
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this20 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this20.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin;
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry() {
    _classCallCheck(this, ComponentRegistry);
    this.components = new WeakMap();
  }
  _createClass(ComponentRegistry, [{
    key: "registerComponent",
    value: function registerComponent(element, definition) {
      this.components.set(element, definition);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(element) {
      this.components["delete"](element);
    }
  }, {
    key: "getComponent",
    value: function getComponent(element) {
      var _this21 = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        var maxCount = 10;
        var interval = setInterval(function () {
          var component = _this21.components.get(element);
          if (component) {
            resolve(component);
          }
          count++;
          if (count > maxCount) {
            clearInterval(interval);
            reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
          }
        }, 5);
      });
    }
  }]);
  return ComponentRegistry;
}();
var ComponentRegistry$1 = new ComponentRegistry();
var getComponent = function getComponent(element) {
  return ComponentRegistry$1.getComponent(element);
};
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this22;
    _classCallCheck(this, default_1);
    _this22 = _super.apply(this, arguments);
    _this22.pendingActionTriggerModelElement = null;
    _this22.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this22.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this22.handleChangeEvent(event);
      }
    }, {
      event: 'live:connect',
      callback: function callback(event) {
        return _this22.handleConnectedControllerEvent(event);
      }
    }];
    return _this22;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this23 = this;
      this.handleDisconnectedChildControllerEvent = this.handleDisconnectedChildControllerEvent.bind(this);
      var id = this.element.dataset.liveId || null;
      this.component = new Component(this.element, this.propsValue, this.dataValue, this.fingerprintValue, id, new Backend(this.urlValue, this.csrfValue), new StandardElementDriver());
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin()];
      plugins.forEach(function (plugin) {
        _this23.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this24 = this;
      this.component.connect();
      this.elementEventListeners.forEach(function (_ref6) {
        var event = _ref6.event,
          callback = _ref6.callback;
        _this24.component.element.addEventListener(event, callback);
      });
      ComponentRegistry$1.registerComponent(this.element, this.component);
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this25 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref7) {
        var event = _ref7.event,
          callback = _ref7.callback;
        _this25.component.element.removeEventListener(event, callback);
      });
      ComponentRegistry$1.unregisterComponent(this.element);
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.target)));
      }
      this.updateModelFromElementEvent(event.target, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this26 = this;
      var rawAction = event.currentTarget.dataset.actionName;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var validModifiers = new Map();
        validModifiers.set('prevent', function () {
          event.preventDefault();
        });
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? parseInt(modifier.value) : true;
        });
        directive.modifiers.forEach(function (modifier) {
          var _a;
          if (validModifiers.has(modifier.name)) {
            var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        _this26.component.action(directive.action, directive.named, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this26.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      this.component.render();
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "handleConnectedControllerEvent",
    value: function handleConnectedControllerEvent(event) {
      if (event.target === this.element) {
        return;
      }
      var childController = event.detail.controller;
      if (childController.component.getParent()) {
        return;
      }
      var modelDirectives = getAllModelDirectiveFromElements(childController.element);
      var modelBindings = modelDirectives.map(getModelBinding);
      this.component.addChild(childController.component, modelBindings);
      childController.element.addEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
    }
  }, {
    key: "handleDisconnectedChildControllerEvent",
    value: function handleDisconnectedChildControllerEvent(event) {
      var childController = event.detail.controller;
      childController.element.removeEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
      if (childController.component.getParent() !== this.component) {
        return;
      }
      this.component.removeChild(childController.component);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__.Controller);
default_1.values = {
  url: String,
  data: Object,
  props: Object,
  csrf: String,
  debounce: {
    type: Number,
    "default": 150
  },
  id: String,
  fingerprint: String
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/styles/live.css":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/styles/live.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-6bb5e7"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdXZCLFVBQVUsR0FBRyxJQUFJO01BQ3hCdnZCLE1BQU0sQ0FBQytPLFNBQVMsR0FBRyxJQUFJLENBQUNtZixnQkFBZ0I7TUFDeEMsSUFBSSxDQUFDbnVCLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFO1FBQUVFLE1BQU0sRUFBTkEsTUFBTTtRQUFFQyxNQUFNLEVBQUUsTUFBTTtRQUFFeXZCLFVBQVUsRUFBVkEsVUFBVTtRQUFFQyxPQUFPLEVBQUVGO01BQVUsQ0FBQyxDQUFDO0lBQ25GO0VBQUM7RUFBQSxPQUFBeHdCLFNBQUE7QUFBQSxFQXZLbUJyQiwyREFBVTtBQXlLbENxQixTQUFTLENBQUNpQixNQUFNLEdBQUc7RUFDZjZsQixHQUFHLEVBQUVyYyxNQUFNO0VBQ1h1SCxJQUFJLEVBQUU3USxNQUFNO0VBQ1pnSixLQUFLLEVBQUVoSixNQUFNO0VBQ2J3dkIsSUFBSSxFQUFFbG1CLE1BQU07RUFDWm9XLFFBQVEsRUFBRTtJQUFFcmQsSUFBSSxFQUFFdUgsTUFBTTtJQUFFLFdBQVM7RUFBSSxDQUFDO0VBQ3hDb04sRUFBRSxFQUFFMU4sTUFBTTtFQUNWZ1YsV0FBVyxFQUFFaFY7QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzcwRUQ7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1jaGFydGpzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz82YmU2Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9zdHlsZXMvbGl2ZS5jc3M/MDJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWNoYXJ0anMvZGlzdC9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9zdHlsZXMvbGl2ZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtY2hhcnRqcy0tY2hhcnQnOiBjb250cm9sbGVyXzAsXG4gICdsaXZlJzogY29udHJvbGxlcl8xLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXlsb2FkID0gdGhpcy52aWV3VmFsdWU7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQub3B0aW9ucykgJiYgMCA9PT0gcGF5bG9hZC5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF5bG9hZC5vcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdwcmUtY29ubmVjdCcsIHsgb3B0aW9uczogcGF5bG9hZC5vcHRpb25zIH0pO1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmICghY2FudmFzQ29udGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0Q29udGV4dCgpIGZyb20gRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KGNhbnZhc0NvbnRleHQsIHBheWxvYWQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNoYXJ0IH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAnY2hhcnRqcycgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICB2aWV3OiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgIGxldCBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbmFtZWQ6IGN1cnJlbnROYW1lZEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50cyA9IHt9O1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1peGVkQXJnVHlwZXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm9ybWFsIGFuZCBuYW1lZCBhcmd1bWVudHMgY2Fubm90IGJlIG1peGVkIGluc2lkZSBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcImApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5hbWVkQXJndW1lbnRzW2N1cnJlbnRBcmd1bWVudE5hbWUudHJpbSgpXSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudE5hbWVkQXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG5hbWVkIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgc3RhdGUgPSAnYWN0aW9uJztcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gY29udGVudFtpXTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhZnRlcl9hcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi5wYXJ0LnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKCddJywgJycpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcuJykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAobW9kZWxOYW1lRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQgPyBpbnB1dFZhbHVlKGVsZW1lbnQpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZTtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50LmRhdGFzZXQubW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5tb2RlbCk7XG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDAgfHwgZGlyZWN0aXZlLm5hbWVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2VsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShkaXJlY3RpdmUuYWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhyb3dPbk1pc3NpbmcgPSB0cnVlKSB7XG4gICAgY29uc3QgZGF0YU1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpO1xuICAgIGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGFNb2RlbERpcmVjdGl2ZXNbMF07XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGlmIChmb3JtRWxlbWVudCAmJiAnbW9kZWwnIGluIGZvcm1FbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbCB8fCAnKicpO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1swXTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7Zm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRocm93T25NaXNzaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZGVsIG5hbWUgZm9yIFwiJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfVwiOiB0aGUgZWxlbWVudCBtdXN0IGVpdGhlciBoYXZlIGEgXCJkYXRhLW1vZGVsXCIgKG9yIFwibmFtZVwiIGF0dHJpYnV0ZSBsaXZpbmcgaW5zaWRlIGEgPGZvcm0gZGF0YS1tb2RlbD1cIipcIj4pLmApO1xufVxuZnVuY3Rpb24gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICBjb21wb25lbnQuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoZm91bmRDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50IHx8IGNoaWxkQ29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICFmb3VuZENoaWxkQ29tcG9uZW50O1xufVxuZnVuY3Rpb24gY2xvbmVIVE1MRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgY2xvbmUgZWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBpZiAodGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgSFRNTCBjb250YWlucyAke3RlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnR9IGVsZW1lbnRzLCBidXQgb25seSAxIHJvb3QgZWxlbWVudCBpcyBhbGxvd2VkLmApO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZCA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENyZWF0ZWQgZWxlbWVudCBpcyBub3QgYW4gSFRNTEVsZW1lbnQ6ICR7aHRtbC50cmltKCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhOZXdUYWdOYW1lKGVsZW1lbnQsIG5ld1RhZykge1xuICAgIGNvbnN0IG9yaWdpbmFsVGFnID0gZWxlbWVudC50YWdOYW1lO1xuICAgIGNvbnN0IHN0YXJ0UlggPSBuZXcgUmVnRXhwKCdePCcgKyBvcmlnaW5hbFRhZywgJ2knKTtcbiAgICBjb25zdCBlbmRSWCA9IG5ldyBSZWdFeHAob3JpZ2luYWxUYWcgKyAnPiQnLCAnaScpO1xuICAgIGNvbnN0IHN0YXJ0U3Vic3QgPSAnPCcgKyBuZXdUYWc7XG4gICAgY29uc3QgZW5kU3Vic3QgPSBuZXdUYWcgKyAnPic7XG4gICAgY29uc3QgbmV3SFRNTCA9IGVsZW1lbnQub3V0ZXJIVE1MLnJlcGxhY2Uoc3RhcnRSWCwgc3RhcnRTdWJzdCkucmVwbGFjZShlbmRSWCwgZW5kU3Vic3QpO1xuICAgIHJldHVybiBodG1sVG9FbGVtZW50KG5ld0hUTUwpO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY3VycmVudFZhbHVlcykge1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjdXJyZW50VmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VmFsdWVzO1xufTtcbmNvbnN0IGlucHV0VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xufTtcblxuZnVuY3Rpb24gZ2V0RGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxuY29uc3QgcGFyc2VEZWVwRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCBmaW5hbERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcbiAgICBjb25zdCBwYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEgPSBjdXJyZW50TGV2ZWxEYXRhW3BhcnRzW2ldXTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxLZXkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhLFxuICAgICAgICBmaW5hbERhdGEsXG4gICAgICAgIGZpbmFsS2V5LFxuICAgICAgICBwYXJ0cyxcbiAgICB9O1xufTtcbmZ1bmN0aW9uIHNldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCwgdmFsdWUpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsRGF0YSwgZmluYWxLZXksIHBhcnRzIH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50TGV2ZWxEYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRMZXZlbERhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZXQgZGF0YS1tb2RlbD1cIiR7cHJvcGVydHlQYXRofVwiLiBUaGUgcGFyZW50IFwiJHtwYXJ0cy5qb2luKCcuJyl9XCIgZGF0YSBkb2VzIG5vdCBleGlzdC4gRGlkIHlvdSBmb3JnZXQgdG8gZXhwb3NlIFwiJHtwYXJ0c1swXX1cIiBhcyBhIExpdmVQcm9wP2ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNldCBkYXRhLW1vZGVsPVwiJHtwcm9wZXJ0eVBhdGh9XCIuIFRoZSBwYXJlbnQgXCIke3BhcnRzLmpvaW4oJy4nKX1cIiBkYXRhIGRvZXMgbm90IGFwcGVhciB0byBiZSBhbiBvYmplY3QgKGl0J3MgXCIke2N1cnJlbnRMZXZlbERhdGF9XCIpLiBEaWQgeW91IGZvcmdldCB0byBhZGQgZXhwb3NlZD17XCIke2xhc3RQYXJ0fVwifSB0byBpdHMgTGl2ZVByb3A/YCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQYXJ0ID0gcGFydHMucG9wKCk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RlbCBuYW1lICR7cHJvcGVydHlQYXRofSB3YXMgbmV2ZXIgaW5pdGlhbGl6ZWQuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBleHBvc2VkPXtcIiR7bGFzdFBhcnR9XCJ9IHRvIGl0cyBMaXZlUHJvcD9gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1vZGVsIG5hbWUgXCIke3Byb3BlcnR5UGF0aH1cIiB3YXMgbmV2ZXIgaW5pdGlhbGl6ZWQuIERpZCB5b3UgZm9yZ2V0IHRvIGV4cG9zZSBcIiR7bGFzdFBhcnR9XCIgYXMgYSBMaXZlUHJvcD8gQXZhaWxhYmxlIG1vZGVscyB2YWx1ZXMgYXJlOiAke09iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDAgPyBPYmplY3Qua2V5cyhkYXRhKS5qb2luKCcsICcpIDogJyhub25lKSd9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudExldmVsRGF0YVtmaW5hbEtleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gZmluYWxEYXRhO1xufVxuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgZGF0YSkge1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0RGVlcERhdGEodGhpcy5kYXRhLCBub3JtYWxpemVkTmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUgJiYgIXRoaXMudXBkYXRlZE1vZGVscy5pbmNsdWRlcyhub3JtYWxpemVkTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZE1vZGVscy5wdXNoKG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGEgPSBzZXREZWVwRGF0YSh0aGlzLmRhdGEsIG5vcm1hbGl6ZWROYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT09IHZhbHVlO1xuICAgIH1cbiAgICBhbGwoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgICByZWluaXRpYWxpemVEYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcm9wcykgPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcblxuZnVuY3Rpb24gbW9ycGhBdHRycyhmcm9tTm9kZSwgdG9Ob2RlKSB7XG4gICAgdmFyIHRvTm9kZUF0dHJzID0gdG9Ob2RlLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJOYW1lO1xuICAgIHZhciBhdHRyTmFtZXNwYWNlVVJJO1xuICAgIHZhciBhdHRyVmFsdWU7XG4gICAgdmFyIGZyb21WYWx1ZTtcblxuICAgIC8vIGRvY3VtZW50LWZyYWdtZW50cyBkb250IGhhdmUgYXR0cmlidXRlcyBzbyBsZXRzIG5vdCBkbyBhbnl0aGluZ1xuICAgIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgZnJvbU5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSB0b05vZGVBdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhdHRyID0gdG9Ob2RlQXR0cnNbaV07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgIGF0dHJWYWx1ZSA9IGF0dHIudmFsdWU7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyLnByZWZpeCA9PT0gJ3htbG5zJyl7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lOyAvLyBJdCdzIG5vdCBhbGxvd2VkIHRvIHNldCBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgWE1MTlMgbmFtZXNwYWNlIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgYHhtbG5zYCBwcmVmaXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXRcbiAgICAvLyB3ZXJlbid0IGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICB2YXIgZnJvbU5vZGVBdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKHZhciBkID0gZnJvbU5vZGVBdHRycy5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xuICAgICAgICBhdHRyID0gZnJvbU5vZGVBdHRyc1tkXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcblxuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciByYW5nZTsgLy8gQ3JlYXRlIGEgcmFuZ2Ugb2JqZWN0IGZvciBlZmZpY2VudGx5IHJlbmRlcmluZyBzdHJpbmdzIHRvIGVsZW1lbnRzLlxudmFyIE5TX1hIVE1MID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuXG52YXIgZG9jID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xudmFyIEhBU19URU1QTEFURV9TVVBQT1JUID0gISFkb2MgJiYgJ2NvbnRlbnQnIGluIGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudmFyIEhBU19SQU5HRV9TVVBQT1JUID0gISFkb2MgJiYgZG9jLmNyZWF0ZVJhbmdlICYmICdjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQnIGluIGRvYy5jcmVhdGVSYW5nZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKSB7XG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgICByYW5nZSA9IGRvYy5jcmVhdGVSYW5nZSgpO1xuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGRvYy5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyKTtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpIHtcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgIGZyYWdtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFib3V0IHRoZSBzYW1lXG4gKiB2YXIgaHRtbCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gKiByZXR1cm4gaHRtbC5ib2R5LmZpcnN0Q2hpbGQ7XG4gKlxuICogQG1ldGhvZCB0b0VsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqL1xuZnVuY3Rpb24gdG9FbGVtZW50KHN0cikge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgaWYgKEhBU19URU1QTEFURV9TVVBQT1JUKSB7XG4gICAgICAvLyBhdm9pZCByZXN0cmljdGlvbnMgb24gY29udGVudCBmb3IgdGhpbmdzIGxpa2UgYDx0cj48dGg+SGk8L3RoPjwvdHI+YCB3aGljaFxuICAgICAgLy8gY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgLy8gPHRlbXBsYXRlPiBzdXBwb3J0IG5vdCBhdmFpbGFibGUgaW4gSUVcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpO1xuICAgIH0gZWxzZSBpZiAoSEFTX1JBTkdFX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHR3byBub2RlJ3MgbmFtZXMgYXJlIHRoZSBzYW1lLlxuICpcbiAqIE5PVEU6IFdlIGRvbid0IGJvdGhlciBjaGVja2luZyBgbmFtZXNwYWNlVVJJYCBiZWNhdXNlIHlvdSB3aWxsIG5ldmVyIGZpbmQgdHdvIEhUTUwgZWxlbWVudHMgd2l0aCB0aGUgc2FtZVxuICogICAgICAgbm9kZU5hbWUgYW5kIGRpZmZlcmVudCBuYW1lc3BhY2UgVVJJcy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYiBUaGUgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVOb2RlTmFtZXMoZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGZyb21Ob2RlTmFtZSA9IGZyb21FbC5ub2RlTmFtZTtcbiAgICB2YXIgdG9Ob2RlTmFtZSA9IHRvRWwubm9kZU5hbWU7XG4gICAgdmFyIGZyb21Db2RlU3RhcnQsIHRvQ29kZVN0YXJ0O1xuXG4gICAgaWYgKGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmcm9tQ29kZVN0YXJ0ID0gZnJvbU5vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG4gICAgdG9Db2RlU3RhcnQgPSB0b05vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSB2aXJ0dWFsIERPTSBub2RlIG9yIFNWRyBub2RlIHRoZW4gd2UgbWF5XG4gICAgLy8gbmVlZCB0byBub3JtYWxpemUgdGhlIHRhZyBuYW1lIGJlZm9yZSBjb21wYXJpbmcuIE5vcm1hbCBIVE1MIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgLy8gaW4gdGhlIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiXG4gICAgLy8gYXJlIGNvbnZlcnRlZCB0byB1cHBlciBjYXNlXG4gICAgaWYgKGZyb21Db2RlU3RhcnQgPD0gOTAgJiYgdG9Db2RlU3RhcnQgPj0gOTcpIHsgLy8gZnJvbSBpcyB1cHBlciBhbmQgdG8gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAodG9Db2RlU3RhcnQgPD0gOTAgJiYgZnJvbUNvZGVTdGFydCA+PSA5NykgeyAvLyB0byBpcyB1cHBlciBhbmQgZnJvbSBpcyBsb3dlclxuICAgICAgICByZXR1cm4gdG9Ob2RlTmFtZSA9PT0gZnJvbU5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCwgb3B0aW9uYWxseSB3aXRoIGEga25vd24gbmFtZXNwYWNlIFVSSS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgZWxlbWVudCBuYW1lLCBlLmcuICdkaXYnIG9yICdzdmcnXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZVVSSV0gdGhlIGVsZW1lbnQncyBuYW1lc3BhY2UgVVJJLCBpLmUuIHRoZSB2YWx1ZSBvZlxuICogaXRzIGB4bWxuc2AgYXR0cmlidXRlIG9yIGl0cyBpbmZlcnJlZCBuYW1lc3BhY2UuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWUsIG5hbWVzcGFjZVVSSSkge1xuICAgIHJldHVybiAhbmFtZXNwYWNlVVJJIHx8IG5hbWVzcGFjZVVSSSA9PT0gTlNfWEhUTUwgP1xuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudChuYW1lKSA6XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIGNoaWxkcmVuIG9mIG9uZSBET00gZWxlbWVudCB0byBhbm90aGVyIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1vdmVDaGlsZHJlbihmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGN1ckNoaWxkKTtcbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB0b0VsO1xufVxuXG5mdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgbmFtZSkge1xuICAgIGlmIChmcm9tRWxbbmFtZV0gIT09IHRvRWxbbmFtZV0pIHtcbiAgICAgICAgZnJvbUVsW25hbWVdID0gdG9FbFtuYW1lXTtcbiAgICAgICAgaWYgKGZyb21FbFtuYW1lXSkge1xuICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgT1BUSU9OOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBmcm9tRWwucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnROYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlICYmIHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnU0VMRUNUJyAmJiAhcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAmJiAhdG9FbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBNUyBFZGdlIGJ1ZyB3aGVyZSB0aGUgJ3NlbGVjdGVkJyBhdHRyaWJ1dGUgY2FuIG9ubHkgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlZCBpZiBzZXQgdG8gYSBub24tZW1wdHkgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMDg3Njc5L1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHNlbGVjdCBlbGVtZW50J3Mgc2VsZWN0ZWRJbmRleCB0byAtMSwgb3RoZXJ3aXNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBmcm9tRWwuc2VsZWN0ZWQgdXNpbmcgdGhlIHN5bmNCb29sZWFuQXR0clByb3AgYmVsb3cgaGFzIG5vIGVmZmVjdC5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY29ycmVjdCBzZWxlY3RlZEluZGV4IHdpbGwgYmUgc2V0IGluIHRoZSBTRUxFQ1Qgc3BlY2lhbCBoYW5kbGVyIGJlbG93LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnc2VsZWN0ZWQnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBcInZhbHVlXCIgYXR0cmlidXRlIGlzIHNwZWNpYWwgZm9yIHRoZSA8aW5wdXQ+IGVsZW1lbnQgc2luY2UgaXQgc2V0c1xuICAgICAqIHRoZSBpbml0aWFsIHZhbHVlLiBDaGFuZ2luZyB0aGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSB3aXRob3V0IGNoYW5naW5nIHRoZVxuICAgICAqIFwidmFsdWVcIiBwcm9wZXJ0eSB3aWxsIGhhdmUgbm8gZWZmZWN0IHNpbmNlIGl0IGlzIG9ubHkgdXNlZCB0byB0aGUgc2V0IHRoZVxuICAgICAqIGluaXRpYWwgdmFsdWUuICBTaW1pbGFyIGZvciB0aGUgXCJjaGVja2VkXCIgYXR0cmlidXRlLCBhbmQgXCJkaXNhYmxlZFwiLlxuICAgICAqL1xuICAgIElOUFVUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdjaGVja2VkJyk7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnZGlzYWJsZWQnKTtcblxuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSB0b0VsLnZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBURVhUQVJFQTogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBOZWVkZWQgZm9yIElFLiBBcHBhcmVudGx5IElFIHNldHMgdGhlIHBsYWNlaG9sZGVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gbm9kZSB2YWx1ZSBhbmQgdmlzZSB2ZXJzYS4gVGhpcyBpZ25vcmVzIGFuIGVtcHR5IHVwZGF0ZS5cbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IGZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT0gbmV3VmFsdWUgfHwgKCFuZXdWYWx1ZSAmJiBvbGRWYWx1ZSA9PSBmcm9tRWwucGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdENoaWxkLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTRUxFQ1Q6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBsb29wIHRocm91Z2ggY2hpbGRyZW4gb2YgZnJvbUVsLCBub3QgdG9FbCBzaW5jZSBub2RlcyBjYW4gYmUgbW92ZWRcbiAgICAgICAgICAgIC8vIGZyb20gdG9FbCB0byBmcm9tRWwgZGlyZWN0bHkgd2hlbiBtb3JwaGluZy5cbiAgICAgICAgICAgIC8vIEF0IHRoZSB0aW1lIHRoaXMgc3BlY2lhbCBoYW5kbGVyIGlzIGludm9rZWQsIGFsbCBjaGlsZHJlbiBoYXZlIGFscmVhZHkgYmVlbiBtb3JwaGVkXG4gICAgICAgICAgICAvLyBhbmQgYXBwZW5kZWQgdG8gLyByZW1vdmVkIGZyb20gZnJvbUVsLCBzbyB1c2luZyBmcm9tRWwgaGVyZSBpcyBzYWZlIGFuZCBjb3JyZWN0LlxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb3B0Z3JvdXA7XG4gICAgICAgICAgICB2YXIgbm9kZU5hbWU7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gY3VyQ2hpbGQubm9kZU5hbWUgJiYgY3VyQ2hpbGQubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBjdXJDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJDaGlsZC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1ckNoaWxkICYmIG9wdGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcm9tRWwuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgRUxFTUVOVF9OT0RFID0gMTtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEgPSAxMTtcbnZhciBURVhUX05PREUgPSAzO1xudmFyIENPTU1FTlRfTk9ERSA9IDg7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gIGlmIChub2RlKSB7XG4gICAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKSB8fCBub2RlLmlkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbW9ycGhkb20oZnJvbU5vZGUsIHRvTm9kZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGZyb21Ob2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9Ob2RlSHRtbCA9IHRvTm9kZTtcbiAgICAgICAgICAgICAgICB0b05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgICAgICAgICAgICAgIHRvTm9kZS5pbm5lckhUTUwgPSB0b05vZGVIdG1sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b05vZGUgPSB0b0VsZW1lbnQodG9Ob2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBnZXROb2RlS2V5ID0gb3B0aW9ucy5nZXROb2RlS2V5IHx8IGRlZmF1bHRHZXROb2RlS2V5O1xuICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbk5vZGVBZGRlZCA9IG9wdGlvbnMub25Ob2RlQWRkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uQmVmb3JlRWxVcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25FbFVwZGF0ZWQgPSBvcHRpb25zLm9uRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZU5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25Ob2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbk5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIGNoaWxkcmVuT25seSA9IG9wdGlvbnMuY2hpbGRyZW5Pbmx5ID09PSB0cnVlO1xuXG4gICAgICAgIC8vIFRoaXMgb2JqZWN0IGlzIHVzZWQgYXMgYSBsb29rdXAgdG8gcXVpY2tseSBmaW5kIGFsbCBrZXllZCBlbGVtZW50cyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgIHZhciBmcm9tTm9kZXNMb29rdXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIga2V5ZWRSZW1vdmFsTGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEtleWVkUmVtb3ZhbChrZXkpIHtcbiAgICAgICAgICAgIGtleWVkUmVtb3ZhbExpc3QucHVzaChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcEtleWVkTm9kZXMgJiYgKGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHNraXBwaW5nIGtleWVkIG5vZGVzIHRoZW4gd2UgYWRkIHRoZSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbGlzdCBzbyB0aGF0IGl0IGNhbiBiZSBoYW5kbGVkIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSByZXBvcnQgdGhlIG5vZGUgYXMgZGlzY2FyZGVkIGlmIGl0IGlzIG5vdCBrZXllZC4gV2UgZG8gdGhpcyBiZWNhdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdCB0aGUgZW5kIHdlIGxvb3AgdGhyb3VnaCBhbGwga2V5ZWQgZWxlbWVudHMgdGhhdCB3ZXJlIHVubWF0Y2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gZGlzY2FyZCB0aGVtIGluIG9uZSBmaW5hbCBwYXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJDaGlsZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMoY3VyQ2hpbGQsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBET00gbm9kZSBvdXQgb2YgdGhlIG9yaWdpbmFsIERPTVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICAgICAgICAgKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnROb2RlIFRoZSBub2RlcyBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtICB7Qm9vbGVhbn0gc2tpcEtleWVkTm9kZXMgSWYgdHJ1ZSB0aGVuIGVsZW1lbnRzIHdpdGgga2V5cyB3aWxsIGJlIHNraXBwZWQgYW5kIG5vdCBkaXNjYXJkZWQuXG4gICAgICAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChub2RlKTtcbiAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC8vIFRyZWVXYWxrZXIgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShyb290KSB7XG4gICAgICAgIC8vICAgICB2YXIgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgIC8vICAgICAgICAgcm9vdCxcbiAgICAgICAgLy8gICAgICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgZWw7XG4gICAgICAgIC8vICAgICB3aGlsZSgoZWwgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgICAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAvLyBOb2RlSXRlcmF0b3IgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICAgIC8vICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAgICAgLy8gICAgIHZhciBlbDtcbiAgICAgICAgLy8gICAgIHdoaWxlKChlbCA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICAgICAgICAgIGluZGV4VHJlZShjdXJDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleFRyZWUoZnJvbU5vZGUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU5vZGVBZGRlZChlbCkge1xuICAgICAgICAgICAgb25Ob2RlQWRkZWQoZWwpO1xuXG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdW5tYXRjaGVkRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2tleV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGZpbmQgYSBkdXBsaWNhdGUgI2lkIG5vZGUgaW4gY2FjaGUsIHJlcGxhY2UgYGVsYCB3aXRoIGNhY2hlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtb3JwaCBpdCB0byB0aGUgY2hpbGQgbm9kZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVubWF0Y2hlZEZyb21FbCAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckNoaWxkLCB1bm1hdGNoZWRGcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWN1cnNpdmVseSBjYWxsIGZvciBjdXJDaGlsZCBhbmQgaXQncyBjaGlsZHJlbiB0byBzZWUgaWYgd2UgZmluZCBzb21ldGhpbmcgaW5cbiAgICAgICAgICAgICAgICAgIC8vIGZyb21Ob2Rlc0xvb2t1cFxuICAgICAgICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIFwidG8gbm9kZXNcIi4gSWYgY3VyRnJvbU5vZGVDaGlsZCBpc1xuICAgICAgICAgICAgLy8gbm9uLW51bGwgdGhlbiB3ZSBzdGlsbCBoYXZlIHNvbWUgZnJvbSBub2RlcyBsZWZ0IG92ZXIgdGhhdCBuZWVkXG4gICAgICAgICAgICAvLyB0byBiZSByZW1vdmVkXG4gICAgICAgICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmICgoY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoRWwoZnJvbUVsLCB0b0VsLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIHZhciB0b0VsS2V5ID0gZ2V0Tm9kZUtleSh0b0VsKTtcblxuICAgICAgICAgICAgaWYgKHRvRWxLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbiBlbGVtZW50IHdpdGggYW4gSUQgaXMgYmVpbmcgbW9ycGhlZCB0aGVuIGl0IHdpbGwgYmUgaW4gdGhlIGZpbmFsXG4gICAgICAgICAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmcm9tTm9kZXNMb29rdXBbdG9FbEtleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVFbFVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVzIG9uIG9yaWdpbmFsIERPTSBlbGVtZW50IGZpcnN0XG4gICAgICAgICAgICAgICAgbW9ycGhBdHRycyhmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgb25FbFVwZGF0ZWQoZnJvbUVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcnMuVEVYVEFSRUEoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUtleTtcbiAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nRnJvbUVsO1xuXG4gICAgICAgICAgICAvLyB3YWxrIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgb3V0ZXI6IHdoaWxlIChjdXJUb05vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRvTmV4dFNpYmxpbmcgPSBjdXJUb05vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBjdXJUb05vZGVLZXkgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIC8vIHdhbGsgdGhlIGZyb21Ob2RlIGNoaWxkcmVuIGFsbCB0aGUgd2F5IHRocm91Z2hcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIGlmIHRoZSBjdXJGcm9tTm9kZUNoaWxkIGRvZXNudCBoYXZlIGEgbWF0Y2ggd2l0aCB0aGUgY3VyVG9Ob2RlQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgRWxlbWVudCBub2Rlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGFyZ2V0IG5vZGUgaGFzIGEga2V5IHNvIHdlIHdhbnQgdG8gbWF0Y2ggaXQgdXAgd2l0aCB0aGUgY29ycmVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICE9PSBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nIGtleSBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgY2hlY2sgb3VyIGxvb2t1cCB0byBzZWUgaWYgdGhlcmUgaXMgYSBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbU5leHRTaWJsaW5nID09PSBtYXRjaGluZ0Zyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHNpbmdsZSBlbGVtZW50IHJlbW92YWxzLiBUbyBhdm9pZCByZW1vdmluZyB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIG5vZGUgb3V0IG9mIHRoZSB0cmVlIChzaW5jZSB0aGF0IGNhbiBicmVhayBDU1MgdHJhbnNpdGlvbnMsIGV0Yy4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGluc3RlYWQgZGlzY2FyZCB0aGUgY3VycmVudCBub2RlIGFuZCB3YWl0IHVudGlsIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiB0byBwcm9wZXJseSBtYXRjaCB1cCB0aGUga2V5ZWQgdGFyZ2V0IGVsZW1lbnQgd2l0aCBpdHMgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3MgbW92ZSB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgaW50byB0aGUgY3VycmVudCBwb3NpdGlvbiBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogV2UgdXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIHJlcGxhY2VDaGlsZCBiZWNhdXNlIHdlIHdhbnQgdG8gZ28gdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYHJlbW92ZU5vZGUoKWAgZnVuY3Rpb24gZm9yIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgZGlzY2FyZGVkIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIGxpZmVjeWNsZSBob29rcyBhcmUgY29ycmVjdGx5IGludm9rZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEJlZm9yZShtYXRjaGluZ0Zyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IG1hdGNoaW5nRnJvbUVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5vZGVzIGFyZSBub3QgY29tcGF0aWJsZSBzaW5jZSB0aGUgXCJ0b1wiIG5vZGUgaGFzIGEga2V5IGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIG5vIG1hdGNoaW5nIGtleWVkIG5vZGUgaW4gdGhlIHNvdXJjZSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBvcmlnaW5hbCBoYXMgYSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gaXNDb21wYXRpYmxlICE9PSBmYWxzZSAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBcImZyb21cIiBub2RlIHRvIG1hdGNoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IGN1ckZyb21Ob2RlVHlwZSA9PSBDT01NRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXBseSB1cGRhdGUgbm9kZVZhbHVlIG9uIHRoZSBvcmlnaW5hbCBub2RlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlICE9PSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIGJvdGggdGhlIFwidG9cIiBjaGlsZCBhbmQgdGhlIFwiZnJvbVwiIGNoaWxkIHNpbmNlIHdlIGZvdW5kIGEgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgZWxzZSB0byBkbyBhcyB3ZSBhbHJlYWR5IHJlY3Vyc2l2ZWx5IGNhbGxlZCBtb3JwaENoaWxkcmVuIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIGluIHRoZSBvcmlnaW5hbCBET00uIEhvd2V2ZXIsIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgZnJvbSBub2RlIGlzIG5vdCBrZXllZFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBpcyBwb3NzaWJsZSB0aGF0IGEga2V5ZWQgbm9kZSBtaWdodCBtYXRjaCB1cCB3aXRoIGEgbm9kZSBzb21ld2hlcmUgZWxzZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSBpbiB0aGUgZmluYWwgRE9NIHRyZWUuIEFmdGVyIGV2ZXJ5dGhpbmcgaXMgZG9uZSB3ZSB3aWxsIHJlbW92ZSBhbnkga2V5ZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBkaWRuJ3QgZmluZCBhIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfSAvLyBFTkQ6IHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHt9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yXG4gICAgICAgICAgICAgICAgLy8gb3VyIFwidG8gbm9kZVwiIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIlxuICAgICAgICAgICAgICAgIC8vIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdCBhcHBlbmQgdGhlIGN1cnJlbnQgXCJ0b1wiIG5vZGVcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAmJiAobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkgJiYgY29tcGFyZU5vZGVOYW1lcyhtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChtYXRjaGluZ0Zyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgPSBvbkJlZm9yZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZShmcm9tRWwub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmFwcGVuZENoaWxkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KTtcblxuICAgICAgICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwubm9kZU5hbWVdO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWxFbEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRU5EOiBtb3JwaENoaWxkcmVuKC4uLilcblxuICAgICAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICAgICAgdmFyIG1vcnBoZWROb2RlVHlwZSA9IG1vcnBoZWROb2RlLm5vZGVUeXBlO1xuICAgICAgICB2YXIgdG9Ob2RlVHlwZSA9IHRvTm9kZS5ub2RlVHlwZTtcblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgICAgICAgLy8gY29tcGF0aWJsZSAoZS5nLiA8ZGl2PiAtLT4gPHNwYW4+IG9yIDxkaXY+IC0tPiBURVhUKVxuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBhcmVOb2RlTmFtZXMoZnJvbU5vZGUsIHRvTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZSA9IG1vdmVDaGlsZHJlbihmcm9tTm9kZSwgY3JlYXRlRWxlbWVudE5TKHRvTm9kZS5ub2RlTmFtZSwgdG9Ob2RlLm5hbWVzcGFjZVVSSSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR29pbmcgZnJvbSBhbiBlbGVtZW50IG5vZGUgdG8gYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBtb3JwaGVkTm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkgeyAvLyBUZXh0IG9yIGNvbW1lbnQgbm9kZVxuICAgICAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSBtb3JwaGVkTm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLm5vZGVWYWx1ZSAhPT0gdG9Ob2RlLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUubm9kZVZhbHVlID0gdG9Ob2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IG5vZGUgdG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vcnBoZWROb2RlID09PSB0b05vZGUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBcInRvIG5vZGVcIiB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgXCJmcm9tIG5vZGVcIiBzbyB3ZSBoYWQgdG9cbiAgICAgICAgICAgIC8vIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvTm9kZS5pc1NhbWVOb2RlICYmIHRvTm9kZS5pc1NhbWVOb2RlKG1vcnBoZWROb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBjaGlsZHJlbk9ubHkpO1xuXG4gICAgICAgICAgICAvLyBXZSBub3cgbmVlZCB0byBsb29wIG92ZXIgYW55IGtleWVkIG5vZGVzIHRoYXQgbWlnaHQgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gcmVtb3ZlZC4gV2Ugb25seSBkbyB0aGUgcmVtb3ZhbCBpZiB3ZSBrbm93IHRoYXQgdGhlIGtleWVkIG5vZGVcbiAgICAgICAgICAgIC8vIG5ldmVyIGZvdW5kIGEgbWF0Y2guIFdoZW4gYSBrZXllZCBub2RlIGlzIG1hdGNoZWQgdXAgd2UgcmVtb3ZlXG4gICAgICAgICAgICAvLyBpdCBvdXQgb2YgZnJvbU5vZGVzTG9va3VwIGFuZCB3ZSB1c2UgZnJvbU5vZGVzTG9va3VwIHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gaWYgYSBrZXllZCBub2RlIGhhcyBiZWVuIG1hdGNoZWQgdXAgb3Igbm90XG4gICAgICAgICAgICBpZiAoa2V5ZWRSZW1vdmFsTGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWtleWVkUmVtb3ZhbExpc3QubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFRvUmVtb3ZlID0gZnJvbU5vZGVzTG9va3VwW2tleWVkUmVtb3ZhbExpc3RbaV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShlbFRvUmVtb3ZlLCBlbFRvUmVtb3ZlLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAobW9ycGhlZE5vZGUuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3JwaGVkTm9kZS5hY3R1YWxpemUoZnJvbU5vZGUub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2UgaGFkIHRvIHN3YXAgb3V0IHRoZSBmcm9tIG5vZGUgd2l0aCBhIG5ldyBub2RlIGJlY2F1c2UgdGhlIG9sZFxuICAgICAgICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBvbGQgRE9NIG5vZGUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLiBUaGlzIGlzIG9ubHlcbiAgICAgICAgICAgIC8vIHBvc3NpYmxlIGlmIHRoZSBvcmlnaW5hbCBET00gbm9kZSB3YXMgcGFydCBvZiBhIERPTSB0cmVlIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgICAgICAgZnJvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9ycGhlZE5vZGUsIGZyb21Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICB9O1xufVxuXG52YXIgbW9ycGhkb20gPSBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpc0ZpbGVJbnB1dCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIGlmICghaXNGaWxlSW5wdXQpIHtcbiAgICAgICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGNoaWxkQ29tcG9uZW50cywgZmluZENoaWxkQ29tcG9uZW50LCBnZXRLZXlGcm9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNoaWxkQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBjaGlsZENvbXBvbmVudE1hcC5zZXQoY2hpbGRDb21wb25lbnQuZWxlbWVudCwgY2hpbGRDb21wb25lbnQpO1xuICAgICAgICBpZiAoIWNoaWxkQ29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkIGlzIG1pc3NpbmcgaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnRUb0VsZW1lbnQgPSBmaW5kQ2hpbGRDb21wb25lbnQoY2hpbGRDb21wb25lbnQuaWQsIHJvb3RUb0VsZW1lbnQpO1xuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnRUb0VsZW1lbnQgJiYgY2hpbGRDb21wb25lbnRUb0VsZW1lbnQudGFnTmFtZSAhPT0gY2hpbGRDb21wb25lbnQuZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYWcgPSBjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZShjaGlsZENvbXBvbmVudFRvRWxlbWVudCwgY2hpbGRDb21wb25lbnQuZWxlbWVudC50YWdOYW1lKTtcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50VG9FbGVtZW50LnJlcGxhY2VXaXRoKG5ld1RhZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIHtcbiAgICAgICAgZ2V0Tm9kZUtleTogKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0S2V5RnJvbUVsZW1lbnQobm9kZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlRWxVcGRhdGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGZyb21FbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHx8XG4gICAgICAgICAgICAgICAgISh0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdG9FbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSBjaGlsZENvbXBvbmVudE1hcC5nZXQoZnJvbUVsKSB8fCBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudC51cGRhdGVGcm9tTmV3RWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZnJvbUVsLmlzRXF1YWxOb2RlKHRvRWwpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZyb21FbCA9IGNsb25lSFRNTEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkVG9FbCA9IGNsb25lSFRNTEVsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZFRvRWwpO1xuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsQmluZGluZ3MgPSBtb2RlbEJpbmRpbmdzO1xuICAgIH1cbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJvcHMsIGRhdGEsIGZpbmdlcnByaW50LCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmRlZmF1bHREZWJvdW5jZSA9IDE1MDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMsIGRhdGEpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUgPSB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdkaXNjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ21vZGVsOnNldCcsIG1vZGVsLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0RGF0YShtb2RlbCkge1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBhY3Rpb24obmFtZSwgYXJncyA9IHt9LCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgYWRkQ2hpbGQoY2hpbGQsIG1vZGVsQmluZGluZ3MgPSBbXSkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc2V0KGNoaWxkLmlkLCBuZXcgQ2hpbGRDb21wb25lbnRXcmFwcGVyKGNoaWxkLCBtb2RlbEJpbmRpbmdzKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5kZWxldGUoY2hpbGQuaWQpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICBjaGlsZC5vZmYoJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuICAgIGdldENoaWxkcmVuKCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZENvbXBvbmVudCwgaWQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnNldChpZCwgY2hpbGRDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5ld0VsZW1lbnQodG9FbCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcyh0b0VsKTtcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZVByb3BzKHByb3BzKTtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSB0b0VsLmRhdGFzZXQubGl2ZUZpbmdlcnByaW50VmFsdWU7XG4gICAgICAgIGlmIChmaW5nZXJwcmludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZShtb2RlbE5hbWUsIHZhbHVlLCBjaGlsZENvbXBvbmVudCkge1xuICAgICAgICBpZiAoIWNoaWxkQ29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgaWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZFdyYXBwZXIgPSB0aGlzLmNoaWxkcmVuLmdldChjaGlsZENvbXBvbmVudC5pZCk7XG4gICAgICAgIGlmICghY2hpbGRXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2hpbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFdyYXBwZXIubW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QodGhpcy52YWx1ZVN0b3JlLmFsbCgpLCB0aGlzLnBlbmRpbmdBY3Rpb25zLCB0aGlzLnZhbHVlU3RvcmUudXBkYXRlZE1vZGVscywgdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUudXBkYXRlZE1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgaWYgKGhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJyAmJiAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBzaG91bGRSZW5kZXI6IHRydWUgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOnN0YXJ0ZWQnLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKCFjb250cm9scy5zaG91bGRSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFR1cmJvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUudXBkYXRlZE1vZGVscy5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOicpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplRGF0YSh0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50RGF0YShuZXdFbGVtZW50KSk7XG4gICAgICAgIGV4ZWN1dGVNb3JwaGRvbSh0aGlzLmVsZW1lbnQsIG5ld0VsZW1lbnQsIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkSW5wdXRzKCksIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksIEFycmF5LmZyb20odGhpcy5nZXRDaGlsZHJlbigpLnZhbHVlcygpKSwgdGhpcy5lbGVtZW50RHJpdmVyLmZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQsIHRoaXMuZWxlbWVudERyaXZlci5nZXRLZXlGcm9tRWxlbWVudCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRDb21wb25lbnQuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IGNoaWxkLmZpbmdlcnByaW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgcmVzZXRQcm9taXNlKCkge1xuICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QoZGF0YSwgYWN0aW9ucywgdXBkYXRlZE1vZGVscywgY2hpbGRyZW5GaW5nZXJwcmludHMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuRmluZ2VycHJpbnRzKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNVcGRhdGVkTW9kZWxzID0gT2JqZWN0LmtleXModXBkYXRlZE1vZGVscykubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLndpbGxEYXRhRml0SW5VcmwoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW5GaW5nZXJwcmludHMpKSkge1xuICAgICAgICAgICAgcGFyYW1zLnNldCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbkZpbmdlcnByaW50cycsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuRmluZ2VycHJpbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVkTW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgndXBkYXRlZE1vZGVsc1tdJywgbW9kZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IGRhdGEgfTtcbiAgICAgICAgICAgIGlmIChoYXNVcGRhdGVkTW9kZWxzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEudXBkYXRlZE1vZGVscyA9IHVwZGF0ZWRNb2RlbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW5GaW5nZXJwcmludHMgPSBjaGlsZHJlbkZpbmdlcnByaW50cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy9fYmF0Y2gnO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaChgJHt1cmx9JHtwYXJhbXNTdHJpbmcubGVuZ3RoID4gMCA/IGA/JHtwYXJhbXNTdHJpbmd9YCA6ICcnfWAsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCB1cGRhdGVkTW9kZWxzKTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChkYXRhSnNvbiwgcGFyYW1zLCBjaGlsZHJlbkZpbmdlcnByaW50c0pzb24pIHtcbiAgICAgICAgY29uc3QgdXJsRW5jb2RlZEpzb25EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhSnNvbiArIGNoaWxkcmVuRmluZ2VycHJpbnRzSnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIFN0YW5kYXJkRWxlbWVudERyaXZlciB7XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50RGF0YShyb290RWxlbWVudCkge1xuICAgICAgICBpZiAoIXJvb3RFbGVtZW50LmRhdGFzZXQubGl2ZURhdGFWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uocm9vdEVsZW1lbnQuZGF0YXNldC5saXZlRGF0YVZhbHVlKTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFyb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKTtcbiAgICB9XG4gICAgZmluZENoaWxkQ29tcG9uZW50RWxlbWVudChpZCwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXZlLWlkPSR7aWR9XWApO1xuICAgIH1cbiAgICBnZXRLZXlGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQubGl2ZUlkIHx8IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZSh0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyh0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpLmZvckVhY2goKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIGlzTG9hZGluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVsXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCB1c2luZyBkYXRhLW1vZGVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsQmluZGluZyAobW9kZWxEaXJlY3RpdmUpIHtcbiAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0RXZlbnROYW1lID0gbnVsbDtcbiAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICBtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2lucHV0JywgJ2NoYW5nZSddLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50TmFtZSA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9yZW5kZXInOlxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWVcbiAgICB9O1xufVxuXG5jb25zdCBDb21wb25lbnRSZWdpc3RyeSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IFdlYWtNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoZWxlbWVudCwgZGVmaW5pdGlvbikge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGVsZW1lbnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudmFyIENvbXBvbmVudFJlZ2lzdHJ5JDEgPSBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKTtcblxuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IENvbXBvbmVudFJlZ2lzdHJ5JDEuZ2V0Q29tcG9uZW50KGVsZW1lbnQpO1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2xpdmU6Y29ubmVjdCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50ID0gdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLnByb3BzVmFsdWUsIHRoaXMuZGF0YVZhbHVlLCB0aGlzLmZpbmdlcnByaW50VmFsdWUsIGlkLCBuZXcgQmFja2VuZCh0aGlzLnVybFZhbHVlLCB0aGlzLmNzcmZWYWx1ZSksIG5ldyBTdGFuZGFyZEVsZW1lbnREcml2ZXIoKSk7XG4gICAgICAgIHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuX19jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgbmV3IExvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgIF07XG4gICAgICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRQbHVnaW4ocGx1Z2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBDb21wb25lbnRSZWdpc3RyeSQxLnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIENvbXBvbmVudFJlZ2lzdHJ5JDEudW5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgdXBkYXRlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnaW5wdXQnIHx8IGV2ZW50LnR5cGUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQudGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC50YXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3QWN0aW9uKTtcbiAgICAgICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgncHJldmVudCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3N0b3AnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc2VsZicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVib3VuY2UnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBkaXJlY3RpdmUubmFtZWQsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGNoaWxkQ29udHJvbGxlci5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncyk7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgIH1cbiAgICBoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpICE9PSB0aGlzLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlbW92ZUNoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIGRldGFpbCA9IHt9LCBjYW5CdWJibGUgPSB0cnVlLCBjYW5jZWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlsLmNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICBkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdsaXZlJywgY2FuY2VsYWJsZSwgYnViYmxlczogY2FuQnViYmxlIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdXJsOiBTdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIHByb3BzOiBPYmplY3QsXG4gICAgY3NyZjogU3RyaW5nLFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBmaW5nZXJwcmludDogU3RyaW5nLFxufTtcblxuZXhwb3J0IHsgQ29tcG9uZW50LCBkZWZhdWx0XzEgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJDaGFydCIsImRlZmF1bHRfMSIsIkhUTUxDYW52YXNFbGVtZW50IiwiRXJyb3IiLCJwYXlsb2FkIiwidmlld1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwib3B0aW9ucyIsImxlbmd0aCIsImRpc3BhdGNoRXZlbnQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImNoYXJ0IiwibmFtZSIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwidmlldyIsIk9iamVjdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50TmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnROYW1lZEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJnZXRMYXN0QWN0aW9uTmFtZSIsImFjdGlvbiIsInB1c2hJbnN0cnVjdGlvbiIsIm5hbWVkIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwibWl4ZWRBcmdUeXBlc0Vycm9yIiwiY29uY2F0IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0Iiwic3BsaXQiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJtb2RlbCIsInJlcGxhY2UiLCJtYXAiLCJzIiwiam9pbiIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJ2YWx1ZVN0b3JlIiwiSFRNTElucHV0RWxlbWVudCIsIm1vZGVsTmFtZURhdGEiLCJnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50IiwibW9kZWxWYWx1ZSIsImdldCIsImdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkT3B0aW9ucyIsImVsIiwiZGF0YXNldCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInNldFZhbHVlT25FbGVtZW50IiwidmFsdWVGb3VuZCIsImFycmF5V3JhcHBlZFZhbHVlIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsImdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzIiwiZGlyZWN0aXZlIiwidGhyb3dPbk1pc3NpbmciLCJkYXRhTW9kZWxEaXJlY3RpdmVzIiwiZm9ybUVsZW1lbnQiLCJjbG9zZXN0IiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29udGFpbnMiLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiZ2V0Q2hpbGRyZW4iLCJjaGlsZENvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiY2xvbmVFbGVtZW50V2l0aE5ld1RhZ05hbWUiLCJuZXdUYWciLCJvcmlnaW5hbFRhZyIsInRhZ05hbWUiLCJzdGFydFJYIiwiUmVnRXhwIiwiZW5kUlgiLCJzdGFydFN1YnN0IiwiZW5kU3Vic3QiLCJuZXdIVE1MIiwib3V0ZXJIVE1MIiwiaW5kZXhPZiIsImN1cnJlbnRWYWx1ZXMiLCJpbmRleCIsInNwbGljZSIsImdldERlZXBEYXRhIiwiZGF0YSIsInByb3BlcnR5UGF0aCIsIl9wYXJzZURlZXBEYXRhIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldERlZXBEYXRhIiwiX3BhcnNlRGVlcERhdGEyIiwibGFzdFBhcnQiLCJWYWx1ZVN0b3JlIiwidXBkYXRlZE1vZGVscyIsIm5vcm1hbGl6ZWROYW1lIiwiaGFzIiwic2V0IiwiY3VycmVudFZhbHVlIiwiYWxsIiwiYXNzaWduIiwicmVpbml0aWFsaXplRGF0YSIsInJlaW5pdGlhbGl6ZVByb3BzIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIm1vcnBoQXR0cnMiLCJmcm9tTm9kZSIsInRvTm9kZSIsInRvTm9kZUF0dHJzIiwiYXR0cmlidXRlcyIsImF0dHIiLCJhdHRyTmFtZSIsImF0dHJOYW1lc3BhY2VVUkkiLCJhdHRyVmFsdWUiLCJmcm9tVmFsdWUiLCJub2RlVHlwZSIsIm5hbWVzcGFjZVVSSSIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGUiLCJmcm9tTm9kZUF0dHJzIiwiZCIsImhhc0F0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyYW5nZSIsIk5TX1hIVE1MIiwiZG9jIiwiSEFTX1RFTVBMQVRFX1NVUFBPUlQiLCJIQVNfUkFOR0VfU1VQUE9SVCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUiLCJzdHIiLCJjaGlsZE5vZGVzIiwiY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2UiLCJzZWxlY3ROb2RlIiwiYm9keSIsImZyYWdtZW50IiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnRGcm9tV3JhcCIsInRvRWxlbWVudCIsImNvbXBhcmVOb2RlTmFtZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZnJvbU5vZGVOYW1lIiwibm9kZU5hbWUiLCJ0b05vZGVOYW1lIiwiZnJvbUNvZGVTdGFydCIsInRvQ29kZVN0YXJ0IiwiY2hhckNvZGVBdCIsInRvVXBwZXJDYXNlIiwiY3JlYXRlRWxlbWVudE5TIiwibW92ZUNoaWxkcmVuIiwiY3VyQ2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dENoaWxkIiwibmV4dFNpYmxpbmciLCJhcHBlbmRDaGlsZCIsInN5bmNCb29sZWFuQXR0clByb3AiLCJzcGVjaWFsRWxIYW5kbGVycyIsIk9QVElPTiIsInBhcmVudE5vZGUiLCJwYXJlbnROYW1lIiwic2VsZWN0ZWRJbmRleCIsIklOUFVUIiwiVEVYVEFSRUEiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwibm9kZVZhbHVlIiwicGxhY2Vob2xkZXIiLCJTRUxFQ1QiLCJvcHRncm91cCIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSIsIlRFWFRfTk9ERSIsIkNPTU1FTlRfTk9ERSIsIm5vb3AiLCJkZWZhdWx0R2V0Tm9kZUtleSIsIm5vZGUiLCJpZCIsIm1vcnBoZG9tRmFjdG9yeSIsIm1vcnBoZG9tIiwidG9Ob2RlSHRtbCIsImdldE5vZGVLZXkiLCJvbkJlZm9yZU5vZGVBZGRlZCIsIm9uTm9kZUFkZGVkIiwib25CZWZvcmVFbFVwZGF0ZWQiLCJvbkVsVXBkYXRlZCIsIm9uQmVmb3JlTm9kZURpc2NhcmRlZCIsIm9uTm9kZURpc2NhcmRlZCIsIm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQiLCJjaGlsZHJlbk9ubHkiLCJmcm9tTm9kZXNMb29rdXAiLCJrZXllZFJlbW92YWxMaXN0IiwiYWRkS2V5ZWRSZW1vdmFsIiwid2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMiLCJza2lwS2V5ZWROb2RlcyIsInJlbW92ZU5vZGUiLCJyZW1vdmVDaGlsZCIsImluZGV4VHJlZSIsImhhbmRsZU5vZGVBZGRlZCIsInVubWF0Y2hlZEZyb21FbCIsInJlcGxhY2VDaGlsZCIsIm1vcnBoRWwiLCJjbGVhbnVwRnJvbUVsIiwiY3VyRnJvbU5vZGVDaGlsZCIsImN1ckZyb21Ob2RlS2V5IiwiZnJvbU5leHRTaWJsaW5nIiwidG9FbEtleSIsIm1vcnBoQ2hpbGRyZW4iLCJjdXJUb05vZGVDaGlsZCIsImN1clRvTm9kZUtleSIsInRvTmV4dFNpYmxpbmciLCJtYXRjaGluZ0Zyb21FbCIsIm91dGVyIiwiaXNTYW1lTm9kZSIsImN1ckZyb21Ob2RlVHlwZSIsImlzQ29tcGF0aWJsZSIsImluc2VydEJlZm9yZSIsIm9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0IiwiYWN0dWFsaXplIiwib3duZXJEb2N1bWVudCIsInNwZWNpYWxFbEhhbmRsZXIiLCJtb3JwaGVkTm9kZSIsIm1vcnBoZWROb2RlVHlwZSIsInRvTm9kZVR5cGUiLCJlbFRvUmVtb3ZlIiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJpc0ZpbGVJbnB1dCIsImNoaWxkcmVuIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImNoaWxkQ29tcG9uZW50cyIsImZpbmRDaGlsZENvbXBvbmVudCIsImdldEtleUZyb21FbGVtZW50IiwiY2hpbGRDb21wb25lbnRNYXAiLCJNYXAiLCJjaGlsZENvbXBvbmVudFRvRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiU1ZHRWxlbWVudCIsInVwZGF0ZUZyb21OZXdFbGVtZW50IiwiaXNFcXVhbE5vZGUiLCJub3JtYWxpemVkRnJvbUVsIiwibm9ybWFsaXplZFRvRWwiLCJVbnN5bmNlZElucHV0c1RyYWNrZXIiLCJtb2RlbEVsZW1lbnRSZXNvbHZlciIsIl90aGlzIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJjYWxsYmFjayIsImhhbmRsZUlucHV0RXZlbnQiLCJ1bnN5bmNlZElucHV0cyIsIlVuc3luY2VkSW5wdXRDb250YWluZXIiLCJhY3RpdmF0ZSIsIl90aGlzMiIsIl9yZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImFkZCIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0ZXh0IiwiZ2V0Qm9keSIsIkNoaWxkQ29tcG9uZW50V3JhcHBlciIsIm1vZGVsQmluZGluZ3MiLCJDb21wb25lbnQiLCJmaW5nZXJwcmludCIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiZGVmYXVsdERlYm91bmNlIiwicGVuZGluZ0FjdGlvbnMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsInBhcmVudCIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsIm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSIsImJpbmQiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImRpc2Nvbm5lY3QiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJwcm9taXNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiZ2V0RGF0YSIsInJlbmRlciIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImFkZENoaWxkIiwiZ2V0UGFyZW50IiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJsaXZlRmluZ2VycHJpbnRWYWx1ZSIsIl90aGlzNSIsImNoaWxkV3JhcHBlciIsIm1vZGVsQmluZGluZyIsImNoaWxkTW9kZWxOYW1lIiwiaW5uZXJNb2RlbE5hbWUiLCJzaG91bGRSZW5kZXIiLCJiYWNrZW5kUmVxdWVzdCIsInBlcmZvcm1SZXF1ZXN0IiwiX3RoaXM2IiwidGhpc1Byb21pc2VSZXNvbHZlIiwibmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSIsIm1ha2VSZXF1ZXN0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJfcmVmMyIsIl9jYWxsZWUyIiwiYmFja2VuZFJlc3BvbnNlIiwiaGVhZGVycyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJfeCIsIl90aGlzNyIsIlR1cmJvIiwidmlzaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsImNvbnNvbGUiLCJnZXRDb21wb25lbnREYXRhIiwiZmluZENoaWxkQ29tcG9uZW50RWxlbWVudCIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXM4Iiwic2V0VGltZW91dCIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZSIsImZvY3VzIiwiZmluZ2VycHJpbnRzIiwiX3RoaXM5IiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJwcm9wZXJ0eSIsIkJhY2tlbmRSZXF1ZXN0IiwiYWN0aW9ucyIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTAiLCJpc1Jlc29sdmVkIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJmaWx0ZXIiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwidGFyZ2V0ZWRNb2RlbHMiLCJCYWNrZW5kIiwidXJsIiwiY3NyZlRva2VuIiwiY2hpbGRyZW5GaW5nZXJwcmludHMiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zbGljZWRUb0FycmF5IiwiX3NwbGl0VXJsMiIsInF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2hPcHRpb25zIiwiQWNjZXB0IiwiaGFzRmluZ2VycHJpbnRzIiwiaGFzVXBkYXRlZE1vZGVscyIsIndpbGxEYXRhRml0SW5VcmwiLCJhcHBlbmQiLCJyZXF1ZXN0RGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhcmFtc1N0cmluZyIsImZldGNoIiwiYmFja2VuZEFjdGlvbiIsImRhdGFKc29uIiwiY2hpbGRyZW5GaW5nZXJwcmludHNKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiU3RhbmRhcmRFbGVtZW50RHJpdmVyIiwibW9kZWxEaXJlY3RpdmUiLCJyb290RWxlbWVudCIsImxpdmVEYXRhVmFsdWUiLCJsaXZlUHJvcHNWYWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJsaXZlSWQiLCJMb2FkaW5nUGx1Z2luIiwiX3RoaXMxMSIsInJlcXVlc3QiLCJzdGFydExvYWRpbmciLCJmaW5pc2hMb2FkaW5nIiwidGFyZ2V0RWxlbWVudCIsImhhbmRsZUxvYWRpbmdUb2dnbGUiLCJpc0xvYWRpbmciLCJfdGhpczEyIiwiYWRkQXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZXMiLCJnZXRMb2FkaW5nRGlyZWN0aXZlcyIsIl9yZWY0IiwiaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZSIsIl90aGlzMTMiLCJmaW5hbEFjdGlvbiIsInBhcnNlTG9hZGluZ0FjdGlvbiIsImRlbGF5IiwidmFsaWRNb2RpZmllcnMiLCJtb2RpZmllciIsInBhcnNlSW50IiwiX2EiLCJsb2FkaW5nRGlyZWN0aXZlIiwic2hvd0VsZW1lbnQiLCJoaWRlRWxlbWVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsb2FkaW5nRGlyZWN0aXZlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2FkaW5nIiwiY2xhc3NlcyIsIl9lbGVtZW50JGNsYXNzTGlzdCIsImNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJyZW1vdmUiLCJhdHRyaWJ1dGUiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW4iLCJfdGhpczE0IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJQYWdlVW5sb2FkaW5nUGx1Z2luIiwiaXNDb25uZWN0ZWQiLCJfdGhpczE1IiwiUG9sbGluZ0RpcmVjdG9yIiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFkZFBvbGwiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsInN0YXJ0QWxsUG9sbGluZyIsIl90aGlzMTYiLCJfcmVmNSIsInN0b3BBbGxQb2xsaW5nIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJQb2xsaW5nIiwiX3RoaXMxNyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMxOCIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMxOSIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMCIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsIkNvbXBvbmVudFJlZ2lzdHJ5IiwiY29tcG9uZW50cyIsIldlYWtNYXAiLCJyZWdpc3RlckNvbXBvbmVudCIsImRlZmluaXRpb24iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwiX3RoaXMyMSIsImNvdW50IiwibWF4Q291bnQiLCJDb21wb25lbnRSZWdpc3RyeSQxIiwiX3RoaXMyMiIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJoYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQiLCJpbml0aWFsaXplIiwiX3RoaXMyMyIsImhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50IiwicHJvcHNWYWx1ZSIsImRhdGFWYWx1ZSIsImZpbmdlcnByaW50VmFsdWUiLCJ1cmxWYWx1ZSIsImNzcmZWYWx1ZSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsIl90aGlzMjQiLCJfcmVmNiIsIl90aGlzMjUiLCJfcmVmNyIsInVwZGF0ZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsIl90aGlzMjYiLCJyYXdBY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkcmVuZGVyIiwiJHVwZGF0ZU1vZGVsIiwiZXZlbnROYW1lIiwiZmluYWxWYWx1ZSIsImNoaWxkQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZXMiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiYnViYmxlcyIsImNzcmYiXSwic291cmNlUm9vdCI6IiJ9