webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product/productPresenter.js":
/*!*******************************************!*\
  !*** ./pages/product/productPresenter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_CartButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CartButton */ "./components/CartButton.js");







/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      toggleCart = _ref.toggleCart;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, data.product.name, " | Nomad Store")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centerColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Product"),
    rightColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CartButton__WEBPACK_IMPORTED_MODULE_6__["default"], null),
    leftColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/",
      text: "Home"
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2282839544" + " " + "product"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: data.product.photo.url,
    className: "jsx-2282839544"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2282839544"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2282839544"
  }, data.product.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2282839544"
  }, data.product.detail), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2282839544"
  }, data.product.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onClick: toggleCart
  }, data.product.onCart ? "Remove from cart" : "Add to cart($\n                        {data.product.price})")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2282839544",
    css: ".product.jsx-2282839544{display:grid;margin:50px 0px;padding:0px 50px;grid-template-columnms:repeat(2,1fr);grid-gap:50px;}.product.jsx-2282839544 img.jsx-2282839544{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXVuZ3lvbmdsZWUvRG9jdW1lbnRzL0dpdEh1Yi9pYW13aGF0aWFtL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdFByZXNlbnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3dCLEFBR2tDLEFBUWxCLGFBUHFCLEVBT3BCLGNBTnFCLGlCQUNxQixxQ0FDeEIsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NldW5neW9uZ2xlZS9Eb2N1bWVudHMvR2l0SHViL2lhbXdoYXRpYW0vcGFnZXMvcHJvZHVjdC9wcm9kdWN0UHJlc2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQnV0dG9uIGFzIEFudEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBDYXJ0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcnRCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZGF0YSwgdG9nZ2xlQ2FydCB9KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e2RhdGEucHJvZHVjdC5uYW1lfSB8IE5vbWFkIFN0b3JlPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyIFxuICAgICAgICAgICAgY2VudGVyQ29sdW1uPXtcbiAgICAgICAgICAgICAgICA8aDQ+UHJvZHVjdDwvaDQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodENvbHVtbj17XG4gICAgICAgICAgICAgICAgPENhcnRCdXR0b24gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnRDb2x1bW49e1xuICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cIi9cIiB0ZXh0PVwiSG9tZVwiIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInByb2R1Y3RcIn0+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5wcm9kdWN0LnBob3RvLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e2RhdGEucHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57ZGF0YS5wcm9kdWN0LmRldGFpbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+e2RhdGEucHJvZHVjdC5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8QW50QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17dG9nZ2xlQ2FydH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wcm9kdWN0Lm9uQ2FydCA/IFwiUmVtb3ZlIGZyb20gY2FydFwiIDogXG4gICAgICAgICAgICAgICAgICAgICAgICBgQWRkIHRvIGNhcnQoJFxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvZHVjdC5wcmljZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgPC9BbnRCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5tczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZHVjdCBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4pOyJdfQ== */\n/*@ sourceURL=/Users/seungyonglee/Documents/GitHub/iamwhatiam/pages/product/productPresenter.js */"
  })));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product/productPresenter")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=product.js.afb1d2d3d4d1d2389f1a.hot-update.js.map