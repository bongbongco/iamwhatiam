webpackHotUpdate("static/development/pages/product.js",{

/***/ "./fragments.js":
/*!**********************!*\
  !*** ./fragments.js ***!
  \**********************/
/*! exports provided: PRODUCT_FRAGMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_FRAGMENT", function() { return PRODUCT_FRAGMENT; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n fragment ProductItems on Product{\n    id\n    name\n    detail\n    price\n    onCart @client\n    photo {\n        url\n    }\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PRODUCT_FRAGMENT = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());

/***/ })

})
//# sourceMappingURL=product.js.8451e8c20e2fbd126f3c.hot-update.js.map