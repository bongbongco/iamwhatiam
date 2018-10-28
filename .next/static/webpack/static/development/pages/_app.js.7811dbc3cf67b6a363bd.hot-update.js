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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

      var _cache$readQuery = cache.readQuery({
        query: cartQuery
      }),
          cart = _cache$readQuery.cart;

      var newCart;
      var onCart;
      var foundProduct = cart.find(function (aProduct) {
        return aProduct.id === product.id;
      });

      if (foundProduct) {
        var cleanCart = cart.filter(function (aProduct) {
          return aProduct.id !== product.id;
        });
        newCart = cleanCart;
        onCart = false;
      } else {
        newCart = _toConsumableArray(cart).concat([product]);
        onCart = true;
      }

      cache.writeData({
        data: {
          cart: newCart
        }
      });
      cache.writeFragment({
        id: product.id,
        fragment: _fragments__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_FRAGMENT"],
        data: _objectSpread({
          __typename: "Product"
        }, product, {
          onCart: onCart
        })
      });
      return null;
    }
  },
  Product: {
    onCart: function onCart() {
      return false;
    }
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.7811dbc3cf67b6a363bd.hot-update.js.map