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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.hml?entry":
/*!***********************************************************************************************************************!*\
  !*** d:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.hml?entry ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./shoppingDetailsPage.hml */ "./lib/json.js!./lib/template.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./shoppingDetailsPage.css */ "./lib/json.js!./lib/style.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./shoppingDetailsPage.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.js")

$app_define$('@app-component/shoppingDetailsPage', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/shoppingDetailsPage',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!d:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!d:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "left": "0px",
    "top": "0px",
    "width": "100%",
    "height": "4500px",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  ".swiper": {
    "flexDirection": "column",
    "alignContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "720px",
    "indicatorColor": "#E6E6FA",
    "indicatorSize": "6px",
    "indicatorBottom": "20px",
    "indicatorLeft": "35%",
    "indicatorSelectedColor": "#FF0000"
  },
  ".swiperContent": {
    "height": "100%",
    "justifyContent": "center"
  },
  ".swiperContents": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".text": {
    "fontSize": "22px"
  },
  ".content": {
    "top": "50px",
    "flexDirection": "column",
    "height": "100%",
    "width": "100%"
  },
  ".listContent": {
    "flexDirection": "column",
    "height": "100%",
    "width": "100%"
  },
  ".dialog-main": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "marginBottom": "0px",
    "marginTop": "0px"
  },
  ".dialog-div": {
    "flexDirection": "column"
  },
  ".listSty": {
    "marginTop": "25px",
    "flexDirection": "column",
    "height": "550px",
    "width": "100%"
  },
  ".todo-title": {
    "width": "100%",
    "height": "30px",
    "fontSize": "16px"
  },
  ".dialog-div-progress": {
    "flexDirection": "column",
    "height": "25%",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".dialog-div-rating": {
    "marginTop": "20px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "flexDirection": "column",
    "width": "100%",
    "fontSize": "16px"
  },
  ".min-progress": {
    "width": "10%",
    "height": "10%",
    "marginTop": "20px",
    "strokeWidth": "3px"
  },
  ".customMarquee": {
    "marginLeft": "10px",
    "width": "90%",
    "height": "80px",
    "borderBottomLeftRadius": "20px",
    "borderBottomRightRadius": "20px",
    "borderTopLeftRadius": "20px",
    "borderTopRightRadius": "20px",
    "fontSize": "22px",
    "color": "#FF0000",
    "fontWeight": "bolder",
    "fontFamily": "serif"
  },
  ".icon-style": {
    "width": "30px",
    "height": "30px"
  },
  ".content-annualPrice-div": {
    "height": "120px",
    "backgroundColor": "#FF0000",
    "alignItems": "center"
  },
  ".content-annualPrice-image": {
    "alignContent": "center",
    "width": "65px",
    "height": "65px",
    "marginLeft": "10px"
  },
  ".content-annualPrice-text": {
    "color": "#FFFFFF",
    "fontSize": "32px",
    "marginLeft": "10px"
  },
  ".content-title-div": {
    "flexDirection": "column",
    "marginTop": "6px",
    "marginRight": "0px",
    "marginBottom": "6px",
    "marginLeft": "0px",
    "height": "140px"
  },
  ".content-title-div-title": {
    "fontSize": "28px",
    "fontWeight": "700"
  },
  ".content-title-div-content": {
    "marginTop": "0px",
    "marginRight": "3px",
    "marginBottom": "0px",
    "marginLeft": "3px",
    "color": "#696969",
    "fontSize": "22px"
  },
  ".content-marquee-div": {
    "alignItems": "center",
    "width": "100%",
    "height": "80px",
    "backgroundColor": "#FA8072"
  },
  ".content-marquee-div-image": {
    "width": "32px",
    "height": "32px",
    "marginLeft": "10px"
  },
  ".content-flex-direction-column": {
    "flexDirection": "column"
  },
  ".content-column-height": {
    "height": "60px"
  },
  ".content-column-size-mar": {
    "marginTop": "6px",
    "marginRight": "15px",
    "marginBottom": "6px",
    "marginLeft": "15px",
    "fontSize": "22px"
  },
  ".content-column-color": {
    "color": "#777777"
  },
  ".content-column-width": {
    "width": "95%"
  },
  ".content-column-icon-image": {
    "width": "15px",
    "height": "15px",
    "marginTop": "6px",
    "marginRight": "15px",
    "marginBottom": "6px",
    "marginLeft": "15px"
  },
  ".container-top-div": {
    "height": "65px",
    "backgroundColor": "#87CEEB",
    "position": "fixed",
    "top": "0px"
  },
  ".container-top-div-center": {
    "alignItems": "center"
  },
  ".container-top-div-icon-left": {
    "width": "85%",
    "marginLeft": "15px"
  },
  ".container-margin-right-comm": {
    "marginRight": "10px"
  },
  ".container-margin-right-comm1": {
    "marginRight": "15px"
  },
  ".container-margin-left-comm": {
    "marginLeft": "20px"
  },
  ".container-list-title": {
    "width": "25%",
    "minHeight": "35px",
    "fontSize": "26px",
    "marginLeft": "10px"
  },
  ".container-list-content": {
    "width": "70%",
    "minHeight": "35px",
    "fontSize": "26px"
  },
  ".container-listContent-image": {
    "width": "75%",
    "height": "480px"
  },
  ".container-bottom-div": {
    "backgroundColor": "#FF0000",
    "height": "100px",
    "position": "fixed",
    "bottom": "0px",
    "width": "100%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".container-bottom-div-text": {
    "color": "#FFFFFF",
    "fontSize": "30px"
  },
  ".dialog-div-titleimage": {
    "width": "320px",
    "height": "320px"
  },
  ".dialog-flex-justify": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".dialog-divs-text1": {
    "color": "#FF0000",
    "marginTop": "6px",
    "marginRight": "15px",
    "marginBottom": "6px",
    "marginLeft": "15px",
    "fontSize": "28px"
  },
  ".dialog-divs-text2": {
    "color": "#777777",
    "fontSize": "26px",
    "marginTop": "6px",
    "marginRight": "20px",
    "marginBottom": "6px",
    "marginLeft": "20px"
  },
  ".dialog-divs-icon-close": {
    "width": "20px",
    "height": "20px",
    "position": "absolute",
    "top": "10px",
    "right": "20px"
  },
  ".dialog-div-select": {
    "alignItems": "center",
    "height": "120px",
    "flexDirection": "column"
  },
  ".dialog-div-select-text": {
    "color": "#777777",
    "fontSize": "26px",
    "marginTop": "6px",
    "marginRight": "5px",
    "marginBottom": "6px",
    "marginLeft": "20px"
  },
  ".dialog-div-select-picker": {
    "justifyContent": "center",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "60%"
  },
  ".dialog-div-bottom": {
    "backgroundColor": "#FF0000",
    "height": "100px",
    "width": "100%",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "100px"
  },
  ".dialog-div-bottom-text": {
    "color": "#FFFFFF",
    "fontSize": "30px"
  },
  ".font-size-comm": {
    "fontSize": "26px"
  },
  ".font-size-comm1": {
    "fontSize": "28px"
  },
  ".font-weight-comm": {
    "fontWeight": "600"
  },
  ".dialog-divs-divider-div": {
    "width": "100%",
    "justifyContent": "flex-end",
    "marginRight": "35px",
    "height": "50px",
    "alignItems": "center"
  },
  ".color-comm": {
    "color": "#00BFFF"
  },
  ".dialog-divider": {
    "strokeWidth": "3px",
    "height": "25px",
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px"
  },
  ".pinn": {
    "width": "80px",
    "height": "80px",
    "position": "fixed",
    "bottom": "100px",
    "right": "30px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.hml":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!d:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!d:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.hml ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:2",
        "className": "container-top-div"
      },
      "type": "div",
      "classList": [
        "container-top-div"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:3",
            "className": "container-top-div-center"
          },
          "type": "div",
          "classList": [
            "container-top-div-center"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:4",
                "className": "container-top-div-icon-left"
              },
              "type": "div",
              "classList": [
                "container-top-div-icon-left"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:5",
                    "src": "/common/detail/icon-return.png",
                    "className": "icon-style"
                  },
                  "type": "image",
                  "classList": [
                    "icon-style"
                  ],
                  "events": {
                    "click": "backPage"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:8"
              },
              "type": "div",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:9",
                    "src": "/common/detail/icon-share.png",
                    "className": "icon-style container-margin-right-comm1"
                  },
                  "type": "image",
                  "classList": [
                    "icon-style",
                    "container-margin-right-comm1"
                  ],
                  "events": {
                    "click": "onTextClick"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:12",
                    "id": "apiMenu"
                  },
                  "type": "menu",
                  "id": "apiMenu",
                  "events": {
                    "selected": "onMenuSelected"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:13",
                        "value": "Item-1",
                        "content": function () {return this.pageInfo.scoring}
                      },
                      "type": "option"
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:16",
                        "value": "Item-2",
                        "content": function () {return this.pageInfo.sharing}
                      },
                      "type": "option"
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:19",
                        "value": "Item-3",
                        "content": function () {return this.pageInfo.views}
                      },
                      "type": "option"
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:22",
                        "value": "Item-4",
                        "content": function () {return this.pageInfo.exit}
                      },
                      "type": "option"
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:26",
                    "src": "/common/detail/icon-more.png",
                    "className": "icon-style container-margin-right-comm"
                  },
                  "type": "image",
                  "classList": [
                    "icon-style",
                    "container-margin-right-comm"
                  ],
                  "events": {
                    "click": "onTextClick"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:32",
        "className": "content"
      },
      "type": "div",
      "classList": [
        "content"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:33"
          },
          "type": "div",
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:34",
                "className": "swiper",
                "id": "swiper",
                "index": "0",
                "autoplay": "true",
                "interval": "3000",
                "indicator": "true",
                "loop": "true",
                "digital": "false"
              },
              "type": "swiper",
              "classList": [
                "swiper"
              ],
              "id": "swiper",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:36",
                    "className": "swiperContent"
                  },
                  "type": "div",
                  "classList": [
                    "swiperContent"
                  ],
                  "repeat": {
                    "exp": function () {return this.swiperList},
                    "value": "item"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:37",
                        "src": function () {return '/common/computer/computer' + (this.item) + '.png'}
                      },
                      "type": "image"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:42",
            "className": "content-annualPrice-div"
          },
          "type": "div",
          "classList": [
            "content-annualPrice-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:43",
                "src": "/common/computer/icon-promotion.png",
                "className": "content-annualPrice-image"
              },
              "type": "image",
              "classList": [
                "content-annualPrice-image"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:45",
                "className": "content-annualPrice-text",
                "value": function () {return this.pageInfo.annualPrice}
              },
              "type": "text",
              "classList": [
                "content-annualPrice-text"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:49",
            "className": "content-title-div"
          },
          "type": "div",
          "classList": [
            "content-title-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:50",
                "className": "content-title-div-title",
                "value": function () {return this.pageInfo.productTitle}
              },
              "type": "text",
              "classList": [
                "content-title-div-title"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:53",
                "className": "content-title-div-content",
                "value": function () {return this.pageInfo.productIntroduction}
              },
              "type": "text",
              "classList": [
                "content-title-div-content"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:57",
            "className": "content-marquee-div"
          },
          "type": "div",
          "classList": [
            "content-marquee-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:58",
                "src": "/common/computer/icon-buy.png",
                "className": "content-marquee-div-image"
              },
              "type": "image",
              "classList": [
                "content-marquee-div-image"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:62",
                "id": "customMarquee",
                "className": "customMarquee",
                "scrollamount": function () {return this.scrollAmount},
                "loop": function () {return this.loop},
                "direction": function () {return this.marqueeDir},
                "value": function () {return this.pageInfo.marqueeCustomData}
              },
              "type": "marquee",
              "id": "customMarquee",
              "classList": [
                "customMarquee"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:65",
            "className": "content-flex-direction-column"
          },
          "type": "div",
          "classList": [
            "content-flex-direction-column"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:66",
                "className": "content-column-height"
              },
              "type": "div",
              "classList": [
                "content-column-height"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:67",
                    "className": "content-column-size-mar content-column-color",
                    "value": function () {return this.pageInfo.shipment}
                  },
                  "type": "text",
                  "classList": [
                    "content-column-size-mar",
                    "content-column-color"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:70",
                    "className": "content-column-size-mar",
                    "value": function () {return this.pageInfo.nextDayReach}
                  },
                  "type": "text",
                  "classList": [
                    "content-column-size-mar"
                  ],
                  "style": {
                    "color": function () {return this.textColor}
                  },
                  "events": {
                    "click": "changeColor"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:74",
                "className": "content-column-height"
              },
              "type": "div",
              "events": {
                "click": "selectCity"
              },
              "classList": [
                "content-column-height"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:75",
                    "className": "content-column-width"
                  },
                  "type": "div",
                  "classList": [
                    "content-column-width"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:76",
                        "className": "content-column-size-mar content-column-color",
                        "value": function () {return this.pageInfo.select}
                      },
                      "type": "text",
                      "classList": [
                        "content-column-size-mar",
                        "content-column-color"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:79",
                        "className": "content-column-size-mar",
                        "value": function () {return this.selectCityString}
                      },
                      "type": "text",
                      "classList": [
                        "content-column-size-mar"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:83",
                    "src": "/common/computer/icon-return1.png",
                    "className": "content-column-icon-image"
                  },
                  "type": "image",
                  "classList": [
                    "content-column-icon-image"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:86",
                "className": "content-column-height"
              },
              "type": "div",
              "events": {
                "click": "selectSafeguard"
              },
              "classList": [
                "content-column-height"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:87",
                    "className": "content-column-width"
                  },
                  "type": "div",
                  "classList": [
                    "content-column-width"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:88",
                        "className": "content-column-size-mar content-column-color",
                        "value": function () {return this.pageInfo.guarantee}
                      },
                      "type": "text",
                      "classList": [
                        "content-column-size-mar",
                        "content-column-color"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:91",
                        "className": "content-column-size-mar",
                        "value": function () {return this.pageInfo.guaranteeContent}
                      },
                      "type": "text",
                      "classList": [
                        "content-column-size-mar"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:95",
                    "src": "/common/computer/icon-return1.png",
                    "className": "content-column-icon-image"
                  },
                  "type": "image",
                  "classList": [
                    "content-column-icon-image"
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:99",
            "className": "listSty"
          },
          "type": "div",
          "classList": [
            "listSty"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:100"
              },
              "type": "list",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:101"
                  },
                  "type": "list-item",
                  "repeat": function () {return this.contentList},
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:102",
                        "className": "container-list-title",
                        "value": function () {return this.$item.title}
                      },
                      "type": "text",
                      "classList": [
                        "container-list-title"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:104",
                        "className": "container-list-content",
                        "value": function () {return this.$item.content}
                      },
                      "type": "text",
                      "classList": [
                        "container-list-content"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:109",
            "className": "listContent"
          },
          "type": "div",
          "classList": [
            "listContent"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:110",
                "className": "swiperContents"
              },
              "type": "div",
              "repeat": {
                "exp": function () {return this.swiperList},
                "value": "item"
              },
              "classList": [
                "swiperContents"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:111",
                    "src": function () {return '/common/computer/computer' + (this.item) + '.png'},
                    "className": "container-listContent-image"
                  },
                  "type": "image",
                  "classList": [
                    "container-listContent-image"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:116",
        "className": "container-bottom-div"
      },
      "type": "div",
      "classList": [
        "container-bottom-div"
      ],
      "events": {
        "click": "buy"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:117",
            "className": "container-bottom-div-text",
            "value": function () {return this.pageInfo.nowSell}
          },
          "type": "text",
          "classList": [
            "container-bottom-div-text"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:121",
        "id": "simpledialog",
        "className": "dialog-main"
      },
      "type": "dialog",
      "id": "simpledialog",
      "classList": [
        "dialog-main"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:122",
            "className": "dialog-div"
          },
          "type": "div",
          "classList": [
            "dialog-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:123"
              },
              "type": "div",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:124",
                    "className": "container-margin-left-comm"
                  },
                  "type": "div",
                  "classList": [
                    "container-margin-left-comm"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:125",
                        "src": "/common/computer/computer1.png",
                        "className": "dialog-div-titleimage"
                      },
                      "type": "image",
                      "classList": [
                        "dialog-div-titleimage"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:128",
                    "className": "dialog-flex-justify"
                  },
                  "type": "div",
                  "classList": [
                    "dialog-flex-justify"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:129",
                        "className": "dialog-divs-text1",
                        "value": function () {return this.pageInfo.annualPrice}
                      },
                      "type": "text",
                      "classList": [
                        "dialog-divs-text1"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:132",
                        "className": "dialog-divs-text2",
                        "value": function () {return this.pageInfo.inventory}
                      },
                      "type": "text",
                      "classList": [
                        "dialog-divs-text2"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:136",
                    "src": "/common/computer/icon-close.png",
                    "className": "dialog-divs-icon-close"
                  },
                  "type": "image",
                  "classList": [
                    "dialog-divs-icon-close"
                  ],
                  "events": {
                    "click": "cancelSchedule"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:140",
                "className": "dialog-div-select"
              },
              "type": "div",
              "classList": [
                "dialog-div-select"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:141"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:142",
                        "className": "dialog-div-select-text",
                        "value": function () {return this.pageInfo.selectRewardTime}
                      },
                      "type": "text",
                      "classList": [
                        "dialog-div-select-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:145",
                        "className": "dialog-div-select-picker"
                      },
                      "type": "div",
                      "classList": [
                        "dialog-div-select-picker"
                      ],
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:146",
                            "type": "date",
                            "selected": function () {return this.newDate},
                            "hours": "24",
                            "value": function () {return this.newDate}
                          },
                          "type": "picker",
                          "events": {
                            "change": "changeDate",
                            "cancel": "cancelDate"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:151"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:152",
                        "className": "dialog-div-select-text",
                        "value": function () {return this.pageInfo.selectRewardCity}
                      },
                      "type": "text",
                      "classList": [
                        "dialog-div-select-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:155",
                        "className": "dialog-div-select-picker"
                      },
                      "type": "div",
                      "classList": [
                        "dialog-div-select-picker"
                      ],
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:156",
                            "type": "multi-text",
                            "columns": "3",
                            "range": function () {return this.cityList},
                            "value": function () {return this.selectCityList}
                          },
                          "type": "picker",
                          "events": {
                            "columnchange": "columnTextData",
                            "change": "changeCity"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:162",
                "className": "dialog-div-bottom"
              },
              "type": "div",
              "classList": [
                "dialog-div-bottom"
              ],
              "events": {
                "click": "buy"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:163",
                    "className": "dialog-div-bottom-text",
                    "value": function () {return this.pageInfo.nowSell}
                  },
                  "type": "text",
                  "classList": [
                    "dialog-div-bottom-text"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:169",
        "id": "simpledialogs",
        "className": "dialog-main"
      },
      "type": "dialog",
      "id": "simpledialogs",
      "classList": [
        "dialog-main"
      ],
      "events": {
        "cancel": "cancelBuyDialog"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:170",
            "className": "dialog-div"
          },
          "type": "div",
          "classList": [
            "dialog-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:171",
                "className": "dialog-div-progress"
              },
              "type": "div",
              "classList": [
                "dialog-div-progress"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:172",
                    "className": "min-progress",
                    "type": "scale-ring",
                    "percent": function () {return this.progress.percent},
                    "secondarypercent": function () {return this.progress.secondarypercent}
                  },
                  "type": "progress",
                  "classList": [
                    "min-progress"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:175",
                    "className": "font-size-comm"
                  },
                  "type": "text",
                  "classList": [
                    "font-size-comm"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:176",
                        "value": function () {return (this.pageInfo.saleFlash) + '('}
                      },
                      "type": "span"
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:179",
                        "value": function () {return (this.progress.percent) + '%)'}
                      },
                      "type": "span"
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:183",
                    "className": "font-size-comm",
                    "value": function () {return this.pageInfo.justMoment}
                  },
                  "type": "text",
                  "classList": [
                    "font-size-comm"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:189",
        "id": "ratingDialog",
        "className": "dialog-main"
      },
      "type": "dialog",
      "id": "ratingDialog",
      "classList": [
        "dialog-main"
      ],
      "events": {
        "cancel": "cancelrRatingDialog"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:190",
            "className": "dialog-div"
          },
          "type": "div",
          "classList": [
            "dialog-div"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:191",
                "className": "dialog-div-rating"
              },
              "type": "div",
              "classList": [
                "dialog-div-rating"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:192",
                    "className": "font-size-comm1 font-weight-comm",
                    "value": function () {return this.pageInfo.softwareScore}
                  },
                  "type": "text",
                  "classList": [
                    "font-size-comm1",
                    "font-weight-comm"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:195"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:196",
                        "numstars": "5",
                        "rating": function () {return this.ratingNum}
                      },
                      "type": "rating",
                      "events": {
                        "change": "ratingChange"
                      }
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:199",
                    "className": "ont-size-comm1 font-weight-comm",
                    "value": function () {return this.pageInfo.ratingReason}
                  },
                  "type": "text",
                  "classList": [
                    "ont-size-comm1",
                    "font-weight-comm"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:202",
                    "type": "text",
                    "placeholder": function () {return this.pageInfo.ratingPlaceholder},
                    "value": function () {return this.ratingReason}
                  },
                  "type": "input",
                  "events": {
                    "change": "ratingReasonChange"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:205",
                    "className": "dialog-divs-divider-div"
                  },
                  "type": "div",
                  "classList": [
                    "dialog-divs-divider-div"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:206",
                        "className": "font-size-comm1 color-comm",
                        "value": function () {return this.pageInfo.confirm}
                      },
                      "type": "text",
                      "classList": [
                        "font-size-comm1",
                        "color-comm"
                      ],
                      "events": {
                        "click": "confirmRatingInfo"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:209",
                        "vertical": "true",
                        "className": "dialog-divider"
                      },
                      "type": "divider",
                      "classList": [
                        "dialog-divider"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/shoppingDetailsPage/shoppingDetailsPage:211",
                        "className": "font-size-comm1 color-comm",
                        "value": function () {return this.pageInfo.cancel}
                      },
                      "type": "text",
                      "classList": [
                        "font-size-comm1",
                        "color-comm"
                      ],
                      "events": {
                        "click": "cancelrRatingDialog"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\DevEco Studio 2.1.0.501\\sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../../DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!d:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/DevEco Studio 2.1.0.501/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!d:/DevEco_Projects/ShoppingJS/entry/src/main/js/default/pages/shoppingDetailsPage/shoppingDetailsPage.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _default = {
  data: {
    pageInfo: {
      scoring: '评分',
      sharing: '分享',
      views: '浏览量',
      exit: '退出',
      annualPrice: '年货节 ￥9999',
      productTitle: '【新品】HUAWEI MateBook X Pro 2021款',
      productIntroduction: '13.9英寸全新11代酷睿i7 16G 512G 商务轻薄笔记本 3K触控全面屏 锐炬显卡 多屏协同 翡冷翠',
      marqueeCustomData: '此商品活动中，请尽快购买！',
      shipment: '发货',
      nextDayReach: '次日达',
      select: '选择',
      rewardTo: '配送至：',
      guarantee: '保障',
      guaranteeContent: '假一赔一 - 满66包邮',
      nowSell: '立即抢购',
      inventory: '库存999件',
      selectRewardTime: '选择配送时间：',
      selectRewardCity: '选择配送城市：',
      saleFlash: '抢购中',
      justMoment: '请稍等......',
      softwareScore: '软件评分',
      ratingReason: '评分理由',
      confirm: '确认',
      cancel: '取消',
      ratingPlaceholder: '请输入评分理由(非必填)'
    },
    clearFlag: -1,
    zeroFlag: 0,
    oneFlag: 1,
    twoFlag: 2,
    threeFlag: 3,
    fourFlag: 4,
    textColor: '#FF3536',
    flagNum: 0,
    ratingReason: '',
    ratingNum: 0,
    scrollAmount: 10,
    loop: '-1',
    marqueeDir: 'right',
    interval: null,
    progress: {
      percent: 0,
      secondarypercent: 0
    },
    swiperList: [1, 2, 3, 4, 5, 6, 7, 8],
    swiperLists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    newDate: JSON.stringify(new Date()).substring(1, 11),
    cityList: [['中国'], ['湖北省'], ['武汉市', '黄石市', '十堰市', '宜昌市', '襄阳市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市', '恩施', '仙桃市', '潜江市', '天门市', '神农架林区']],
    selectCityList: [['中国'], ['湖北省'], ['武汉市']],
    selectCityString: '',
    contentList: [{
      title: '屏幕尺寸',
      content: '13.9英寸'
    }, {
      title: '运行内存',
      content: '16GB'
    }, {
      title: '传播名',
      content: 'HUAWEI MateBook X Pro'
    }, {
      title: '屏幕色彩',
      content: '100% sRGB（典型值）'
    }, {
      title: '电池容量',
      content: '56Wh（额定容量）'
    }, {
      title: '存储容量',
      content: '512GB'
    }, {
      title: '分辨率',
      content: '3000x2000'
    }, {
      title: 'CPU型号',
      content: '第11代英特尔® 酷睿™ i5-1135G7 处理器'
    }, {
      title: 'CPU核数',
      content: '4核'
    }, {
      title: '上市时间',
      content: '2021年1月'
    }]
  },
  onInit: function onInit() {},
  onShow: function onShow() {
    this.selectCityString = this.selectCityList.join('-');
  },
  selectCity: function selectCity() {
    this.$element('simpledialog').show();

    _system2["default"].showToast({
      message: '选择'
    });
  },
  selectSafeguard: function selectSafeguard() {
    _system2["default"].showToast({
      message: '保障'
    });
  },
  cancelSchedule: function cancelSchedule() {
    this.$element('simpledialog').close();

    _system2["default"].showToast({
      message: 'close dialog'
    });
  },
  backPage: function backPage() {
    _system["default"].push({
      uri: "pages/homepage/homepage"
    });
  },
  buy: function buy() {
    var _this = this;

    var PROGRESSQUARTERS = 25;
    var PROGRESSONEHALF = 50;
    var PROGRESSTHREEQUARTERS = 75;
    var PROGRESSONEPERCENT = 100;

    if (this.flagNum === 0) {
      this.textColor = '#27FF50';
    } else if (this.flagNum === this.oneFlag) {
      this.textColor = '#A774FF';
    } else if (this.flagNum === this.twoFlag) {
      this.textColor = '#FFF244';
    } else {
      this.flagNum = this.clearFlag;
      this.textColor = '#291CFF';
    }

    this.flagNum += this.oneFlag;
    this.$element('simpledialogs').show();
    var interval = setInterval(function () {
      (0, _newArrowCheck2["default"])(this, _this);

      if ((this.progress.secondarypercent === PROGRESSQUARTERS || this.progress.secondarypercent === PROGRESSONEHALF || this.progress.secondarypercent === PROGRESSTHREEQUARTERS) && this.progress.percent !== PROGRESSONEPERCENT) {
        this.progress.percent += this.oneFlag;
        this.progress.secondarypercent += this.oneFlag;
      } else if (this.progress.secondarypercent === PROGRESSONEPERCENT && this.progress.percent !== PROGRESSONEPERCENT) {
        this.progress.percent += this.oneFlag;
        this.progress.secondarypercent = this.zeroFlag;
      } else if (this.progress.secondarypercent !== PROGRESSONEPERCENT) {
        this.progress.secondarypercent += this.oneFlag;
      } else if (this.progress.percent === PROGRESSONEPERCENT && this.progress.secondarypercent === PROGRESSONEPERCENT) {
        this.$element('simpledialog').close();

        _system2["default"].showToast({
          message: '抢购成功......'
        });

        clearInterval(interval);
      } else {
        _system2["default"].showToast({
          message: '正在处理中......'
        });
      }

      this.interval = interval;
    }.bind(this), 30);
  },
  cancelBuyDialog: function cancelBuyDialog() {
    var PROGRESSONEPERCENT = 100;

    if (this.progress.secondarypercent === PROGRESSONEPERCENT && this.progress.percent === PROGRESSONEPERCENT) {
      _system2["default"].showToast({
        message: '抢购成功......'
      });
    }

    this.$element('simpledialog').close();
    this.progress.secondarypercent = this.zeroFlag;
    this.progress.percent = this.zeroFlag;
    clearInterval(this.interval);
  },
  changeDate: function changeDate(e) {
    this.newDate = e.year + '-' + (e.month + this.oneFlag) + '-' + e.day;
  },
  cancelDate: function cancelDate() {
    _system2["default"].showToast({
      message: '取消'
    });
  },
  changeCity: function changeCity(e) {
    this.selectCityList = e.newValue;
    this.selectCityString = e.newValue.join('-');
  },
  onMenuSelected: function onMenuSelected(e) {
    if (e.value === 'Item-1') {
      this.$element('ratingDialog').show();
    } else if (e.value === 'Item-3') {
      _system["default"].push({
        uri: "pages/viewsChart/viewsChart"
      });
    } else if (e.value === 'Item-4') {
      _system2["default"].showToast({
        message: '程序退出中......'
      });

      setTimeout(function () {
        _system3["default"].terminate();
      }, 2000);
    }
  },
  onTextClick: function onTextClick() {
    this.$element('apiMenu').show({
      x: 720,
      y: 38
    });
  },
  cancelrRatingDialog: function cancelrRatingDialog() {
    this.$element('ratingDialog').close();

    _system2["default"].showToast({
      message: '取消......'
    });
  },
  confirmRatingInfo: function confirmRatingInfo() {
    this.$element('ratingDialog').close();

    _system2["default"].showToast({
      message: '评分：' + this.ratingNum + '    评论理由：' + this.ratingReason
    });
  },
  ratingChange: function ratingChange(e) {
    this.ratingNum = e.rating;

    _system2["default"].showToast({
      message: e.rating
    });
  },
  ratingReasonChange: function ratingReasonChange(e) {
    this.ratingReason = e.text;

    _system2["default"].showToast({
      message: JSON.stringify(e.text)
    });
  },
  stickFloat: function stickFloat() {}
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
//# sourceMappingURL=shoppingDetailsPage.js.map