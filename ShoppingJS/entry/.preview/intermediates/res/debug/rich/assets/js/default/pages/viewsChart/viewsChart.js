/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.hml?entry":
/*!*****************************************************************************************************!*\
  !*** D:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.hml?entry ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./viewsChart.hml */ "./lib/json.js!./lib/template.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./viewsChart.css */ "./lib/json.js!./lib/style.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./viewsChart.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.js")

$app_define$('@app-component/viewsChart', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/viewsChart',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.css":
/*!****************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!D:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".chart-region": {
    "height": "400px",
    "width": "700px"
  },
  ".chart-background": {
    "objectFit": "fill"
  },
  ".chart-data": {
    "width": "700px",
    "height": "600px"
  },
  ".button-sty": {
    "marginTop": "10px",
    "width": "300px",
    "height": "80px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.hml":
/*!*******************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!D:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.hml ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/viewsChart/viewsChart:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/viewsChart/viewsChart:2",
        "className": "chart-region"
      },
      "type": "stack",
      "classList": [
        "chart-region"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/viewsChart/viewsChart:3",
            "className": "chart-background",
            "src": "/common/background.png"
          },
          "type": "image",
          "classList": [
            "chart-background"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/viewsChart/viewsChart:5",
            "className": "chart-data",
            "type": "line",
            "ref": "linechart",
            "options": function () {return this.lineOps},
            "datasets": function () {return this.lineData}
          },
          "type": "chart",
          "classList": [
            "chart-data"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/viewsChart/viewsChart:9",
        "value": "setInterval",
        "className": "button-sty"
      },
      "type": "button",
      "events": {
        "click": "autoAddData"
      },
      "classList": [
        "button-sty"
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!D:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/viewsChart/viewsChart.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _default = {
  data: {
    temp: 0,
    lineData: [{
      strokeColor: '#0081ff',
      fillColor: '#cce5ff',
      data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716],
      gradient: true
    }],
    lineOps: {
      xAxis: {
        lineStylemin: 0,
        max: 20,
        display: false
      },
      yAxis: {
        min: 0,
        max: 1000,
        display: false
      },
      series: {
        lineStyle: {
          width: "5px",
          smooth: true
        },
        headPoint: {
          shape: "circle",
          size: 10,
          strokeWidth: 1,
          fillColor: '#ffffff',
          strokeColor: "#2C4CFF",
          display: true
        },
        loop: {
          margin: 2,
          gradient: true
        }
      }
    }
  },
  onInit: function onInit() {
    this.autoAddData();
  },
  addData: function addData() {
    this.$refs.linechart.append({
      serial: 0,
      data: [Math.floor(Math.random() * 400) + 400]
    });
  },
  autoAddData: function autoAddData() {
    var _this = this;

    setInterval(function () {
      (0, _newArrowCheck2["default"])(this, _this);
      var temp = [Math.floor(Math.random() * 400) + 400];

      if (this.temp % 20 === 0) {
        this.lineData[0].data = [];
        this.lineData = this.lineData.slice();
      } else {
        this.lineData[0].data.push(temp);
        this.$refs.linechart.append({
          serial: 0,
          data: temp
        });
      }

      this.temp++;
    }.bind(this), 800);
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

/***/ })

/******/ });
//# sourceMappingURL=viewsChart.js.map