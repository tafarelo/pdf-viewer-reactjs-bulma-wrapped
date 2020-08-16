'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pdfViewerReactjs = require('pdf-viewer-reactjs');

var _pdfViewerReactjs2 = _interopRequireDefault(_pdfViewerReactjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pdfViewerReactjs2.default.defaultProps.css = 'bulma container text-center';

exports.default = _pdfViewerReactjs2.default;