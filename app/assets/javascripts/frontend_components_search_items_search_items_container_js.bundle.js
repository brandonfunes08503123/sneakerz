(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_search_items_search_items_container_js"],{

/***/ "./frontend/components/search_items/search_items.js":
/*!**********************************************************!*
  !*** ./frontend/components/search_items/search_items.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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



var SearchItems = /*#__PURE__*/function (_Component) {
  _inherits(SearchItems, _Component);

  var _super = _createSuper(SearchItems);

  function SearchItems(props) {
    var _this;

    _classCallCheck(this, SearchItems);

    _this = _super.call(this, props);
    _this.noResult = _this.noResult.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchItems, [{
    key: "noResult",
    value: function noResult() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "noResult-container"
      }, "No result. Please try again.");
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.items;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, items.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "items-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "item-list"
      }, items.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: i,
          className: "item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$", item.price));
      })))) : this.noResult());
    }
  }]);

  return SearchItems;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchItems);

/***/ }),

/***/ "./frontend/components/search_items/search_items_container.js":
/*!********************************************************************!*
  !*** ./frontend/components/search_items/search_items_container.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _search_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_items */ "./frontend/components/search_items/search_items.js");



var mapStateToProps = function mapStateToProps(state, ownProps) {
  var params = new URLSearchParams(ownProps.location.search);
  var value = params.get("query");
  var items = [];
  Object.values(state.entities.sneakers).map(function (sneaker) {
    if (sneaker.name.toLowerCase().includes(value.toLowerCase())) {
      items.push(sneaker);
    }
  });
  return {
    items: items
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, null)(_search_items__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc2VhcmNoX2l0ZW1zL3NlYXJjaF9pdGVtcy5qcyIsIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvc2VhcmNoX2l0ZW1zL3NlYXJjaF9pdGVtc19jb250YWluZXIuanMiXSwibmFtZXMiOlsiU2VhcmNoSXRlbXMiLCJwcm9wcyIsIm5vUmVzdWx0IiwiYmluZCIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImkiLCJuYW1lIiwicHJpY2UiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJ2YWx1ZSIsImdldCIsIk9iamVjdCIsInZhbHVlcyIsImVudGl0aWVzIiwic25lYWtlcnMiLCJzbmVha2VyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInB1c2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUZpQjtBQUdsQjs7OzsrQkFFVTtBQUNULDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHdDQURGO0FBR0Q7Ozs2QkFFUTtBQUFBLFVBQ0RDLEtBREMsR0FDUyxLQUFLSCxLQURkLENBQ0RHLEtBREM7QUFHUCwwQkFDRSw4REFDR0EsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBZixnQkFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN0Qiw0QkFDRTtBQUFJLGFBQUcsRUFBRUEsQ0FBVDtBQUFZLG1CQUFTLEVBQUM7QUFBdEIsd0JBQ0UsNkRBQUtELElBQUksQ0FBQ0UsSUFBVixDQURGLGVBRUUsaUVBQUtGLElBQUksQ0FBQ0csS0FBVixDQUZGLENBREY7QUFNRCxPQVBBLENBREgsQ0FERixDQURGLENBREQsR0FnQkMsS0FBS1IsUUFBTCxFQWpCSixDQURGO0FBc0JEOzs7O0VBckN1QlMsNEM7O0FBd0MxQixpRUFBZVgsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOztBQUVBLElBQU1ZLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzNDLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxlQUFKLENBQW9CRixRQUFRLENBQUNHLFFBQVQsQ0FBa0JDLE1BQXRDLENBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLE9BQVgsQ0FBWjtBQUNBLE1BQUloQixLQUFLLEdBQUcsRUFBWjtBQUVBaUIsUUFBTSxDQUFDQyxNQUFQLENBQWNULEtBQUssQ0FBQ1UsUUFBTixDQUFlQyxRQUE3QixFQUF1Q2xCLEdBQXZDLENBQTJDLFVBQUNtQixPQUFELEVBQWE7QUFDdEQsUUFBSUEsT0FBTyxDQUFDaEIsSUFBUixDQUFhaUIsV0FBYixHQUEyQkMsUUFBM0IsQ0FBb0NSLEtBQUssQ0FBQ08sV0FBTixFQUFwQyxDQUFKLEVBQThEO0FBQzVEdEIsV0FBSyxDQUFDd0IsSUFBTixDQUFXSCxPQUFYO0FBQ0Q7QUFDRixHQUpEO0FBTUEsU0FBTztBQUNMckIsU0FBSyxFQUFMQTtBQURLLEdBQVA7QUFHRCxDQWREOztBQWdCQSxpRUFBZXlCLG9EQUFPLENBQUNqQixlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JaLGtEQUEvQixDQUFmLEUiLCJmaWxlIjoiZnJvbnRlbmRfY29tcG9uZW50c19zZWFyY2hfaXRlbXNfc2VhcmNoX2l0ZW1zX2NvbnRhaW5lcl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFNlYXJjaEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMubm9SZXN1bHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5vUmVzdWx0KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vUmVzdWx0LWNvbnRhaW5lclwiPk5vIHJlc3VsdC4gUGxlYXNlIHRyeSBhZ2Fpbi48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtpdGVtcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0ucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMubm9SZXN1bHQoKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJdGVtcztcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTZWFyY2hJdGVtcyBmcm9tIFwiLi9zZWFyY2hfaXRlbXNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG93blByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XG4gIGxldCB2YWx1ZSA9IHBhcmFtcy5nZXQoXCJxdWVyeVwiKTtcbiAgbGV0IGl0ZW1zID0gW107XG5cbiAgT2JqZWN0LnZhbHVlcyhzdGF0ZS5lbnRpdGllcy5zbmVha2VycykubWFwKChzbmVha2VyKSA9PiB7XG4gICAgaWYgKHNuZWFrZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBpdGVtcy5wdXNoKHNuZWFrZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShTZWFyY2hJdGVtcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9