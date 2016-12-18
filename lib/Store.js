"use strict";

var Node = require('./Node.js');

// storeComponents: array of objects with three properties each:
// key: to be stored under state
// tree: hash to be transformed into immutable nodes
// updater: function which is passed tree and action, when the action is dispatched

var Store = function Store(storeComponents) {

  var store = {};

  var updaters = {};

  var initialTrees = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = storeComponents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var storeComponent = _step.value;


      if (!storeComponent.key || !storeComponent.updater) {
        // TODO improve this
        throw new Error("Missing required store component key or updater.");
      }
      if (initialTrees[storeComponent.key]) {
        throw new Error("Tried to add store component " + storeComponent.key + " but a component with this key already exists");
      }

      initialTrees[storeComponent.key] = storeComponent.tree || {};
      updaters[storeComponent.key] = storeComponent.updater;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var trees = Node(initialTrees);

  var dispatching = false;

  store.dispatch = function (action) {
    if (dispatching) {
      throw new Error("Cannot dispatch while dispatching.");
    }
    dispatching = true;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = store.updaters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var storeKey = _step2.value;

        updaters[storeKey](trees[storeKey], action);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    dispatching = false;
  };

  store.getState = function () {
    return trees;
  };

  return store;
};

module.exports = Store;