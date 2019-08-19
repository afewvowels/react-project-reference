"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DetailItem = _interopRequireDefault(require("./DetailItem.js"));

require("./Scss/Details.min.css");

var _identicon = _interopRequireDefault(require("../img/identicon1.png"));

var _identicon2 = _interopRequireDefault(require("../img/identicon2.png"));

var _identicon3 = _interopRequireDefault(require("../img/identicon3.png"));

var _identicon4 = _interopRequireDefault(require("../img/identicon4.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Details =
/*#__PURE__*/
function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, _getPrototypeOf(Details).apply(this, arguments));
  }

  _createClass(Details, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("section", {
        className: "details"
      }, _react.default.createElement("h3", {
        className: "details__h3"
      }, "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."), _react.default.createElement("article", {
        className: "details__items"
      }, _react.default.createElement(_DetailItem.default, {
        detailImage: _identicon.default,
        detailImageAlt: "Identicon hased from a word",
        detailTitle: "Vestibulum purus",
        detailDescription: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
      }), _react.default.createElement(_DetailItem.default, {
        detailImage: _identicon2.default,
        detailImageAlt: "Identicon hased from a word",
        detailTitle: "Phasellus consectetuer",
        detailDescription: "Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc."
      }), _react.default.createElement(_DetailItem.default, {
        detailImage: _identicon3.default,
        detailImageAlt: "Identicon hased from a word",
        detailTitle: "Sed consequat leo",
        detailDescription: "Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus."
      }), _react.default.createElement(_DetailItem.default, {
        detailImage: _identicon4.default,
        detailImageAlt: "Identicon hased from a word",
        detailTitle: "Integer ante arcu",
        detailDescription: "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
      })));
    }
  }]);

  return Details;
}(_react.Component);

var _default = Details;
exports.default = _default;

//# sourceMappingURL=Details.js.map