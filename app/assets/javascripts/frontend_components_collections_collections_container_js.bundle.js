(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_collections_collections_container_js"],{

/***/ "./frontend/components/collections/collections.js":
/*!********************************************************!*
  !*** ./frontend/components/collections/collections.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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




var Collections = /*#__PURE__*/function (_Component) {
  _inherits(Collections, _Component);

  var _super = _createSuper(Collections);

  function Collections(props) {
    _classCallCheck(this, Collections);

    return _super.call(this, props);
  }

  _createClass(Collections, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var sneakers = this.props.sneakers;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "collections-container"
      }, sneakers.length < 1 ? " " : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "collections-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "collections-header"
      }, sneakers[0].brand)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "collections-grid-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "collections-grid"
      }, sneakers.map(function (sneaker, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "/sneaker/".concat(sneaker.sku),
          className: "collections-item",
          key: idx
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "collections-img-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
          src: sneaker.photoUrl,
          alt: sneaker.name
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "collections-name-container"
        }, sneaker.name));
      })))));
    }
  }]);

  return Collections;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collections);

/***/ }),

/***/ "./frontend/components/collections/collections_container.js":
/*!******************************************************************!*
  !*** ./frontend/components/collections/collections_container.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collections */ "./frontend/components/collections/collections.js");



var mapStateToProps = function mapStateToProps(state) {
  return {
    sneakers: state.entities.collections
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {// this would dispatch props to sort sneakers by size
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_collections__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vU25lYWtlcnovLi9mcm9udGVuZC9jb21wb25lbnRzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zX2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDb2xsZWN0aW9ucyIsInByb3BzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzbmVha2VycyIsImxlbmd0aCIsImJyYW5kIiwibWFwIiwic25lYWtlciIsImlkeCIsInNrdSIsInBob3RvVXJsIiwibmFtZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZW50aXRpZXMiLCJjb2xsZWN0aW9ucyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7Ozt3Q0FFbUI7QUFDbEJDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNEOzs7NkJBRVE7QUFBQSxVQUNEQyxRQURDLEdBQ1ksS0FBS0gsS0FEakIsQ0FDREcsUUFEQztBQUdQLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0dBLFFBQVEsQ0FBQ0MsTUFBVCxHQUFrQixDQUFsQixHQUNDLEdBREQsZ0JBR0MsaURBQUMsMkNBQUQscUJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBb0NELFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUUsS0FBaEQsQ0FERixDQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDR0YsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzlCLDRCQUNFLGlEQUFDLGtEQUFEO0FBQ0UsWUFBRSxxQkFBY0QsT0FBTyxDQUFDRSxHQUF0QixDQURKO0FBRUUsbUJBQVMsRUFBQyxrQkFGWjtBQUdFLGFBQUcsRUFBRUQ7QUFIUCx3QkFLRTtBQUFLLG1CQUFTLEVBQUM7QUFBZix3QkFDRTtBQUFLLGFBQUcsRUFBRUQsT0FBTyxDQUFDRyxRQUFsQjtBQUE0QixhQUFHLEVBQUVILE9BQU8sQ0FBQ0k7QUFBekMsVUFERixDQUxGLGVBUUU7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDR0osT0FBTyxDQUFDSSxJQURYLENBUkYsQ0FERjtBQWNELE9BZkEsQ0FESCxDQURGLENBSkYsQ0FKSixDQURGO0FBaUNEOzs7O0VBN0N1QkMsNEM7O0FBZ0QxQixpRUFBZWIsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBOztBQUVBLElBQU1jLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENYLFlBQVEsRUFBRVcsS0FBSyxDQUFDQyxRQUFOLENBQWVDO0FBRFMsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWUsQ0FDeEM7QUFEd0MsR0FBZjtBQUFBLENBQTNCOztBQUlBLGlFQUFlQyxvREFBTyxDQUFDTixlQUFELEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2Q2xCLGlEQUE3QyxDQUFmLEUiLCJmaWxlIjoiZnJvbnRlbmRfY29tcG9uZW50c19jb2xsZWN0aW9uc19jb2xsZWN0aW9uc19jb250YWluZXJfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jbGFzcyBDb2xsZWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHNuZWFrZXJzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIHtzbmVha2Vycy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIFwiIFwiXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9ucy1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2xsZWN0aW9ucy1oZWFkZXJcIj57c25lYWtlcnNbMF0uYnJhbmR9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9ucy1ncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zLWdyaWRcIj5cbiAgICAgICAgICAgICAgICB7c25lYWtlcnMubWFwKChzbmVha2VyLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgdG89e2Avc25lYWtlci8ke3NuZWFrZXIuc2t1fWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGVjdGlvbnMtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzbmVha2VyLnBob3RvVXJsfSBhbHQ9e3NuZWFrZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25zLW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c25lYWtlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25zO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL2NvbGxlY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgc25lYWtlcnM6IHN0YXRlLmVudGl0aWVzLmNvbGxlY3Rpb25zLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgLy8gdGhpcyB3b3VsZCBkaXNwYXRjaCBwcm9wcyB0byBzb3J0IHNuZWFrZXJzIGJ5IHNpemVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb2xsZWN0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9