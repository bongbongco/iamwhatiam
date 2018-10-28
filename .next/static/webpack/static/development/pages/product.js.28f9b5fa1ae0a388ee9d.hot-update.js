webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product/productQueries.js":
/*!*****************************************!*\
  !*** ./pages/product/productQueries.js ***!
  \*****************************************/
/*! exports provided: PRODUCT_QUERY, TOGGLE_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_QUERY", function() { return PRODUCT_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART", function() { return TOGGLE_CART; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fragments */ "./fragments.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    mutation toggleCart($id: ID!){\n        toggleProduct(id: $id) @client\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nquery productQuery($id: ID!){\n    product(where: {id: $id}) {\n        ...ProductItems\n        description\n        onCart @client\n    }\n}\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PRODUCT_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject(), _fragments__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_FRAGMENT"]);
var TOGGLE_CART = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2());
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product/productQueries")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=product.js.28f9b5fa1ae0a388ee9d.hot-update.js.map