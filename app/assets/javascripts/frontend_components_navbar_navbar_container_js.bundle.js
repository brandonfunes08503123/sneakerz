(self["webpackChunkSneakerz"] = self["webpackChunkSneakerz"] || []).push([["frontend_components_navbar_navbar_container_js"],{

/***/ "./frontend/components/navbar/navbar.jsx":
/*!***********************************************!*
  !*** ./frontend/components/navbar/navbar.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");





var Navbar = function Navbar(_ref) {
  var currentUser = _ref.currentUser,
      logout = _ref.logout,
      openSearchModal = _ref.openSearchModal;

  var loggedIn = function loggedIn() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "nav-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/",
      className: "nav-logo"
    }, "S N E A K E R Z"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "nav-items-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/",
      className: "nav-item"
    }, "Discover"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/styles",
      className: "nav-item"
    }, "Styles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/",
      className: "nav-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "nav-button",
      onClick: function onClick() {
        return logout();
      }
    }, "Sign Out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/cart",
      className: "nav-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShoppingCart, {
      size: 24
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "nav-item nav-icon",
      onClick: function onClick() {
        return openSearchModal("search");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoSearchOutline, {
      size: 24
    }))));
  };

  var loggedOut = function loggedOut() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "nav-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/",
      className: "nav-logo"
    }, "S N E A K E R Z"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "nav-items-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/",
      className: "nav-item"
    }, "Discover"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/styles",
      className: "nav-item"
    }, "Styles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/login",
      className: "nav-item"
    }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/signup",
      className: "nav-item"
    }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "nav-item nav-icon",
      onClick: function onClick() {
        return openSearchModal("search");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoSearchOutline, {
      size: 24
    }))));
  };

  return currentUser === undefined ? loggedOut() : loggedIn();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./frontend/components/navbar/navbar_container.js":
/*!********************************************************!*
  !*** ./frontend/components/navbar/navbar_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./frontend/components/navbar/navbar.jsx");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
    },
    openSearchModal: function openSearchModal(value) {
      return dispatch((0,_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__.openSearchModal)(value));
    },
    openMenuModal: function openMenuModal(value) {
      return dispatch((0,_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__.openMenuModal)(value));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_navbar__WEBPACK_IMPORTED_MODULE_3__.default));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVha2Vyei8uL2Zyb250ZW5kL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qc3giLCJ3ZWJwYWNrOi8vU25lYWtlcnovLi9mcm9udGVuZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXJfY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsImN1cnJlbnRVc2VyIiwibG9nb3V0Iiwib3BlblNlYXJjaE1vZGFsIiwibG9nZ2VkSW4iLCJsb2dnZWRPdXQiLCJ1bmRlZmluZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImVudGl0aWVzIiwidXNlcnMiLCJzZXNzaW9uIiwiaWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInZhbHVlIiwib3Blbk1lbnVNb2RhbCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBOEM7QUFBQSxNQUEzQ0MsV0FBMkMsUUFBM0NBLFdBQTJDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7O0FBQzNELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsd0JBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRSxpREFBQyxrREFBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQWEsZUFBUyxFQUFDO0FBQXZCLHlCQURGLGVBSUU7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRSxpREFBQyxrREFBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQWEsZUFBUyxFQUFDO0FBQXZCLGtCQURGLGVBSUUsaURBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUMsU0FBVDtBQUFtQixlQUFTLEVBQUM7QUFBN0IsZ0JBSkYsZUFPRSxpREFBQyxrREFBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQWEsZUFBUyxFQUFDO0FBQXZCLG9CQUNFO0FBQVEsZUFBUyxFQUFDLFlBQWxCO0FBQStCLGFBQU8sRUFBRTtBQUFBLGVBQU1GLE1BQU0sRUFBWjtBQUFBO0FBQXhDLGtCQURGLENBUEYsZUFhRSxpREFBQyxrREFBRDtBQUFNLFFBQUUsRUFBQyxPQUFUO0FBQWlCLGVBQVMsRUFBQztBQUEzQixvQkFDRSxpREFBQyxpRUFBRDtBQUF1QixVQUFJLEVBQUU7QUFBN0IsTUFERixDQWJGLGVBZ0JFO0FBQ0UsZUFBUyxFQUFDLG1CQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUMsZUFBZSxDQUFDLFFBQUQsQ0FBckI7QUFBQTtBQUZYLG9CQUlFLGlEQUFDLDREQUFEO0FBQWlCLFVBQUksRUFBRTtBQUF2QixNQUpGLENBaEJGLENBSkYsQ0FERjtBQThCRCxHQS9CRDs7QUFpQ0EsTUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0Qix3QkFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLGlEQUFDLGtEQUFEO0FBQU0sUUFBRSxFQUFDLEdBQVQ7QUFBYSxlQUFTLEVBQUM7QUFBdkIseUJBREYsZUFJRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLGlEQUFDLGtEQUFEO0FBQU0sUUFBRSxFQUFDLEdBQVQ7QUFBYSxlQUFTLEVBQUM7QUFBdkIsa0JBREYsZUFJRSxpREFBQyxrREFBRDtBQUFNLFFBQUUsRUFBQyxTQUFUO0FBQW1CLGVBQVMsRUFBQztBQUE3QixnQkFKRixlQU9FLGlEQUFDLGtEQUFEO0FBQU0sUUFBRSxFQUFDLFFBQVQ7QUFBa0IsZUFBUyxFQUFDO0FBQTVCLGlCQVBGLGVBVUUsaURBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUMsU0FBVDtBQUFtQixlQUFTLEVBQUM7QUFBN0IsaUJBVkYsZUFhRTtBQUNFLGVBQVMsRUFBQyxtQkFEWjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1GLGVBQWUsQ0FBQyxRQUFELENBQXJCO0FBQUE7QUFGWCxvQkFJRSxpREFBQyw0REFBRDtBQUFpQixVQUFJLEVBQUU7QUFBdkIsTUFKRixDQWJGLENBSkYsQ0FERjtBQTJCRCxHQTVCRDs7QUE4QkEsU0FBT0YsV0FBVyxLQUFLSyxTQUFoQixHQUE0QkQsU0FBUyxFQUFyQyxHQUEwQ0QsUUFBUSxFQUF6RDtBQUNELENBakVEOztBQW1FQSxpRUFBZUosTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENQLGVBQVcsRUFBRU8sS0FBSyxDQUFDQyxRQUFOLENBQWVDLEtBQWYsQ0FBcUJGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxFQUFuQztBQURxQixHQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1osVUFBTSxFQUFFO0FBQUEsYUFBTVksUUFBUSxDQUFDWixnRUFBTSxFQUFQLENBQWQ7QUFBQSxLQURnQztBQUV4Q0MsbUJBQWUsRUFBRSx5QkFBQ1ksS0FBRDtBQUFBLGFBQVdELFFBQVEsQ0FBQ1gsdUVBQWUsQ0FBQ1ksS0FBRCxDQUFoQixDQUFuQjtBQUFBLEtBRnVCO0FBR3hDQyxpQkFBYSxFQUFFLHVCQUFDRCxLQUFEO0FBQUEsYUFBV0QsUUFBUSxDQUFDRSxxRUFBYSxDQUFDRCxLQUFELENBQWQsQ0FBbkI7QUFBQTtBQUh5QixHQUFmO0FBQUEsQ0FBM0I7O0FBTUEsaUVBQWVFLG9EQUFPLENBQUNWLGVBQUQsRUFBa0JNLGtCQUFsQixDQUFQLENBQTZDYiw0Q0FBN0MsQ0FBZixFIiwiZmlsZSI6ImZyb250ZW5kX2NvbXBvbmVudHNfbmF2YmFyX25hdmJhcl9jb250YWluZXJfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBJb1NlYXJjaE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVTaG9wcGluZ0NhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmNvbnN0IE5hdmJhciA9ICh7IGN1cnJlbnRVc2VyLCBsb2dvdXQsIG9wZW5TZWFyY2hNb2RhbCB9KSA9PiB7XG4gIGNvbnN0IGxvZ2dlZEluID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWxvZ29cIj5cbiAgICAgICAgICBTIE4gRSBBIEsgRSBSIFpcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgRGlzY292ZXJcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvc3R5bGVzXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIFN0eWxlc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PlxuICAgICAgICAgICAgICBTaWduIE91dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgdG89XCIvY2FydFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8QWlPdXRsaW5lU2hvcHBpbmdDYXJ0IHNpemU9ezI0fSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtaWNvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2VhcmNoTW9kYWwoXCJzZWFyY2hcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElvU2VhcmNoT3V0bGluZSBzaXplPXsyNH0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGxvZ2dlZE91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1sb2dvXCI+XG4gICAgICAgICAgUyBOIEUgQSBLIEUgUiBaXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIERpc2NvdmVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3N0eWxlc1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICBTdHlsZXNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtaWNvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuU2VhcmNoTW9kYWwoXCJzZWFyY2hcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElvU2VhcmNoT3V0bGluZSBzaXplPXsyNH0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBjdXJyZW50VXNlciA9PT0gdW5kZWZpbmVkID8gbG9nZ2VkT3V0KCkgOiBsb2dnZWRJbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvc2Vzc2lvbl9hY3Rpb25zXCI7XG5pbXBvcnQgeyBvcGVuU2VhcmNoTW9kYWwsIG9wZW5NZW51TW9kYWwgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9tb2RhbF9hY3Rpb25zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGN1cnJlbnRVc2VyOiBzdGF0ZS5lbnRpdGllcy51c2Vyc1tzdGF0ZS5zZXNzaW9uLmlkXSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0KCkpLFxuICBvcGVuU2VhcmNoTW9kYWw6ICh2YWx1ZSkgPT4gZGlzcGF0Y2gob3BlblNlYXJjaE1vZGFsKHZhbHVlKSksXG4gIG9wZW5NZW51TW9kYWw6ICh2YWx1ZSkgPT4gZGlzcGF0Y2gob3Blbk1lbnVNb2RhbCh2YWx1ZSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmJhcik7XG4iXSwic291cmNlUm9vdCI6IiJ9