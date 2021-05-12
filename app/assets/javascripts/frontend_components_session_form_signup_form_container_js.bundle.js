(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_session_form_signup_form_container_js"],{

/***/ "./frontend/components/session_form/signup_form.jsx":
/*!**********************************************************!*
  !*** ./frontend/components/session_form/signup_form.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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




var SignUp = /*#__PURE__*/function (_Component) {
  _inherits(SignUp, _Component);

  var _super = _createSuper(SignUp);

  function SignUp(props) {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _super.call(this, props);
    _this.state = {
      username: "",
      email: "",
      password: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignUp, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.removeErrors();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.signup(user);
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          username = _this$state.username;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "BigHeroContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-shoe"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: window.images.banned1s,
        alt: "1994_Banned_1s",
        className: "shoeIMG"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Sign Up"), this.renderErrors()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "HeroPane-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-login-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "login-labels"
      }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "username",
        value: username,
        onChange: this.handleInputChange,
        className: "login-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
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
        className: "btn-signup"
      }, "Sign Up"))))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./frontend/components/session_form/signup_form_container.js":
/*!*******************************************************************!*
  !*** ./frontend/components/session_form/signup_form_container.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup_form */ "./frontend/components/session_form/signup_form.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors.session
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.signup)(user));
    },
    removeErrors: function removeErrors() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.removeErrors)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_signup_form__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc2Vzc2lvbl9mb3JtL3NpZ251cF9mb3JtLmpzeCIsIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc2Vzc2lvbl9mb3JtL3NpZ251cF9mb3JtX2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwicmVtb3ZlRXJyb3JzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsIk9iamVjdCIsImFzc2lnbiIsInNpZ251cCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZXJyb3JzIiwibWFwIiwiZXJyb3IiLCJpIiwid2luZG93IiwiaW1hZ2VzIiwiYmFubmVkMXMiLCJyZW5kZXJFcnJvcnMiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzZXNzaW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0IiwiU2lnbnVwRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxFQURDO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hDLGNBQVEsRUFBRTtBQUhDLEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QiwrQkFBekI7QUFWaUI7QUFXbEI7Ozs7MkNBRXNCO0FBQ3JCLFdBQUtOLEtBQUwsQ0FBV1EsWUFBWDtBQUNEOzs7aUNBRVlDLEMsRUFBRztBQUNkQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1osS0FBdkIsQ0FBYjtBQUNBLFdBQUtELEtBQUwsQ0FBV2MsTUFBWCxDQUFrQkgsSUFBbEI7QUFDRDs7O3NDQUVpQkYsQyxFQUFHO0FBQUEsc0JBQ0tBLENBQUMsQ0FBQ00sTUFEUDtBQUFBLFVBQ1hDLElBRFcsYUFDWEEsSUFEVztBQUFBLFVBQ0xDLEtBREssYUFDTEEsS0FESztBQUVuQixXQUFLQyxRQUFMLHFCQUNHRixJQURILEVBQ1VDLEtBRFY7QUFHRDs7O21DQUVjO0FBQUEsVUFDUEUsTUFETyxHQUNJLEtBQUtuQixLQURULENBQ1BtQixNQURPO0FBR2IsMEJBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsNEJBQ1Y7QUFBSSxhQUFHLGtCQUFXQSxDQUFYO0FBQVAsV0FBd0JELEtBQXhCLENBRFU7QUFBQSxPQUFYLENBREgsQ0FERjtBQU9EOzs7NkJBRVE7QUFBQSx3QkFDNkIsS0FBS3BCLEtBRGxDO0FBQUEsVUFDREUsS0FEQyxlQUNEQSxLQURDO0FBQUEsVUFDTUMsUUFETixlQUNNQSxRQUROO0FBQUEsVUFDZ0JGLFFBRGhCLGVBQ2dCQSxRQURoQjtBQUVQLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQ0UsV0FBRyxFQUFFcUIsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFFBRHJCO0FBRUUsV0FBRyxFQUFDLGdCQUZOO0FBR0UsaUJBQVMsRUFBQztBQUhaLFFBREYsQ0FERixlQVFFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLHVFQURGLEVBRUcsS0FBS0MsWUFBTCxFQUZILENBREYsZUFLRTtBQUFNLGdCQUFRLEVBQUUsS0FBS3JCLFlBQXJCO0FBQW1DLGlCQUFTLEVBQUM7QUFBN0Msc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLG9CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsYUFBSyxFQUFFSCxRQUhUO0FBSUUsZ0JBQVEsRUFBRSxLQUFLSyxpQkFKakI7QUFLRSxpQkFBUyxFQUFDO0FBTFosUUFGRixlQVNFO0FBQU8saUJBQVMsRUFBQztBQUFqQixpQkFURixlQVVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGFBQUssRUFBRUosS0FIVDtBQUlFLGdCQUFRLEVBQUUsS0FBS0ksaUJBSmpCO0FBS0UsaUJBQVMsRUFBQztBQUxaLFFBVkYsZUFrQkU7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLG9CQWxCRixlQW1CRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxhQUFLLEVBQUVILFFBSFQ7QUFJRSxnQkFBUSxFQUFFLEtBQUtHLGlCQUpqQjtBQUtFLGlCQUFTLEVBQUM7QUFMWixRQW5CRixDQURGLGVBNkJFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQVEsaUJBQVMsRUFBQztBQUFsQixtQkFERixDQTdCRixDQUxGLENBUkYsQ0FERixDQURGO0FBb0REOzs7O0VBakdrQm9CLDRDOztBQW9HckIsaUVBQWU1QixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTTZCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzNCLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDa0IsVUFBTSxFQUFFbEIsS0FBSyxDQUFDa0IsTUFBTixDQUFhVTtBQURhLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDakIsVUFBTSxFQUFFLGdCQUFDSCxJQUFEO0FBQUEsYUFBVW9CLFFBQVEsQ0FBQ2pCLGdFQUFNLENBQUNILElBQUQsQ0FBUCxDQUFsQjtBQUFBLEtBRGdDO0FBRXhDSCxnQkFBWSxFQUFFO0FBQUEsYUFBTXVCLFFBQVEsQ0FBQ3ZCLHNFQUFZLEVBQWIsQ0FBZDtBQUFBO0FBRjBCLEdBQWY7QUFBQSxDQUEzQjs7QUFLQSxpRUFBZXdCLG9EQUFPLENBQUNKLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDRyxpREFBN0MsQ0FBZixFIiwiZmlsZSI6ImZyb250ZW5kX2NvbXBvbmVudHNfc2Vzc2lvbl9mb3JtX3NpZ251cF9mb3JtX2NvbnRhaW5lcl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNsYXNzIFNpZ25VcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZUVycm9ycygpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucHJvcHMuc2lnbnVwKHVzZXIpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckVycm9ycygpIHtcbiAgICBsZXQgeyBlcnJvcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cIkhlcm9QYW5lLXNlc3Npb24tZXJyb3JzXCI+XG4gICAgICAgIHtlcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2BlcnJvci0ke2l9YH0+e2Vycm9yfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmlnSGVyb0NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Db250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9QYW5lLXNob2VcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt3aW5kb3cuaW1hZ2VzLmJhbm5lZDFzfVxuICAgICAgICAgICAgICBhbHQ9XCIxOTk0X0Jhbm5lZF8xc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob2VJTUdcIlxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1BhbmUtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1BhbmUtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDE+U2lnbiBVcDwvaDE+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9ycygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIkhlcm9QYW5lLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvUGFuZS1sb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxvZ2luLWxhYmVsc1wiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsb2dpbi1sYWJlbHNcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsb2dpbi1sYWJlbHNcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4taW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zaWdudXBcIj5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuIiwiaW1wb3J0IHsgc2lnbnVwLCByZW1vdmVFcnJvcnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9zZXNzaW9uX2FjdGlvbnNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTaWdudXBGb3JtIGZyb20gXCIuL3NpZ251cF9mb3JtXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZXJyb3JzOiBzdGF0ZS5lcnJvcnMuc2Vzc2lvbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNpZ251cDogKHVzZXIpID0+IGRpc3BhdGNoKHNpZ251cCh1c2VyKSksXG4gIHJlbW92ZUVycm9yczogKCkgPT4gZGlzcGF0Y2gocmVtb3ZlRXJyb3JzKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ251cEZvcm0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==