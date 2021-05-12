(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_sneakers_sneaker_container_js"],{

/***/ "./frontend/components/inventory/inventory.js":
/*!****************************************************!*
  !*** ./frontend/components/inventory/inventory.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _inventory_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory_items */ "./frontend/components/inventory/inventory_items.js");
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




 // this creates a list of sizes and prices of a specific shoe

var Inventory = /*#__PURE__*/function (_Component) {
  _inherits(Inventory, _Component);

  var _super = _createSuper(Inventory);

  function Inventory(props) {
    _classCallCheck(this, Inventory);

    return _super.call(this, props);
  }

  _createClass(Inventory, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inventory = _this$props.inventory,
          closeInventory = _this$props.closeInventory,
          skuID = _this$props.skuID,
          closeProductPanel = _this$props.closeProductPanel,
          setSelectedSneaker = _this$props.setSelectedSneaker;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductList-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoMdClose, {
        size: 25,
        className: "ProductSelect-closeOut",
        onClick: function onClick() {
          return closeInventory();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductList-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Buy New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "US Men Sizes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductList-items"
      }, inventory.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          to: "/sneaker/".concat(skuID, "/pre-checkout-review"),
          className: "ProductList-link-wrapper",
          key: "inventory_link_".concat(item.id),
          onClick: function onClick() {
            closeInventory();
            closeProductPanel();
            setSelectedSneaker(item);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inventory_items__WEBPACK_IMPORTED_MODULE_1__.default, {
          sneakerItem: item,
          key: "inventory_".concat(item.id)
        }));
      })));
    }
  }]);

  return Inventory;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inventory);

/***/ }),

/***/ "./frontend/components/inventory/inventory_items.js":
/*!**********************************************************!*
  !*** ./frontend/components/inventory/inventory_items.js ***!
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



var InventoryItems = /*#__PURE__*/function (_Component) {
  _inherits(InventoryItems, _Component);

  var _super = _createSuper(InventoryItems);

  function InventoryItems(props) {
    _classCallCheck(this, InventoryItems);

    return _super.call(this, props);
  }

  _createClass(InventoryItems, [{
    key: "render",
    value: function render() {
      var sneakerItem = this.props.sneakerItem;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductItem-list"
      }, sneakerItem.size, "M $", sneakerItem.price);
    }
  }]);

  return InventoryItems;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryItems);

/***/ }),

/***/ "./frontend/components/preCheckout/preCheckout.js":
/*!********************************************************!*
  !*** ./frontend/components/preCheckout/preCheckout.js ***!
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




var PreCheckout = /*#__PURE__*/function (_Component) {
  _inherits(PreCheckout, _Component);

  var _super = _createSuper(PreCheckout);

  function PreCheckout(props) {
    _classCallCheck(this, PreCheckout);

    return _super.call(this, props);
  }

  _createClass(PreCheckout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedSneaker = _this$props.selectedSneaker,
          openProductPanel = _this$props.openProductPanel,
          sneaker = _this$props.sneaker,
          currentUser = _this$props.currentUser,
          addToCart = _this$props.addToCart;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "pre-checkout-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/sneaker/".concat(sneaker.sku)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return openProductPanel();
        },
        className: "ProductSelect-closeOut btn-cancel"
      }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Lowest Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "$", selectedSneaker.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, sneaker.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, "US M ", selectedSneaker.size)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "condition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, "New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-name"
      }, "Box"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "checkout-value"
      }, "New")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "checkout-btns-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/",
        className: "checkout-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "checkout-add-cart-cont-btn",
        onClick: function onClick() {
          return addToCart(currentUser, selectedSneaker.id);
        }
      }, "Add to cart and continue shopping")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/cart",
        className: "checkout-link-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "checkout-add-cart-btn",
        onClick: function onClick() {
          return addToCart(currentUser, selectedSneaker.id);
        }
      }, "Checkout"))));
    }
  }]);

  return PreCheckout;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreCheckout);

/***/ }),

/***/ "./frontend/components/sneakers/also_viewed_carousel.js":
/*!**************************************************************!*
  !*** ./frontend/components/sneakers/also_viewed_carousel.js ***!
  \**************************************************************/
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







function AlsoViewedCarousel(props) {
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
    className: "main-carousel-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "people-viewed-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "People Also Viewed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlsoViewedCarousel);

/***/ }),

/***/ "./frontend/components/sneakers/item_details_carousel.js":
/*!***************************************************************!*
  !*** ./frontend/components/sneakers/item_details_carousel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ItemDetailsCarousel(props) {
  var itemDetails = props.itemDetails;
  var propsDetails = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.brand)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "sku"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.sku)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "main color"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.main_color)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items-details-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "colorway"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items-details-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.colorway))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "silhouette"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.silhouette)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "technology"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.technology)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "nickname"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-titles"
  }, "upper material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slide-items-details"
  }, itemDetails.upper_material))];
  var responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {
        max: 4000,
        min: 3000
      },
      items: 7
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 7
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 5
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 3
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__.default, {
    partialVisible: true,
    responsive: responsive,
    className: "carousel-container",
    customLeftArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LeftArrow, null),
    customRightArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RightArrow, null)
  }, propsDetails.map(function (detail, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: index
    }, detail);
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemDetailsCarousel);

/***/ }),

/***/ "./frontend/components/sneakers/sneaker.js":
/*!*************************************************!*
  !*** ./frontend/components/sneakers/sneaker.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _sneaker_product_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sneaker_product_panel */ "./frontend/components/sneakers/sneaker_product_panel.js");
/* harmony import */ var _item_details_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item_details_carousel */ "./frontend/components/sneakers/item_details_carousel.js");
/* harmony import */ var _preCheckout_preCheckout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preCheckout/preCheckout */ "./frontend/components/preCheckout/preCheckout.js");
/* harmony import */ var _also_viewed_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./also_viewed_carousel */ "./frontend/components/sneakers/also_viewed_carousel.js");
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

/**
 * This file contains the Sneaker component that will display
 * an individual sneaker based on the the sneakerId
 */







var Sneaker = /*#__PURE__*/function (_Component) {
  _inherits(Sneaker, _Component);

  var _super = _createSuper(Sneaker);

  function Sneaker(props) {
    var _this;

    _classCallCheck(this, Sneaker);

    _this = _super.call(this, props);
    _this.state = {
      showInventory: false,
      showProductPanel: true,
      selectedSneaker: null
    };
    _this.closeProductPanel = _this.closeProductPanel.bind(_assertThisInitialized(_this));
    _this.openProductPanel = _this.openProductPanel.bind(_assertThisInitialized(_this));
    _this.setSelectedSneaker = _this.setSelectedSneaker.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sneaker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSneaker();
      this.props.getAlsoViewed(this.props.sneaker.id);
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.skuID !== prevProps.sneaker.sku && prevProps.sneaker.length !== 0) {
        this.props.getSneaker();
      }
    }
  }, {
    key: "closeProductPanel",
    value: function closeProductPanel() {
      this.setState({
        showProductPanel: false
      });
    }
  }, {
    key: "openProductPanel",
    value: function openProductPanel() {
      this.setState({
        showProductPanel: true
      });
    }
  }, {
    key: "setSelectedSneaker",
    value: function setSelectedSneaker(sneaker) {
      this.setState({
        selectedSneaker: sneaker
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sneaker = _this$props.sneaker,
          currentUser = _this$props.currentUser,
          alsoViewedSneakers = _this$props.alsoViewedSneakers,
          addToCart = _this$props.addToCart;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductContainer"
      }, sneaker.length < 1 || this.props.skuID !== sneaker.sku ? " " : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroContainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-first-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-shoe-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductPane-shoe-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: sneaker.photoUrl,
        alt: "".concat(sneaker.name),
        className: "sneakerImg"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductPane-container"
      }, this.props.currentUser === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
        to: "/login"
      }) : this.state.showProductPanel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sneaker_product_panel__WEBPACK_IMPORTED_MODULE_1__.default, {
        closeProductPanel: this.closeProductPanel,
        setSelectedSneaker: this.setSelectedSneaker,
        sneaker: sneaker
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/sneaker/:skuID/pre-checkout-review"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_preCheckout_preCheckout__WEBPACK_IMPORTED_MODULE_3__.default, {
        selectedSneaker: this.state.selectedSneaker,
        sneaker: sneaker,
        openProductPanel: this.openProductPanel,
        currentUser: currentUser,
        addToCart: addToCart
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductDetails-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
        className: "ProductDetails_Title"
      }, "Product Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "ProductDetails_Desc"
      }, sneaker.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_details_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
        itemDetails: sneaker
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_also_viewed_carousel__WEBPACK_IMPORTED_MODULE_4__.default, {
        sneakers: alsoViewedSneakers
      })));
    }
  }]);

  return Sneaker;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sneaker);

/***/ }),

/***/ "./frontend/components/sneakers/sneaker_container.js":
/*!***********************************************************!*
  !*** ./frontend/components/sneakers/sneaker_container.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/sneakers_actions */ "./frontend/actions/sneakers_actions.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/cart_actions */ "./frontend/actions/cart_actions.js");
/* harmony import */ var _sneaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sneaker */ "./frontend/components/sneakers/sneaker.js");
/**
 * This container will contain the state and dispatch
 * the correct actions for the Sneaker component
 */





var mapStateToProps = function mapStateToProps(state, _ref) {
  var match = _ref.match;
  return {
    sneaker: state.entities.sneaker,
    skuID: match.params.skuId,
    currentUser: state.session.id,
    alsoViewedSneakers: state.entities.alsoViewed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var match = _ref2.match;
  return {
    getSneaker: function getSneaker() {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getSneaker)(match.params.skuId));
    },
    getAlsoViewed: function getAlsoViewed(sneakerID) {
      return dispatch((0,_actions_sneakers_actions__WEBPACK_IMPORTED_MODULE_1__.getAlsoViewed)(sneakerID));
    },
    addToCart: function addToCart(currentUser, inventoryId) {
      return dispatch((0,_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__.addToCart)(currentUser, inventoryId));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_sneaker__WEBPACK_IMPORTED_MODULE_3__.default));

/***/ }),

/***/ "./frontend/components/sneakers/sneaker_product_panel.js":
/*!***************************************************************!*
  !*** ./frontend/components/sneakers/sneaker_product_panel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inventory_inventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inventory/inventory */ "./frontend/components/inventory/inventory.js");
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




var SneakerProductPanel = /*#__PURE__*/function (_Component) {
  _inherits(SneakerProductPanel, _Component);

  var _super = _createSuper(SneakerProductPanel);

  function SneakerProductPanel(props) {
    var _this;

    _classCallCheck(this, SneakerProductPanel);

    _this = _super.call(this, props);
    _this.state = {
      showInventory: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.closeInventory = _this.closeInventory.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SneakerProductPanel, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        showInventory: true
      });
    }
  }, {
    key: "closeInventory",
    value: function closeInventory() {
      this.setState({
        showInventory: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          closeProductPanel = _this$props.closeProductPanel,
          sneaker = _this$props.sneaker,
          setSelectedSneaker = _this$props.setSelectedSneaker;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.state.showInventory ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inventory_inventory__WEBPACK_IMPORTED_MODULE_1__.default, {
        closeInventory: this.closeInventory,
        closeProductPanel: closeProductPanel,
        setSelectedSneaker: setSelectedSneaker,
        inventory: sneaker.inventory,
        skuID: sneaker.sku
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "HeroPane-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ProductPane-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
        className: "ProductPane-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "ProductTitle"
      }, sneaker.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "ProductTitle_Sku"
      }, "SKU: ", sneaker.sku))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "btn-buy-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return _this2.handleClick();
        },
        className: "btn-buy"
      }, "Buy New"))));
    }
  }]);

  return SneakerProductPanel;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SneakerProductPanel);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvaW52ZW50b3J5L2ludmVudG9yeS5qcyIsIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvaW52ZW50b3J5L2ludmVudG9yeV9pdGVtcy5qcyIsIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJlQ2hlY2tvdXQvcHJlQ2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vU25lYWtlcnovLi9mcm9udGVuZC9jb21wb25lbnRzL3NuZWFrZXJzL2Fsc29fdmlld2VkX2Nhcm91c2VsLmpzIiwid2VicGFjazovL1NuZWFrZXJ6Ly4vZnJvbnRlbmQvY29tcG9uZW50cy9zbmVha2Vycy9pdGVtX2RldGFpbHNfY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vU25lYWtlcnovLi9mcm9udGVuZC9jb21wb25lbnRzL3NuZWFrZXJzL3NuZWFrZXIuanMiLCJ3ZWJwYWNrOi8vU25lYWtlcnovLi9mcm9udGVuZC9jb21wb25lbnRzL3NuZWFrZXJzL3NuZWFrZXJfY29udGFpbmVyLmpzIiwid2VicGFjazovL1NuZWFrZXJ6Ly4vZnJvbnRlbmQvY29tcG9uZW50cy9zbmVha2Vycy9zbmVha2VyX3Byb2R1Y3RfcGFuZWwuanMiXSwibmFtZXMiOlsiSW52ZW50b3J5IiwicHJvcHMiLCJpbnZlbnRvcnkiLCJjbG9zZUludmVudG9yeSIsInNrdUlEIiwiY2xvc2VQcm9kdWN0UGFuZWwiLCJzZXRTZWxlY3RlZFNuZWFrZXIiLCJtYXAiLCJpdGVtIiwiaWQiLCJDb21wb25lbnQiLCJJbnZlbnRvcnlJdGVtcyIsInNuZWFrZXJJdGVtIiwic2l6ZSIsInByaWNlIiwiUHJlQ2hlY2tvdXQiLCJzZWxlY3RlZFNuZWFrZXIiLCJvcGVuUHJvZHVjdFBhbmVsIiwic25lYWtlciIsImN1cnJlbnRVc2VyIiwiYWRkVG9DYXJ0Iiwic2t1IiwibmFtZSIsIkFsc29WaWV3ZWRDYXJvdXNlbCIsInNuZWFrZXJzIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsIkxlZnRBcnJvdyIsImFycm93UHJvcHMiLCJjYXJvdXNlbFN0YXRlIiwiY2hpbGRyZW4iLCJyZXN0QXJyb3dQcm9wcyIsIlJpZ2h0QXJyb3ciLCJpbmRleCIsInBob3RvVXJsIiwiSXRlbURldGFpbHNDYXJvdXNlbCIsIml0ZW1EZXRhaWxzIiwicHJvcHNEZXRhaWxzIiwiYnJhbmQiLCJkYXRlIiwibWFpbl9jb2xvciIsImNvbG9yd2F5Iiwic2lsaG91ZXR0ZSIsInRlY2hub2xvZ3kiLCJuaWNrbmFtZSIsInVwcGVyX21hdGVyaWFsIiwiZGV0YWlsIiwiU25lYWtlciIsInN0YXRlIiwic2hvd0ludmVudG9yeSIsInNob3dQcm9kdWN0UGFuZWwiLCJiaW5kIiwiZ2V0U25lYWtlciIsImdldEFsc29WaWV3ZWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInByZXZQcm9wcyIsImxlbmd0aCIsInNldFN0YXRlIiwiYWxzb1ZpZXdlZFNuZWFrZXJzIiwiZGVzY3JpcHRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXRjaCIsImVudGl0aWVzIiwicGFyYW1zIiwic2t1SWQiLCJzZXNzaW9uIiwiYWxzb1ZpZXdlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic25lYWtlcklEIiwiaW52ZW50b3J5SWQiLCJjb25uZWN0IiwiU25lYWtlclByb2R1Y3RQYW5lbCIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7SUFFTUEsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNRO0FBQUEsd0JBT0gsS0FBS0EsS0FQRjtBQUFBLFVBRUxDLFNB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YUFBWCxnQkFDQyxpREFBQyx5REFBRDtBQUNFLHNCQUFjLEVBQUUsS0FBS3JELGNBRHZCO0FBRUUseUJBQWlCLEVBQUVFLGlCQUZyQjtBQUdFLDBCQUFrQixFQUFFQyxrQkFIdEI7QUFJRSxpQkFBUyxFQUFFWSxPQUFPLENBQUNoQixTQUpyQjtBQUtFLGFBQUssRUFBRWdCLE9BQU8sQ0FBQ0c7QUFMakIsUUFERCxnQkFTQyxpREFBQywyQ0FBRCxxQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsc0JBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBOEJILE9BQU8sQ0FBQ0ksSUFBdEMsQ0FERixDQURGLGVBSUU7QUFBRyxpQkFBUyxFQUFDO0FBQWIsa0JBQXNDSixPQUFPLENBQUNHLEdBQTlDLENBSkYsQ0FERixDQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUM0RCxXQUFMLEVBQU47QUFBQSxTQUFqQjtBQUEyQyxpQkFBUyxFQUFDO0FBQXJELG1CQURGLENBVEYsQ0FWSixDQURGO0FBNkJEOzs7O0VBdkQrQnZFLDRDOztBQTBEbEMsaUVBQWVzRSxtQkFBZixFIiwiZmlsZSI6ImZyb250ZW5kX2NvbXBvbmVudHNfc25lYWtlcnNfc25lYWtlcl9jb250YWluZXJfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBJb01kQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCBJbnZlbnRvcnlJdGVtcyBmcm9tIFwiLi9pbnZlbnRvcnlfaXRlbXNcIjtcblxuLy8gdGhpcyBjcmVhdGVzIGEgbGlzdCBvZiBzaXplcyBhbmQgcHJpY2VzIG9mIGEgc3BlY2lmaWMgc2hvZVxuXG5jbGFzcyBJbnZlbnRvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGludmVudG9yeSxcbiAgICAgIGNsb3NlSW52ZW50b3J5LFxuICAgICAgc2t1SUQsXG4gICAgICBjbG9zZVByb2R1Y3RQYW5lbCxcbiAgICAgIHNldFNlbGVjdGVkU25lYWtlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8SW9NZENsb3NlXG4gICAgICAgICAgc2l6ZT17MjV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiUHJvZHVjdFNlbGVjdC1jbG9zZU91dFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VJbnZlbnRvcnkoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0TGlzdC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDI+QnV5IE5ldzwvaDI+XG4gICAgICAgICAgPGgxPlVTIE1lbiBTaXplczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0LWl0ZW1zXCI+XG4gICAgICAgICAge2ludmVudG9yeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXtgL3NuZWFrZXIvJHtza3VJRH0vcHJlLWNoZWNrb3V0LXJldmlld2B9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0LWxpbmstd3JhcHBlclwiXG4gICAgICAgICAgICAgIGtleT17YGludmVudG9yeV9saW5rXyR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VJbnZlbnRvcnkoKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2R1Y3RQYW5lbCgpO1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU25lYWtlcihpdGVtKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEludmVudG9yeUl0ZW1zIHNuZWFrZXJJdGVtPXtpdGVtfSBrZXk9e2BpbnZlbnRvcnlfJHtpdGVtLmlkfWB9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEludmVudG9yeUl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgc25lYWtlckl0ZW0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdEl0ZW0tbGlzdFwiPlxuICAgICAgICB7c25lYWtlckl0ZW0uc2l6ZX1NICR7c25lYWtlckl0ZW0ucHJpY2V9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludmVudG9yeUl0ZW1zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY2xhc3MgUHJlQ2hlY2tvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgc2VsZWN0ZWRTbmVha2VyLFxuICAgICAgb3BlblByb2R1Y3RQYW5lbCxcbiAgICAgIHNuZWFrZXIsXG4gICAgICBjdXJyZW50VXNlcixcbiAgICAgIGFkZFRvQ2FydCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlLWNoZWNrb3V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxMaW5rIHRvPXtgL3NuZWFrZXIvJHtzbmVha2VyLnNrdX1gfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlblByb2R1Y3RQYW5lbCgpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9kdWN0U2VsZWN0LWNsb3NlT3V0IGJ0bi1jYW5jZWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPkxvd2VzdCBQcmljZTwvaDI+XG4gICAgICAgICAgICA8aDE+JHtzZWxlY3RlZFNuZWFrZXIucHJpY2V9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1pdGVtc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja291dC1uYW1lXCI+aXRlbTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tvdXQtdmFsdWVcIj57c25lYWtlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1pdGVtc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja291dC1uYW1lXCI+c2l6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tvdXQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICBVUyBNIHtzZWxlY3RlZFNuZWFrZXIuc2l6ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LW5hbWVcIj5jb25kaXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LXZhbHVlXCI+TmV3PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LW5hbWVcIj5Cb3g8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrb3V0LXZhbHVlXCI+TmV3PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWJ0bnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiY2hlY2tvdXQtbGlua1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja291dC1hZGQtY2FydC1jb250LWJ0blwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRvQ2FydChjdXJyZW50VXNlciwgc2VsZWN0ZWRTbmVha2VyLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIHRvIGNhcnQgYW5kIGNvbnRpbnVlIHNob3BwaW5nXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvY2FydFwiIGNsYXNzTmFtZT1cImNoZWNrb3V0LWxpbmstcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tvdXQtYWRkLWNhcnQtYnRuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KGN1cnJlbnRVc2VyLCBzZWxlY3RlZFNuZWFrZXIuaWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVDaGVja291dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IEFpT3V0bGluZUxlZnQsIEFpT3V0bGluZVJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbmZ1bmN0aW9uIEFsc29WaWV3ZWRDYXJvdXNlbChwcm9wcykge1xuICBsZXQgeyBzbmVha2VycyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgIGl0ZW1zOiAzLFxuICAgIH0sXG4gICAgZGVza3RvcDoge1xuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgaXRlbXM6IDMsXG4gICAgfSxcbiAgICB0YWJsZXQ6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgaXRlbXM6IDMsXG4gICAgfSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgaXRlbXM6IDUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBMZWZ0QXJyb3cgPSAoYXJyb3dQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2Fyb3VzZWxTdGF0ZSwgY2hpbGRyZW4sIC4uLnJlc3RBcnJvd1Byb3BzIH0gPSBhcnJvd1Byb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBaU91dGxpbmVMZWZ0IHNpemU9ezMwfSBjbGFzc05hbWU9XCJidXR0b25MZWZ0XCIgey4uLnJlc3RBcnJvd1Byb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9BaU91dGxpbmVMZWZ0PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRBcnJvdyA9IChhcnJvd1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjYXJvdXNlbFN0YXRlLCBjaGlsZHJlbiwgLi4ucmVzdEFycm93UHJvcHMgfSA9IGFycm93UHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFpT3V0bGluZVJpZ2h0IHNpemU9ezMwfSBjbGFzc05hbWU9XCJidXR0b25SaWdodFwiIHsuLi5yZXN0QXJyb3dQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQWlPdXRsaW5lUmlnaHQ+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVvcGxlLXZpZXdlZC1jb250YWluZXJcIj5cbiAgICAgICAgPGgzPlBlb3BsZSBBbHNvIFZpZXdlZDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1pbWctY29udGFpbmVyXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIHBhcnRpYWxWaXNpYmxlPXt0cnVlfVxuICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgICAgICBjdXN0b21MZWZ0QXJyb3c9ezxMZWZ0QXJyb3cgLz59XG4gICAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PFJpZ2h0QXJyb3cgLz59XG4gICAgICAgID5cbiAgICAgICAgICB7c25lYWtlcnMubWFwKChzbmVha2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz17YC9zbmVha2VyLyR7c25lYWtlci5za3V9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1zaG9lLXdyYXBwZXJcIlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXNob2UtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3NuZWFrZXIucGhvdG9Vcmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17c25lYWtlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1zaG9lLWltZ1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtc2hvZS1kZXRhaWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXNob2UtZGV0YWlsXCI+e3NuZWFrZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbHNvVmlld2VkQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgQWlPdXRsaW5lTGVmdCwgQWlPdXRsaW5lUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuZnVuY3Rpb24gSXRlbURldGFpbHNDYXJvdXNlbChwcm9wcykge1xuICBsZXQgeyBpdGVtRGV0YWlscyB9ID0gcHJvcHM7XG5cbiAgbGV0IHByb3BzRGV0YWlscyA9IFtcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtcy10aXRsZXNcIj5icmFuZDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zLWRldGFpbHNcIj57aXRlbURldGFpbHMuYnJhbmR9PC9zcGFuPlxuICAgIDwvZGl2PixcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtcy10aXRsZXNcIj5kYXRlPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy5kYXRlfTwvc3Bhbj5cbiAgICA8L2Rpdj4sXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtc1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtdGl0bGVzXCI+c2t1PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy5za3V9PC9zcGFuPlxuICAgIDwvZGl2PixcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtcy10aXRsZXNcIj5tYWluIGNvbG9yPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy5tYWluX2NvbG9yfTwvc3Bhbj5cbiAgICA8L2Rpdj4sXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtc1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtdGl0bGVzXCI+bmFtZTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PixcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaXRlbXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zLXRpdGxlc1wiPmNvbG9yd2F5PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtcy1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtcy1kZXRhaWxzXCI+e2l0ZW1EZXRhaWxzLmNvbG9yd2F5fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PixcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtcy10aXRsZXNcIj5zaWxob3VldHRlPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy5zaWxob3VldHRlfTwvc3Bhbj5cbiAgICA8L2Rpdj4sXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pdGVtc1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtdGl0bGVzXCI+dGVjaG5vbG9neTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zLWRldGFpbHNcIj57aXRlbURldGFpbHMudGVjaG5vbG9neX08L3NwYW4+XG4gICAgPC9kaXY+LFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaXRlbXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zLXRpdGxlc1wiPm5pY2tuYW1lPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy5uaWNrbmFtZX08L3NwYW4+XG4gICAgPC9kaXY+LFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaXRlbXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1zLXRpdGxlc1wiPnVwcGVyIG1hdGVyaWFsPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaXRlbXMtZGV0YWlsc1wiPntpdGVtRGV0YWlscy51cHBlcl9tYXRlcmlhbH08L3NwYW4+XG4gICAgPC9kaXY+LFxuICBdO1xuXG4gIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgICBpdGVtczogNyxcbiAgICB9LFxuICAgIGRlc2t0b3A6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgIGl0ZW1zOiA3LFxuICAgIH0sXG4gICAgdGFibGV0OiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcbiAgICAgIGl0ZW1zOiA1LFxuICAgIH0sXG4gICAgbW9iaWxlOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgIGl0ZW1zOiAzLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgTGVmdEFycm93ID0gKGFycm93UHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNhcm91c2VsU3RhdGUsIGNoaWxkcmVuLCAuLi5yZXN0QXJyb3dQcm9wcyB9ID0gYXJyb3dQcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QWlPdXRsaW5lTGVmdCBzaXplPXszMH0gY2xhc3NOYW1lPVwiYnV0dG9uTGVmdFwiIHsuLi5yZXN0QXJyb3dQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQWlPdXRsaW5lTGVmdD5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFJpZ2h0QXJyb3cgPSAoYXJyb3dQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2Fyb3VzZWxTdGF0ZSwgY2hpbGRyZW4sIC4uLnJlc3RBcnJvd1Byb3BzIH0gPSBhcnJvd1Byb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBaU91dGxpbmVSaWdodCBzaXplPXszMH0gY2xhc3NOYW1lPVwiYnV0dG9uUmlnaHRcIiB7Li4ucmVzdEFycm93UHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0FpT3V0bGluZVJpZ2h0PlxuICAgICk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsXG4gICAgICBwYXJ0aWFsVmlzaWJsZT17dHJ1ZX1cbiAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgY3VzdG9tTGVmdEFycm93PXs8TGVmdEFycm93IC8+fVxuICAgICAgY3VzdG9tUmlnaHRBcnJvdz17PFJpZ2h0QXJyb3cgLz59XG4gICAgPlxuICAgICAge3Byb3BzRGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+e2RldGFpbH08L2Rpdj47XG4gICAgICB9KX1cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtRGV0YWlsc0Nhcm91c2VsO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFNuZWFrZXIgY29tcG9uZW50IHRoYXQgd2lsbCBkaXNwbGF5XG4gKiBhbiBpbmRpdmlkdWFsIHNuZWFrZXIgYmFzZWQgb24gdGhlIHRoZSBzbmVha2VySWRcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU25lYWtlclByb2R1Y3RQYW5lbCBmcm9tIFwiLi9zbmVha2VyX3Byb2R1Y3RfcGFuZWxcIjtcbmltcG9ydCBJdGVtRGV0YWlsc0Nhcm91c2VsIGZyb20gXCIuL2l0ZW1fZGV0YWlsc19jYXJvdXNlbFwiO1xuaW1wb3J0IFByZUNoZWNrb3V0IGZyb20gXCIuLi9wcmVDaGVja291dC9wcmVDaGVja291dFwiO1xuaW1wb3J0IEFsc29WaWV3ZWRDYXJvdXNlbCBmcm9tIFwiLi9hbHNvX3ZpZXdlZF9jYXJvdXNlbFwiO1xuXG5jbGFzcyBTbmVha2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ludmVudG9yeTogZmFsc2UsXG4gICAgICBzaG93UHJvZHVjdFBhbmVsOiB0cnVlLFxuICAgICAgc2VsZWN0ZWRTbmVha2VyOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLmNsb3NlUHJvZHVjdFBhbmVsID0gdGhpcy5jbG9zZVByb2R1Y3RQYW5lbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlblByb2R1Y3RQYW5lbCA9IHRoaXMub3BlblByb2R1Y3RQYW5lbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRTbmVha2VyID0gdGhpcy5zZXRTZWxlY3RlZFNuZWFrZXIuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldFNuZWFrZXIoKTtcbiAgICB0aGlzLnByb3BzLmdldEFsc29WaWV3ZWQodGhpcy5wcm9wcy5zbmVha2VyLmlkKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5za3VJRCAhPT0gcHJldlByb3BzLnNuZWFrZXIuc2t1ICYmXG4gICAgICBwcmV2UHJvcHMuc25lYWtlci5sZW5ndGggIT09IDBcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMuZ2V0U25lYWtlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUHJvZHVjdFBhbmVsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Byb2R1Y3RQYW5lbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBvcGVuUHJvZHVjdFBhbmVsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Byb2R1Y3RQYW5lbDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkU25lYWtlcihzbmVha2VyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFNuZWFrZXI6IHNuZWFrZXIsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgc25lYWtlciwgY3VycmVudFVzZXIsIGFsc29WaWV3ZWRTbmVha2VycywgYWRkVG9DYXJ0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdENvbnRhaW5lclwiPlxuICAgICAgICB7c25lYWtlci5sZW5ndGggPCAxIHx8IHRoaXMucHJvcHMuc2t1SUQgIT09IHNuZWFrZXIuc2t1ID8gKFxuICAgICAgICAgIFwiIFwiXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1BhbmUtZmlyc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb1BhbmUtc2hvZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYW5lLXNob2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtzbmVha2VyLnBob3RvVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7c25lYWtlci5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic25lYWtlckltZ1wiXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYW5lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmN1cnJlbnRVc2VyID09PSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICApIDogdGhpcy5zdGF0ZS5zaG93UHJvZHVjdFBhbmVsID8gKFxuICAgICAgICAgICAgICAgICAgPFNuZWFrZXJQcm9kdWN0UGFuZWxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQcm9kdWN0UGFuZWw9e3RoaXMuY2xvc2VQcm9kdWN0UGFuZWx9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU25lYWtlcj17dGhpcy5zZXRTZWxlY3RlZFNuZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgIHNuZWFrZXI9e3NuZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zbmVha2VyLzpza3VJRC9wcmUtY2hlY2tvdXQtcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcmVDaGVja291dFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU25lYWtlcj17dGhpcy5zdGF0ZS5zZWxlY3RlZFNuZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgc25lYWtlcj17c25lYWtlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJvZHVjdFBhbmVsPXt0aGlzLm9wZW5Qcm9kdWN0UGFuZWx9XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydD17YWRkVG9DYXJ0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0RGV0YWlscy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdERldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiUHJvZHVjdERldGFpbHNfVGl0bGVcIj5Qcm9kdWN0IERldGFpbHM8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3REZXRhaWxzX0Rlc2NcIj57c25lYWtlci5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8SXRlbURldGFpbHNDYXJvdXNlbCBpdGVtRGV0YWlscz17c25lYWtlcn0gLz5cbiAgICAgICAgICAgIDxBbHNvVmlld2VkQ2Fyb3VzZWwgc25lYWtlcnM9e2Fsc29WaWV3ZWRTbmVha2Vyc30gLz5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbmVha2VyO1xuIiwiLyoqXG4gKiBUaGlzIGNvbnRhaW5lciB3aWxsIGNvbnRhaW4gdGhlIHN0YXRlIGFuZCBkaXNwYXRjaFxuICogdGhlIGNvcnJlY3QgYWN0aW9ucyBmb3IgdGhlIFNuZWFrZXIgY29tcG9uZW50XG4gKi9cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGdldFNuZWFrZXIsIGdldEFsc29WaWV3ZWQgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9zbmVha2Vyc19hY3Rpb25zXCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jYXJ0X2FjdGlvbnNcIjtcbmltcG9ydCBTbmVha2VyIGZyb20gXCIuL3NuZWFrZXJcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCB7IG1hdGNoIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzbmVha2VyOiBzdGF0ZS5lbnRpdGllcy5zbmVha2VyLFxuICAgIHNrdUlEOiBtYXRjaC5wYXJhbXMuc2t1SWQsXG4gICAgY3VycmVudFVzZXI6IHN0YXRlLnNlc3Npb24uaWQsXG4gICAgYWxzb1ZpZXdlZFNuZWFrZXJzOiBzdGF0ZS5lbnRpdGllcy5hbHNvVmlld2VkLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCB7IG1hdGNoIH0pID0+ICh7XG4gIGdldFNuZWFrZXI6ICgpID0+IGRpc3BhdGNoKGdldFNuZWFrZXIobWF0Y2gucGFyYW1zLnNrdUlkKSksXG4gIGdldEFsc29WaWV3ZWQ6IChzbmVha2VySUQpID0+IGRpc3BhdGNoKGdldEFsc29WaWV3ZWQoc25lYWtlcklEKSksXG4gIGFkZFRvQ2FydDogKGN1cnJlbnRVc2VyLCBpbnZlbnRvcnlJZCkgPT5cbiAgICBkaXNwYXRjaChhZGRUb0NhcnQoY3VycmVudFVzZXIsIGludmVudG9yeUlkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU25lYWtlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEludmVudG9yeSBmcm9tIFwiLi4vaW52ZW50b3J5L2ludmVudG9yeVwiO1xuXG5jbGFzcyBTbmVha2VyUHJvZHVjdFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ludmVudG9yeTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUludmVudG9yeSA9IHRoaXMuY2xvc2VJbnZlbnRvcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0ludmVudG9yeTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlSW52ZW50b3J5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0ludmVudG9yeTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2xvc2VQcm9kdWN0UGFuZWwsIHNuZWFrZXIsIHNldFNlbGVjdGVkU25lYWtlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93SW52ZW50b3J5ID8gKFxuICAgICAgICAgIDxJbnZlbnRvcnlcbiAgICAgICAgICAgIGNsb3NlSW52ZW50b3J5PXt0aGlzLmNsb3NlSW52ZW50b3J5fVxuICAgICAgICAgICAgY2xvc2VQcm9kdWN0UGFuZWw9e2Nsb3NlUHJvZHVjdFBhbmVsfVxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRTbmVha2VyPXtzZXRTZWxlY3RlZFNuZWFrZXJ9XG4gICAgICAgICAgICBpbnZlbnRvcnk9e3NuZWFrZXIuaW52ZW50b3J5fVxuICAgICAgICAgICAgc2t1SUQ9e3NuZWFrZXIuc2t1fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZXJvUGFuZS1yaWdodFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYW5lLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIlByb2R1Y3RQYW5lLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlByb2R1Y3RUaXRsZVwiPntzbmVha2VyLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0VGl0bGVfU2t1XCI+U0tVOiB7c25lYWtlci5za3V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYnV5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0gY2xhc3NOYW1lPVwiYnRuLWJ1eVwiPlxuICAgICAgICAgICAgICAgIEJ1eSBOZXdcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNuZWFrZXJQcm9kdWN0UGFuZWw7XG4iXSwic291cmNlUm9vdCI6IiJ9