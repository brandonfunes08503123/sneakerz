(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_session_form_login_form_container_js"],{

/***/ "./frontend/components/session_form/login_form.jsx":
/*!*********************************************************!*
  !*** ./frontend/components/session_form/login_form.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var LoginForm = /*#__PURE__*/function (_Component) {
  _inherits(LoginForm, _Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);
    _this.state = {
      email: "",
      password: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.removeErrors();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.login(user);
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var errors = this.props.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "HeroPane-session-errors"
      }, errors.map(function (error, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: "error-".concat(i)
        }, error);
      }));
    }
  }, {
    key: "demoUser",
    value: function demoUser() {
      this.setState({
        email: "demo@example.com",
        password: "password"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "BigHeroContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-shoe"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: window.images.banned1s,
        alt: "1994_Banned_1s"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
        className: "HeroPane-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You need to be logged in to continue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/signup"
      }, "Sign Up")), this.renderErrors()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "HeroPane-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-login-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "login-labels"
      }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "email",
        value: email,
        onChange: this.handleInputChange,
        className: "login-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "login-labels"
      }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "password",
        name: "password",
        value: password,
        onChange: this.handleInputChange,
        className: "login-input"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "btns-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "btn-login"
      }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "btn-demo",
        onClick: function onClick() {
          return _this2.demoUser();
        }
      }, "Demo User"))))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./frontend/components/session_form/login_form_container.js":
/*!******************************************************************!*
  !*** ./frontend/components/session_form/login_form_container.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_form */ "./frontend/components/session_form/login_form.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors.session
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.login)(user));
    },
    removeErrors: function removeErrors() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.removeErrors)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_login_form__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc2Vzc2lvbl9mb3JtL2xvZ2luX2Zvcm0uanN4Iiwid2VicGFjazovL1NuZWFrZXJ6Ly4vZnJvbnRlbmQvY29tcG9uZW50cy9zZXNzaW9uX2Zvcm0vbG9naW5fZm9ybV9jb250YWluZXIuanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJyZW1vdmVFcnJvcnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwiT2JqZWN0IiwiYXNzaWduIiwibG9naW4iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsImVycm9ycyIsIm1hcCIsImVycm9yIiwiaSIsIndpbmRvdyIsImltYWdlcyIsImJhbm5lZDFzIiwicmVuZGVyRXJyb3JzIiwiZGVtb1VzZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzZXNzaW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRSxFQURJO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBQWI7QUFLQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QiwrQkFBekI7QUFUaUI7QUFVbEI7Ozs7MkNBRXNCO0FBQ3JCLFdBQUtMLEtBQUwsQ0FBV08sWUFBWDtBQUNE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O0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q2xCLFNBQUssRUFBRSxlQUFDSCxJQUFEO0FBQUEsYUFBVXFCLFFBQVEsQ0FBQ2xCLCtEQUFLLENBQUNILElBQUQsQ0FBTixDQUFsQjtBQUFBLEtBRGlDO0FBRXhDSCxnQkFBWSxFQUFFO0FBQUEsYUFBTXdCLFFBQVEsQ0FBQ3hCLHNFQUFZLEVBQWIsQ0FBZDtBQUFBO0FBRjBCLEdBQWY7QUFBQSxDQUEzQjs7QUFLQSxpRUFBZXlCLG9EQUFPLENBQUNKLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDL0IsZ0RBQTdDLENBQWYsRSIsImZpbGUiOiJmcm9udGVuZF9jb21wb25lbnRzX3Nlc3Npb25fZm9ybV9sb2dpbl9mb3JtX2NvbnRhaW5lcl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZUVycm9ycygpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucHJvcHMubG9naW4odXNlcik7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRXJyb3JzKCkge1xuICAgIGxldCB7IGVycm9ycyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiSGVyb1BhbmUtc2Vzc2lvbi1lcnJvcnNcIj5cbiAgICAgICAge2Vycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YGVycm9yLSR7aX1gfT57ZXJyb3J9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cblxuICBkZW1vVXNlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBcImRlbW9AZXhhbXBsZS5jb21cIixcbiAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJpZ0hlcm9Db250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvUGFuZS1zaG9lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17d2luZG93LmltYWdlcy5iYW5uZWQxc30gYWx0PVwiMTk5NF9CYW5uZWRfMXNcIj48L2ltZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9QYW5lLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9QYW5lLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZXJvUGFuZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5Zb3UgbmVlZCB0byBiZSBsb2dnZWQgaW4gdG8gY29udGludWU8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+U2lnbiBVcDwvTGluaz5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9ycygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIkhlcm9QYW5lLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvUGFuZS1sb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxvZ2luLWxhYmVsc1wiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxvZ2luLWxhYmVsc1wiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1sb2dpblwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZGVtb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVtb1VzZXIoKX0+XG4gICAgICAgICAgICAgICAgICBEZW1vIFVzZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iLCJpbXBvcnQgeyBsb2dpbiwgcmVtb3ZlRXJyb3JzIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvc2Vzc2lvbl9hY3Rpb25zXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL2xvZ2luX2Zvcm1cIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBlcnJvcnM6IHN0YXRlLmVycm9ycy5zZXNzaW9uLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgbG9naW46ICh1c2VyKSA9PiBkaXNwYXRjaChsb2dpbih1c2VyKSksXG4gIHJlbW92ZUVycm9yczogKCkgPT4gZGlzcGF0Y2gocmVtb3ZlRXJyb3JzKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luRm9ybSk7XG4iXSwic291cmNlUm9vdCI6IiJ9