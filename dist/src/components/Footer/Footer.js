"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Footer.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("footer", {
        className: "footer"
      }, _react.default.createElement("section", {
        className: "footer__upper"
      }, _react.default.createElement("div", {
        className: "footer__upper__about"
      }, _react.default.createElement("h5", {
        className: "footer__upper__about__heading"
      }, "About"), _react.default.createElement("p", {
        className: "footer__upper__about__paragraph"
      }, "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.")), _react.default.createElement("div", {
        className: "footer__upper__support"
      }, _react.default.createElement("h5", {
        className: "footer__upper__support__heading"
      }, "Support"), _react.default.createElement("ul", {
        className: "footer__upper__support__list"
      }, _react.default.createElement("li", {
        className: "footer__upper__support__list__item"
      }, _react.default.createElement("a", {
        href: "#"
      }, "Customer Support")), _react.default.createElement("li", {
        className: "footer__upper__support__list__item"
      }, _react.default.createElement("a", {
        href: "#"
      }, "Frequently Asked Questions (FAQ)")), _react.default.createElement("li", {
        className: "footer__upper__support__list__item"
      }, _react.default.createElement("a", {
        href: "#"
      }, "Contact")))), _react.default.createElement("div", {
        className: "footer__upper__info"
      }, _react.default.createElement("h5", {
        className: "footer__upper__info__heading"
      }, "Info"), _react.default.createElement("p", {
        className: "footer__upper__info__paragraph"
      }, "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.")), _react.default.createElement("div", {
        className: "footer__upper__background"
      })), _react.default.createElement("section", {
        className: "footer__lower"
      }, _react.default.createElement("p", {
        className: "footer__lower__copyright"
      }, "\xA92019 Copyright, all rights reserved. Dymic Digital."), _react.default.createElement("div", {
        className: "footer__lower__social"
      }), _react.default.createElement("div", {
        className: "footer__lower__background"
      })));
    }
  }]);

  return Footer;
}(_react.Component);

var _default = Footer;
exports.default = _default;

//# sourceMappingURL=Footer.js.map