(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_splash_splash_container_js"],{

/***/ "./frontend/components/splash/front_page_carousel.js":
/*!***********************************************************!*
  !*** ./frontend/components/splash/front_page_carousel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function FrontPageCarousel(props) {
  var sneakers = props.sneakers;
  var responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {
        max: 4000,
        min: 3000
      },
      items: 3
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 5
    }
  };

  var LeftArrow = function LeftArrow(arrowProps) {
    var carouselState = arrowProps.carouselState,
        children = arrowProps.children,
        restArrowProps = _objectWithoutProperties(arrowProps, ["carouselState", "children"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineLeft, _extends({
      size: 30,
      className: "buttonLeft"
    }, restArrowProps), children);
  };

  var RightArrow = function RightArrow(arrowProps) {
    var carouselState = arrowProps.carouselState,
        children = arrowProps.children,
        restArrowProps = _objectWithoutProperties(arrowProps, ["carouselState", "children"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineRight, _extends({
      size: 30,
      className: "buttonRight"
    }, restArrowProps), children);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
    partialVisible: true,
    responsive: responsive,
    className: "carousel-container",
    customLeftArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LeftArrow, null),
    customRightArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RightArrow, null)
  }, sneakers.map(function (sneaker, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/sneaker/".concat(sneaker.sku),
      className: "carousel-shoe-wrapper",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "carousel-shoe-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: sneaker.photoUrl,
      alt: sneaker.name,
      className: "carousel-shoe-img"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "carousel-shoe-detail-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "carousel-shoe-detail"
    }, sneaker.name)));
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontPageCarousel);

/***/ }),

/***/ "./frontend/components/splash/splash.jsx":
/*!***********************************************!*
  !*** ./frontend/components/splash/splash.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _front_page_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front_page_carousel */ "./frontend/components/splash/front_page_carousel.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Splash = /*#__PURE__*/function (_Component) {
  _inherits(Splash, _Component);

  var _super = _createSuper(Splash);

  function Splash(props) {
    var _this;

    _classCallCheck(this, Splash);

    _this = _super.call(this, props);
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Splash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAdidasFrontPageCollection();
      this.props.getJordanFrontPageCollection();
      this.props.getSbsFrontPageCollection();
      this.props.getYeezyFrontPageCollection();
      window.scrollTo(0, 0);
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (window.scrollY > 10) {
        document.querySelector(".nav-container").className = "nav-container scroll";
      } else {
        document.querySelector(".nav-container").className = "nav-container";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          adidasFrontPageCollection = _this$props.adidasFrontPageCollection,
          jordanFrontPageCollection = _this$props.jordanFrontPageCollection,
          sbsFrontPageCollection = _this$props.sbsFrontPageCollection,
          yeezyFrontPageCollection = _this$props.yeezyFrontPageCollection,
          getAdidasCollection = _this$props.getAdidasCollection,
          getYeezyCollection = _this$props.getYeezyCollection,
          getSbsCollection = _this$props.getSbsCollection,
          getJordanCollection = _this$props.getJordanCollection;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "splash-main-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front-page-img-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneaker/CT8012011",
        className: "splash-img-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        loading: "eager",
        src: window.images.jubilee11s,
        alt: "Jubilee 11s"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-front-page-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Air Jordans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "see-all-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneakers/collections"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return getJordanCollection();
        },
        className: "see-all-button"
      }, "See All")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front_page_collection"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_front_page_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
        sneakers: jordanFrontPageCollection
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front-page-img-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: window.images.sbs,
        alt: "Sbs_Skateboard"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-front-page-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Nostalgic Nike Sb Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "see-all-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneakers/collections"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return getSbsCollection();
        },
        className: "see-all-button"
      }, "See All")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front_page_collection"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_front_page_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
        sneakers: sbsFrontPageCollection
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front-page-img-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneaker/BY2911",
        className: "splash-img-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: window.images.sns,
        alt: "SNS Ultraboosts"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-front-page-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Adidas Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "see-all-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneakers/collections"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return getAdidasCollection();
        },
        className: "see-all-button"
      }, "See All")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front_page_collection"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_front_page_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
        sneakers: adidasFrontPageCollection
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front-page-img-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneaker/GY0260",
        className: "splash-img-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: window.images.kyanite,
        alt: "Yeezy Kyanite"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-front-page-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "sneaker-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Yeezy Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "see-all-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/sneakers/collections"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return getYeezyCollection();
        },
        className: "see-all-button"
      }, "See All")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "front_page_collection"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_front_page_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
        sneakers: yeezyFrontPageCollection
      })))));
    }
  }]);

  return Splash;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Splash);

/***/ }),

/***/ "./frontend/components/splash/splash_container.js":
/*!********************************************************!*
  !*** ./frontend/components/splash/splash_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/sneakers_actions */ "./frontend/actions/sneakers_actions.js");
/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash */ "./frontend/components/splash/splash.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    adidasFrontPageCollection: state.entities.adidasFrontPageCollection,
    jordanFrontPageCollection: state.entities.jordanFrontPageCollection,
    sbsFrontPageCollection: state.entities.sbsFrontPageCollection,
    yeezyFrontPageCollection: state.entities.yeezyFrontPageCollection
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAdidasFrontPageCollection: function getAdidasFrontPageCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getAdidasFrontPageCollection)());
    },
    getAdidasCollection: function getAdidasCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getAdidasCollection)());
    },
    getYeezyFrontPageCollection: function getYeezyFrontPageCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getYeezyFrontPageCollection)());
    },
    getYeezyCollection: function getYeezyCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getYeezyCollection)());
    },
    getSbsFrontPageCollection: function getSbsFrontPageCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getSbsFrontPageCollection)());
    },
    getSbsCollection: function getSbsCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getSbsCollection)());
    },
    getJordanFrontPageCollection: function getJordanFrontPageCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getJordanFrontPageCollection)());
    },
    getJordanCollection: function getJordanCollection() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getJordanCollection)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_splash__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc3BsYXNoL2Zyb250X3BhZ2VfY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vU25lYWtlcnovLi9mcm9udGVuZC9jb21wb25lbnRzL3NwbGFzaC9zcGxhc2guanN4Iiwid2VicGFjazovL1NuZWFrZXJ6Ly4vZnJvbnRlbmQvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoX2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJGcm9udFBhZ2VDYXJvdXNlbCIsInByb3BzIiwic25lYWtlcnMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiTGVmdEFycm93IiwiYXJyb3dQcm9wcyIsImNhcm91c2VsU3RhdGUiLCJjaGlsZHJlbiIsInJlc3RBcnJvd1Byb3BzIiwiUmlnaHRBcnJvdyIsIm1hcCIsInNuZWFrZXIiLCJpbmRleCIsInNrdSIsInBob3RvVXJsIiwibmFtZSIsIlNwbGFzaCIsImhhbmRsZVNjcm9sbCIsImJpbmQiLCJnZXRBZGlkYXNGcm9udFBhZ2VDb2xsZWN0aW9uIiwiZ2V0Sm9yZGFuRnJvbnRQYWdlQ29sbGVjdGlvbiIsImdldFNic0Zyb250UGFnZUNvbGxlY3Rpb24iLCJnZXRZZWV6eUZyb250UGFnZUNvbGxlY3Rpb24iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsImFkaWRhc0Zyb250UGFnZUNvbGxlY3Rpb24iLCJqb3JkYW5Gcm9udFBhZ2VDb2xsZWN0aW9uIiwic2JzRnJvbnRQYWdlQ29sbGVjdGlvbiIsInllZXp5RnJvbnRQYWdlQ29sbGVjdGlvbiIsImdldEFkaWRhc0NvbGxlY3Rpb24iLCJnZXRZZWV6eUNvbGxlY3Rpb24iLCJnZXRTYnNDb2xsZWN0aW9uIiwiZ2V0Sm9yZGFuQ29sbGVjdGlvbiIsImltYWdlcyIsImp1YmlsZWUxMXMiLCJzYnMiLCJzbnMiLCJreWFuaXRlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJlbnRpdGllcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQSxNQUMxQkMsUUFEMEIsR0FDYkQsS0FEYSxDQUMxQkMsUUFEMEI7QUFHaEMsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxxQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQUZLO0FBR2pCQyxXQUFLLEVBQUU7QUFIVSxLQURGO0FBTWpCQyxXQUFPLEVBQUU7QUFDUEosZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETDtBQUVQQyxXQUFLLEVBQUU7QUFGQSxLQU5RO0FBVWpCRSxVQUFNLEVBQUU7QUFDTkwsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FETjtBQUVOQyxXQUFLLEVBQUU7QUFGRCxLQVZTO0FBY2pCRyxVQUFNLEVBQUU7QUFDTk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FETjtBQUVOQyxXQUFLLEVBQUU7QUFGRDtBQWRTLEdBQW5COztBQW9CQSxNQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxVQUFELEVBQWdCO0FBQUEsUUFDeEJDLGFBRHdCLEdBQ3VCRCxVQUR2QixDQUN4QkMsYUFEd0I7QUFBQSxR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QUFNYyxRQUFRLENBQUNkLDhFQUFtQixFQUFwQixDQUFkO0FBQUEsS0FGbUI7QUFHeENiLCtCQUEyQixFQUFFO0FBQUEsYUFBTTJCLFFBQVEsQ0FBQzNCLHNGQUEyQixFQUE1QixDQUFkO0FBQUEsS0FIVztBQUl4Q2Msc0JBQWtCLEVBQUU7QUFBQSxhQUFNYSxRQUFRLENBQUNiLDZFQUFrQixFQUFuQixDQUFkO0FBQUEsS0FKb0I7QUFLeENmLDZCQUF5QixFQUFFO0FBQUEsYUFBTTRCLFFBQVEsQ0FBQzVCLG9GQUF5QixFQUExQixDQUFkO0FBQUEsS0FMYTtBQU14Q2dCLG9CQUFnQixFQUFFO0FBQUEsYUFBTVksUUFBUSxDQUFDWiwyRUFBZ0IsRUFBakIsQ0FBZDtBQUFBLEtBTnNCO0FBT3hDakIsZ0NBQTRCLEVBQUU7QUFBQSxhQUFNNkIsUUFBUSxDQUFDN0IsdUZBQTRCLEVBQTdCLENBQWQ7QUFBQSxLQVBVO0FBUXhDa0IsdUJBQW1CLEVBQUU7QUFBQSxhQUFNVyxRQUFRLENBQUNYLDhFQUFtQixFQUFwQixDQUFkO0FBQUE7QUFSbUIsR0FBZjtBQUFBLENBQTNCOztBQVdBLGlFQUFlWSxvREFBTyxDQUFDTCxlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q2hDLDRDQUE3QyxDQUFmLEUiLCJmaWxlIjoiZnJvbnRlbmRfY29tcG9uZW50c19zcGxhc2hfc3BsYXNoX2NvbnRhaW5lcl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVMZWZ0LCBBaU91dGxpbmVSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5mdW5jdGlvbiBGcm9udFBhZ2VDYXJvdXNlbChwcm9wcykge1xuICBsZXQgeyBzbmVha2VycyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgIGl0ZW1zOiAzLFxuICAgIH0sXG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDMsXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDMsXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBMZWZ0QXJyb3cgPSAoYXJyb3dQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2Fyb3VzZWxTdGF0ZSwgY2hpbGRyZW4sIC4uLnJlc3RBcnJvd1Byb3BzIH0gPSBhcnJvd1Byb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBaU91dGxpbmVMZWZ0IHNpemU9ezMwfSBjbGFzc05hbWU9XCJidXR0b25MZWZ0XCIgey4uLnJlc3RBcnJvd1Byb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9BaU91dGxpbmVMZWZ0PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRBcnJvdyA9IChhcnJvd1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjYXJvdXNlbFN0YXRlLCBjaGlsZHJlbiwgLi4ucmVzdEFycm93UHJvcHMgfSA9IGFycm93UHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFpT3V0bGluZVJpZ2h0IHNpemU9ezMwfSBjbGFzc05hbWU9XCJidXR0b25SaWdodFwiIHsuLi5yZXN0QXJyb3dQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQWlPdXRsaW5lUmlnaHQ+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1pbWctY29udGFpbmVyXCI+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgcGFydGlhbFZpc2libGU9e3RydWV9XG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiXG4gICAgICAgIGN1c3RvbUxlZnRBcnJvdz17PExlZnRBcnJvdyAvPn1cbiAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PFJpZ2h0QXJyb3cgLz59XG4gICAgICA+XG4gICAgICAgIHtzbmVha2Vycy5tYXAoKHNuZWFrZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXtgL3NuZWFrZXIvJHtzbmVha2VyLnNrdX1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1zaG9lLXdyYXBwZXJcIlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXNob2UtbGlua1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17c25lYWtlci5waG90b1VybH1cbiAgICAgICAgICAgICAgICAgIGFsdD17c25lYWtlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtc2hvZS1pbWdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXNob2UtZGV0YWlsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtc2hvZS1kZXRhaWxcIj57c25lYWtlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250UGFnZUNhcm91c2VsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEZyb250UGFnZUNhcm91c2VsIGZyb20gXCIuL2Zyb250X3BhZ2VfY2Fyb3VzZWxcIjtcblxuY2xhc3MgU3BsYXNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRBZGlkYXNGcm9udFBhZ2VDb2xsZWN0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5nZXRKb3JkYW5Gcm9udFBhZ2VDb2xsZWN0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5nZXRTYnNGcm9udFBhZ2VDb2xsZWN0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5nZXRZZWV6eUZyb250UGFnZUNvbGxlY3Rpb24oKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb250YWluZXJcIikuY2xhc3NOYW1lID1cbiAgICAgICAgXCJuYXYtY29udGFpbmVyIHNjcm9sbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb250YWluZXJcIikuY2xhc3NOYW1lID0gXCJuYXYtY29udGFpbmVyXCI7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7XG4gICAgICBhZGlkYXNGcm9udFBhZ2VDb2xsZWN0aW9uLFxuICAgICAgam9yZGFuRnJvbnRQYWdlQ29sbGVjdGlvbixcbiAgICAgIHNic0Zyb250UGFnZUNvbGxlY3Rpb24sXG4gICAgICB5ZWV6eUZyb250UGFnZUNvbGxlY3Rpb24sXG4gICAgICBnZXRBZGlkYXNDb2xsZWN0aW9uLFxuICAgICAgZ2V0WWVlenlDb2xsZWN0aW9uLFxuICAgICAgZ2V0U2JzQ29sbGVjdGlvbixcbiAgICAgIGdldEpvcmRhbkNvbGxlY3Rpb24sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsYXNoLW1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250LXBhZ2UtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc25lYWtlci9DVDgwMTIwMTFcIiBjbGFzc05hbWU9XCJzcGxhc2gtaW1nLWxpbmtcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgICAgICAgICAgc3JjPXt3aW5kb3cuaW1hZ2VzLmp1YmlsZWUxMXN9XG4gICAgICAgICAgICAgICAgYWx0PVwiSnViaWxlZSAxMXNcIlxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmVha2VyLWZyb250LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuZWFrZXItaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDM+QWlyIEpvcmRhbnM8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZS1hbGwtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NuZWFrZXJzL2NvbGxlY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEpvcmRhbkNvbGxlY3Rpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VlLWFsbC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZWUgQWxsXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250X3BhZ2VfY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgICA8RnJvbnRQYWdlQ2Fyb3VzZWwgc25lYWtlcnM9e2pvcmRhbkZyb250UGFnZUNvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnQtcGFnZS1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17d2luZG93LmltYWdlcy5zYnN9IGFsdD1cIlNic19Ta2F0ZWJvYXJkXCI+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmVha2VyLWZyb250LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuZWFrZXItaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDM+Tm9zdGFsZ2ljIE5pa2UgU2IgQ29sbGVjdGlvbjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlLWFsbC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc25lYWtlcnMvY29sbGVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0U2JzQ29sbGVjdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWUtYWxsLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNlZSBBbGxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnRfcGFnZV9jb2xsZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxGcm9udFBhZ2VDYXJvdXNlbCBzbmVha2Vycz17c2JzRnJvbnRQYWdlQ29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udC1wYWdlLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NuZWFrZXIvQlkyOTExXCIgY2xhc3NOYW1lPVwic3BsYXNoLWltZy1saW5rXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt3aW5kb3cuaW1hZ2VzLnNuc30gYWx0PVwiU05TIFVsdHJhYm9vc3RzXCI+PC9pbWc+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmVha2VyLWZyb250LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuZWFrZXItaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDM+QWRpZGFzIENvbGxlY3Rpb248L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZS1hbGwtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NuZWFrZXJzL2NvbGxlY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEFkaWRhc0NvbGxlY3Rpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VlLWFsbC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZWUgQWxsXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250X3BhZ2VfY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgICA8RnJvbnRQYWdlQ2Fyb3VzZWwgc25lYWtlcnM9e2FkaWRhc0Zyb250UGFnZUNvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnQtcGFnZS1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9zbmVha2VyL0dZMDI2MFwiIGNsYXNzTmFtZT1cInNwbGFzaC1pbWctbGlua1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17d2luZG93LmltYWdlcy5reWFuaXRlfSBhbHQ9XCJZZWV6eSBLeWFuaXRlXCI+PC9pbWc+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmVha2VyLWZyb250LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuZWFrZXItaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDM+WWVlenkgQ29sbGVjdGlvbjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlLWFsbC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc25lYWtlcnMvY29sbGVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0WWVlenlDb2xsZWN0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlZS1hbGwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VlIEFsbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udF9wYWdlX2NvbGxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPEZyb250UGFnZUNhcm91c2VsIHNuZWFrZXJzPXt5ZWV6eUZyb250UGFnZUNvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgZ2V0QWRpZGFzRnJvbnRQYWdlQ29sbGVjdGlvbixcbiAgZ2V0WWVlenlGcm9udFBhZ2VDb2xsZWN0aW9uLFxuICBnZXRTYnNGcm9udFBhZ2VDb2xsZWN0aW9uLFxuICBnZXRKb3JkYW5Gcm9udFBhZ2VDb2xsZWN0aW9uLFxuICBnZXRBZGlkYXNDb2xsZWN0aW9uLFxuICBnZXRZZWV6eUNvbGxlY3Rpb24sXG4gIGdldFNic0NvbGxlY3Rpb24sXG4gIGdldEpvcmRhbkNvbGxlY3Rpb24sXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL3NuZWFrZXJzX2FjdGlvbnNcIjtcbmltcG9ydCBTcGxhc2ggZnJvbSBcIi4vc3BsYXNoXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYWRpZGFzRnJvbnRQYWdlQ29sbGVjdGlvbjogc3RhdGUuZW50aXRpZXMuYWRpZGFzRnJvbnRQYWdlQ29sbGVjdGlvbixcbiAgam9yZGFuRnJvbnRQYWdlQ29sbGVjdGlvbjogc3RhdGUuZW50aXRpZXMuam9yZGFuRnJvbnRQYWdlQ29sbGVjdGlvbixcbiAgc2JzRnJvbnRQYWdlQ29sbGVjdGlvbjogc3RhdGUuZW50aXRpZXMuc2JzRnJvbnRQYWdlQ29sbGVjdGlvbixcbiAgeWVlenlGcm9udFBhZ2VDb2xsZWN0aW9uOiBzdGF0ZS5lbnRpdGllcy55ZWV6eUZyb250UGFnZUNvbGxlY3Rpb24sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBnZXRBZGlkYXNGcm9udFBhZ2VDb2xsZWN0aW9uOiAoKSA9PiBkaXNwYXRjaChnZXRBZGlkYXNGcm9udFBhZ2VDb2xsZWN0aW9uKCkpLFxuICBnZXRBZGlkYXNDb2xsZWN0aW9uOiAoKSA9PiBkaXNwYXRjaChnZXRBZGlkYXNDb2xsZWN0aW9uKCkpLFxuICBnZXRZZWV6eUZyb250UGFnZUNvbGxlY3Rpb246ICgpID0+IGRpc3BhdGNoKGdldFllZXp5RnJvbnRQYWdlQ29sbGVjdGlvbigpKSxcbiAgZ2V0WWVlenlDb2xsZWN0aW9uOiAoKSA9PiBkaXNwYXRjaChnZXRZZWV6eUNvbGxlY3Rpb24oKSksXG4gIGdldFNic0Zyb250UGFnZUNvbGxlY3Rpb246ICgpID0+IGRpc3BhdGNoKGdldFNic0Zyb250UGFnZUNvbGxlY3Rpb24oKSksXG4gIGdldFNic0NvbGxlY3Rpb246ICgpID0+IGRpc3BhdGNoKGdldFNic0NvbGxlY3Rpb24oKSksXG4gIGdldEpvcmRhbkZyb250UGFnZUNvbGxlY3Rpb246ICgpID0+IGRpc3BhdGNoKGdldEpvcmRhbkZyb250UGFnZUNvbGxlY3Rpb24oKSksXG4gIGdldEpvcmRhbkNvbGxlY3Rpb246ICgpID0+IGRpc3BhdGNoKGdldEpvcmRhbkNvbGxlY3Rpb24oKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BsYXNoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=