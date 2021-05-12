(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_cart_cart_container_js"],{

/***/ "./frontend/components/cart/cart.js":
/*!******************************************!*
  !*** ./frontend/components/cart/cart.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _cart_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart_items */ "./frontend/components/cart/cart_items.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
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






var Cart = /*#__PURE__*/function (_Component) {
  _inherits(Cart, _Component);

  var _super = _createSuper(Cart);

  function Cart(props) {
    var _this;

    _classCallCheck(this, Cart);

    _this = _super.call(this, props); // this.state = {
    //   subTotal: 0,
    // };

    _this.emptyCart = _this.emptyCart.bind(_assertThisInitialized(_this));
    _this.oneItem = _this.oneItem.bind(_assertThisInitialized(_this));
    _this.multipleItems = _this.multipleItems.bind(_assertThisInitialized(_this));
    _this.calcSubTotal = _this.calcSubTotal.bind(_assertThisInitialized(_this));
    _this.grandTotal = _this.grandTotal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.currentUser !== null) {
        this.props.getUserCart();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.cart.length === this.props.cart.length) {
        this.emptyCart();
      }
    }
  }, {
    key: "emptyCart",
    value: function emptyCart() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-shoe-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Cart is empty"));
    }
  }, {
    key: "oneItem",
    value: function oneItem() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-shoe-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductPane-shoe-wrapper"
      }, "This is a picture for now"));
    }
  }, {
    key: "multipleItems",
    value: function multipleItems() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-cart-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cart_items__WEBPACK_IMPORTED_MODULE_1__.default, {
        cartItems: this.props.cart,
        removeItem: this.props.removeItem
      }));
    }
  }, {
    key: "calcSubTotal",
    value: function calcSubTotal() {
      var cart = this.props.cart;
      var subTotal = Object.values(cart).reduce(function (subTotal, _ref) {
        var price = _ref.price;
        return subTotal + price;
      }, 0);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, "$", subTotal);
    }
  }, {
    key: "grandTotal",
    value: function grandTotal() {
      var cart = this.props.cart;
      var subTotal = Object.values(cart).reduce(function (subTotal, _ref2) {
        var price = _ref2.price;
        return subTotal + price;
      }, 0);
      var grandTotal = subTotal + subTotal * 0.12;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-value"
      }, "$", grandTotal);
    }
  }, {
    key: "render",
    value: function render() {
      var cart = this.props.cart;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductContainer"
      }, cart.length < 1 ? this.emptyCart() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-left-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "cart-right-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "cart-right-header"
      }, "Shopping Cart")), cart.length === 1 ? this.oneItem() : this.multipleItems()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductPane-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "cart-right-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "cart-right-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "cart-right-header"
      }, "Order Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "cart-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "Ship To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, "1234 Tester St., San Francisco, CA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-credit-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiVisaLine, {
        size: 27
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "credit-card-value"
      }, "Ending in 8237"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "SubTotal"), this.calcSubTotal()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, "0.12%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "Grand Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, this.grandTotal()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-btns-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://www.linkedin.com/in/cameron-tanjoco-8ba612a3/",
        className: "checkout-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "checkout-add-cart-cont-btn"
      }, "LinkedIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://github.com/HiThereImCam",
        className: "checkout-link-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "checkout-add-cart-btn"
      }, "Github"))))));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./frontend/components/cart/cart_container.js":
/*!****************************************************!*
  !*** ./frontend/components/cart/cart_container.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ "./frontend/components/cart/cart.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/cart_actions */ "./frontend/actions/cart_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.id,
    cart: state.entities.cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getUserCart: function getUserCart() {
      return dispatch((0,_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__.getUserCart)());
    },
    removeItem: function removeItem(itemId) {
      return dispatch((0,_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__.removeItem)(itemId));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_cart__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./frontend/components/cart/cart_items.js":
/*!************************************************!*
  !*** ./frontend/components/cart/cart_items.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CartItems = function CartItems(props) {
  var cartItems = props.cartItems,
      removeItem = props.removeItem; // need to pass delete item in here

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cart-items-container"
  }, Object.entries(cartItems).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        itemKey = _ref2[0],
        item = _ref2[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "cart-items",
      key: itemKey
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "cart-img-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: item.photoUrl
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "cart-product-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "cart-product"
    }, item.sneakerName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "cart-product-price-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "cart-price"
    }, "$", item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "cart-product-size-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Size: ", item.size)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "cart-product-remove"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoMdClose, {
      className: "cart-remove-btn",
      size: 18,
      onClick: function onClick() {
        return removeItem(item.id);
      }
    })));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItems);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC9jYXJ0LmpzIiwid2VicGFjazovL1NuZWFrZXJ6Ly4vZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0L2NhcnRfY29udGFpbmVyLmpzIiwid2VicGFjazovL1NuZWFrZXJ6Ly4vZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0L2NhcnRfaXRlbXMuanMiXSwibmFtZXMiOlsiQ2FydCIsInByb3BzIiwiZW1wdHlDYXJ0IiwiYmluZCIsIm9uZUl0ZW0iLCJtdWx0aXBsZUl0ZW1zIiwiY2FsY1N1YlRvdGFsIiwiZ3JhbmRUb3RhbCIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlckNhcnQiLCJwcmV2UHJvcHMiLCJjYXJ0IiwibGVuZ3RoIiwicmVtb3ZlSXRlbSIsInN1YlRvdGFsIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwicHJpY2UiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInNlc3Npb24iLCJpZCIsImVudGl0aWVzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpdGVtSWQiLCJjb25uZWN0IiwiQ2FydEl0ZW1zIiwiY2FydEl0ZW1zIiwiZW50cmllcyIsIm1hcCIsIml0ZW1LZXkiLCJpdGVtIiwicGhvdG9VcmwiLCJzbmVha2VyTmFtZSIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FHakI7QUFDQTtBQUNBOztBQUVBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLCtCQUFqQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsK0JBQWY7QUFDQSxVQUFLRSxhQUFM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QUFNLGVBQVMsRUFBQztBQUFoQixPQUFnQ0QsSUFBSSxDQUFDRSxXQUFyQyxDQURGLENBSkYsZUFPRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFO0FBQU0sZUFBUyxFQUFDO0FBQWhCLFlBQStCRixJQUFJLENBQUNoQixLQUFwQyxDQURGLENBUEYsZUFVRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLHlFQUFhZ0IsSUFBSSxDQUFDRyxJQUFsQixDQURGLENBVkYsZUFhRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLGlEQUFDLHFEQUFEO0FBQ0UsZUFBUyxFQUFDLGlCQURaO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNeEIsVUFBVSxDQUFDcUIsSUFBSSxDQUFDWCxFQUFOLENBQWhCO0FBQUE7QUFIWCxNQURGLENBYkYsQ0FERjtBQXVCRCxHQXhCQSxDQURILENBREY7QUE2QkQsQ0FqQ0Q7O0FBbUNBLGlFQUFlTSxTQUFmLEUiLCJmaWxlIjoiZnJvbnRlbmRfY29tcG9uZW50c19jYXJ0X2NhcnRfY29udGFpbmVyX2pzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0SXRlbXMgZnJvbSBcIi4vY2FydF9pdGVtc1wiO1xuaW1wb3J0IHsgUmlWaXNhTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgIC8vICAgc3ViVG90YWw6IDAsXG4gICAgLy8gfTtcblxuICAgIHRoaXMuZW1wdHlDYXJ0ID0gdGhpcy5lbXB0eUNhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uZUl0ZW0gPSB0aGlzLm9uZUl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm11bHRpcGxlSXRlbXMgPSB0aGlzLm11bHRpcGxlSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbGNTdWJUb3RhbCA9IHRoaXMuY2FsY1N1YlRvdGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ncmFuZFRvdGFsID0gdGhpcy5ncmFuZFRvdGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50VXNlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyQ2FydCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmNhcnQubGVuZ3RoID09PSB0aGlzLnByb3BzLmNhcnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtcHR5Q2FydCgpO1xuICAgIH1cbiAgfVxuXG4gIGVtcHR5Q2FydCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvUGFuZS1zaG9lLXdyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4+Q2FydCBpcyBlbXB0eTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvbmVJdGVtKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9QYW5lLXNob2Utd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYW5lLXNob2Utd3JhcHBlclwiPlxuICAgICAgICAgIFRoaXMgaXMgYSBwaWN0dXJlIGZvciBub3dcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgbXVsdGlwbGVJdGVtcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvUGFuZS1jYXJ0LXdyYXBwZXJcIj5cbiAgICAgICAgPENhcnRJdGVtc1xuICAgICAgICAgIGNhcnRJdGVtcz17dGhpcy5wcm9wcy5jYXJ0fVxuICAgICAgICAgIHJlbW92ZUl0ZW09e3RoaXMucHJvcHMucmVtb3ZlSXRlbX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjYWxjU3ViVG90YWwoKSB7XG4gICAgbGV0IHsgY2FydCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdWJUb3RhbCA9IE9iamVjdC52YWx1ZXMoY2FydCkucmVkdWNlKFxuICAgICAgKHN1YlRvdGFsLCB7IHByaWNlIH0pID0+IHN1YlRvdGFsICsgcHJpY2UsXG4gICAgICAwXG4gICAgKTtcblxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJjaGVja291dC12YWx1ZVwiPiR7c3ViVG90YWx9PC9zcGFuPjtcbiAgfVxuXG4gIGdyYW5kVG90YWwoKSB7XG4gICAgbGV0IHsgY2FydCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdWJUb3RhbCA9IE9iamVjdC52YWx1ZXMoY2FydCkucmVkdWNlKFxuICAgICAgKHN1YlRvdGFsLCB7IHByaWNlIH0pID0+IHN1YlRvdGFsICsgcHJpY2UsXG4gICAgICAwXG4gICAgKTtcblxuICAgIGxldCBncmFuZFRvdGFsID0gc3ViVG90YWwgKyBzdWJUb3RhbCAqIDAuMTI7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtdmFsdWVcIj4ke2dyYW5kVG90YWx9PC9kaXY+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNhcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdENvbnRhaW5lclwiPlxuICAgICAgICB7Y2FydC5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIHRoaXMuZW1wdHlDYXJ0KClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Db250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1BhbmUtbGVmdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1yaWdodC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcnQtcmlnaHQtaGVhZGVyXCI+U2hvcHBpbmcgQ2FydDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Y2FydC5sZW5ndGggPT09IDEgPyB0aGlzLm9uZUl0ZW0oKSA6IHRoaXMubXVsdGlwbGVJdGVtcygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYW5lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9QYW5lLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJpZ2h0LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcnQtcmlnaHQtaGVhZGVyXCI+T3JkZXIgRGV0YWlsczwvaDE+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LW5hbWVcIj5TaGlwIFRvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAxMjM0IFRlc3RlciBTdC4sIFNhbiBGcmFuY2lzY28sIENBXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LW5hbWVcIj5QYXltZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtY3JlZGl0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaVZpc2FMaW5lIHNpemU9ezI3fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkaXQtY2FyZC12YWx1ZVwiPkVuZGluZyBpbiA4MjM3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tvdXQtbmFtZVwiPlN1YlRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNhbGNTdWJUb3RhbCgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LW5hbWVcIj5UYXg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tvdXQtdmFsdWVcIj4wLjEyJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja291dC1uYW1lXCI+R3JhbmQgVG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tvdXQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdyYW5kVG90YWwoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWJ0bnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2FtZXJvbi10YW5qb2NvLThiYTYxMmEzL1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja291dC1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoZWNrb3V0LWFkZC1jYXJ0LWNvbnQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIExpbmtlZEluXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSGlUaGVyZUltQ2FtXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0LWxpbmstcmlnaHRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYWRkLWNhcnQtYnRuXCI+R2l0aHViPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4vY2FydFwiO1xuaW1wb3J0IHsgZ2V0VXNlckNhcnQsIHJlbW92ZUl0ZW0gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXJ0X2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBjdXJyZW50VXNlcjogc3RhdGUuc2Vzc2lvbi5pZCxcbiAgY2FydDogc3RhdGUuZW50aXRpZXMuY2FydCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGdldFVzZXJDYXJ0OiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyQ2FydCgpKSxcbiAgcmVtb3ZlSXRlbTogKGl0ZW1JZCkgPT4gZGlzcGF0Y2gocmVtb3ZlSXRlbShpdGVtSWQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9NZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cbmNvbnN0IENhcnRJdGVtcyA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjYXJ0SXRlbXMsIHJlbW92ZUl0ZW0gfSA9IHByb3BzO1xuXG4gIC8vIG5lZWQgdG8gcGFzcyBkZWxldGUgaXRlbSBpbiBoZXJlXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAge09iamVjdC5lbnRyaWVzKGNhcnRJdGVtcykubWFwKChbaXRlbUtleSwgaXRlbV0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbXNcIiBrZXk9e2l0ZW1LZXl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBob3RvVXJsfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtcHJvZHVjdFwiPntpdGVtLnNuZWFrZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtcHJpY2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByaWNlXCI+JHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3Qtc2l6ZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlNpemU6IHtpdGVtLnNpemV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcHJvZHVjdC1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgPElvTWRDbG9zZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnQtcmVtb3ZlLWJ0blwiXG4gICAgICAgICAgICAgICAgc2l6ZT17MTh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbXM7XG4iXSwic291cmNlUm9vdCI6IiJ9