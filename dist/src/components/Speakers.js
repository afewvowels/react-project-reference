"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Speaker = _interopRequireDefault(require("./Speaker.js"));

require("./Scss/Speakers.min.css");

var _speaker = _interopRequireDefault(require("../img/speaker1.jpg"));

var _speaker2 = _interopRequireDefault(require("../img/speaker2.jpg"));

var _speaker3 = _interopRequireDefault(require("../img/speaker3.jpg"));

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

var Speakers =
/*#__PURE__*/
function (_Component) {
  _inherits(Speakers, _Component);

  function Speakers() {
    _classCallCheck(this, Speakers);

    return _possibleConstructorReturn(this, _getPrototypeOf(Speakers).apply(this, arguments));
  }

  _createClass(Speakers, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("section", {
        className: "speakers"
      }, _react.default.createElement("div", {
        className: "speakers__headings"
      }, _react.default.createElement("h2", {
        className: "speakers__headings__h2 animated fadeInLeft"
      }, "Lorem Ipsum"), _react.default.createElement("p", {
        className: "speakers__headings__p animated fadeIn delay-1s"
      }, "Donec quam felis, ultricies nec, pellentesque eu, pretium quis")), _react.default.createElement("article", {
        className: "speakers__cards animated fadeInUp"
      }, _react.default.createElement(_Speaker.default, {
        speakerImage: _speaker.default,
        speakerImageAlt: "heroic image of speaker 1",
        speakerName: "Lori Jane",
        speakerJob: "Digital Guru",
        speakerDescription: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."
      }), _react.default.createElement(_Speaker.default, {
        speakerImage: _speaker2.default,
        speakerImageAlt: "heroic image of speaker 2",
        speakerName: "Georgia Doe",
        speakerJob: "Social Media Ninja",
        speakerDescription: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."
      }), _react.default.createElement(_Speaker.default, {
        speakerImage: _speaker3.default,
        speakerImageAlt: "heroic image of speaker 3",
        speakerName: "Sven Svenson",
        speakerJob: "Agile Project Lead",
        speakerDescription: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
      })));
    }
  }]);

  return Speakers;
}(_react.Component);

var _default = Speakers;
exports.default = _default;

//# sourceMappingURL=Speakers.js.map