webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./resolvers.js":
/*!**********************!*\
  !*** ./resolvers.js ***!
  \**********************/
/*! exports provided: defaults, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./fragments.js");


var defaults = {
  cart: []
};
var resolvers = {
  Mutation: {
    toggleProduct: function toggleProduct(_, variables, _ref) {
      var caches = _ref.caches,
          getCacheKey = _ref.getCacheKey;
      var id = getCacheKey({
        __typename: "Product",
        id: variables.id
      });
      console.log(id);
    }
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.62736c71de93c149e4a7.hot-update.js.map