"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PurchaseOption = _interopRequireDefault(require("./PurchaseOption"));

require("./Scss/PurchaseOptions.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PurchaseOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(PurchaseOptions, _Component);

  function PurchaseOptions(props) {
    var _this;

    _classCallCheck(this, PurchaseOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PurchaseOptions).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.state = {
      cardActive: '2'
    };
    return _this;
  }

  _createClass(PurchaseOptions, [{
    key: "handleClick",
    value: function handleClick(cardKey) {
      if (cardKey !== this.state.cardActive) {
        this.setState({
          cardActive: cardKey
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("section", {
        className: "purchaseoptions"
      }, _react.default.createElement("h2", {
        className: "purchaseoptions__h2"
      }, "Etiam sit amet orci"), _react.default.createElement("p", {
        className: "purchaseoptions__p"
      }, "Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."), _react.default.createElement("div", {
        className: "purchaseoptions__items"
      }, _react.default.createElement(_PurchaseOption.default, {
        optionTitle: "Lorem ipsum",
        optionCost: "33",
        optionDescription: "Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.",
        optionButton: "Purchase Now",
        itemKey: "1",
        activeKey: this.state.cardActive,
        clicked: this.handleClick
      }), _react.default.createElement(_PurchaseOption.default, {
        optionTitle: "Lorem ipsum",
        optionCost: "66",
        optionDescription: "Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.",
        optionButton: "Purchase Now",
        itemKey: "2",
        activeKey: this.state.cardActive,
        clicked: this.handleClick
      }), _react.default.createElement(_PurchaseOption.default, {
        optionTitle: "Lorem ipsum",
        optionCost: "99",
        optionDescription: "Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.",
        optionButton: "Purchase Now",
        itemKey: "3",
        activeKey: this.state.cardActive,
        clicked: this.handleClick
      })));
    }
  }]);

  return PurchaseOptions;
}(_react.Component);

var _default = PurchaseOptions;
exports.default = _default;

//# sourceMappingURL=PurchaseOptions.js.map