webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/indexPresenter.js":
/*!***************************************!*\
  !*** ./pages/index/indexPresenter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ProductCard */ "./components/ProductCard.js");







var Content = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Content;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Home | IamwhatIam Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    centerColumn: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "IamwhatIam Store"),
    rightColumn: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/cart",
      text: "Cart",
      btnIcon: "shopping-cart"
    }),
    leftColumn: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/search",
      text: "Search",
      btnIcon: "search"
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    style: {
      padding: "0 50px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "grid",
      gridGap: "10px",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      width: "100%"
    }
  }, data && data.categories && data.categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: category.id,
      href: "category?name=".concat(category.name.toLowerCase()),
      hrefAs: "category/".concat(category.name.toLowerCase()),
      text: category.name
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "50px"
    }
  }, data && data.onSale && data.onSale.length !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "On Sale"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "grid",
      gridGap: "10px",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      width: "100%"
    }
  }, data && data.onSale && data.onSale.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: product.id,
      id: product.id,
      name: product.name,
      subtitle: product.detail,
      price: product.price,
      photoUrl: product.photo.url
    });
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "50px"
    }
  }, data && data.allProducts && data.allProducts.length !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "all Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "grid",
      gridGap: "10px",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      width: "100%"
    }
  }, data && data.allProducts && data.allProducts.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: product.id,
      id: product.id,
      name: product.name,
      subtitle: product.detail,
      price: product.price,
      photoUrl: product.photo.url
    });
  })))));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index/indexPresenter")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.897c493ef4848f47e571.hot-update.js.map