'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _storeShape = require('../utils/storeShape');

var _storeShape2 = _interopRequireDefault(_storeShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // FROM: react-redux

// import warning from '../utils/warning'

// let didWarnAboutReceivingStore = false;
// function warnAboutReceivingStore() {
//   if (didWarnAboutReceivingStore) {
//     return;
//   }
//   didWarnAboutReceivingStore = true;

//   warning(
//     '<Provider> does not support changing `store` on the fly. ' +
//     'It is most likely that you see this error because you updated to ' +
//     'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
//     'automatically. See https://github.com/reactjs/react-redux/releases/' +
//     'tag/v2.0.0 for the migration instructions.'
//   );
// }

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { store: this.store };
    }
  }]);

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react.Children.only(children);
    }
  }]);

  return Provider;
}(_react.Component);

// if (process.env.NODE_ENV !== 'production') {
//   Provider.prototype.componentWillReceiveProps = function (nextProps) {
//     const { store } = this;
//     const { store: nextStore } = nextProps;

//     if (store !== nextStore) {
//       warnAboutReceivingStore();
//     }
//   };
// }

exports.default = Provider;
Provider.propTypes = {
  store: _storeShape2.default.isRequired,
  children: _react.PropTypes.element.isRequired
};
Provider.childContextTypes = {
  store: _storeShape2.default.isRequired
};