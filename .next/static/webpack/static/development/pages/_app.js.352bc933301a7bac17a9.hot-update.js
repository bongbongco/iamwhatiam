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
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            {\n                cart @client {\n                    id\n                }\n            }\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                ", " \n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var defaults = {
  cart: []
};
var resolvers = {
  Mutation: {
    toggleProduct: function toggleProduct(_, variables, _ref) {
      var cache = _ref.cache,
          getCacheKey = _ref.getCacheKey;
      var id = getCacheKey({
        __typename: "Product",
        id: variables.id
      });
      var fragment = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject(), _fragments__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_FRAGMENT"]);
      var product = cache.readFragment({
        fragment: fragment,
        id: id
      });
      var cartQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2());
      var cartCache = cache.readQuery({
        query: cartQuery
      });
      console.log(cartCache);
    }
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.352bc933301a7bac17a9.hot-update.js.map