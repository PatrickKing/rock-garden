'use strict';

var Node = require('./Node.js');

var Store = function Store(structure) {

  this.state = Node(structure);
};

Store.prototype.getState = function () {};

// get state ?
// add 'reducer'
// dispatch


module.exports = Store;