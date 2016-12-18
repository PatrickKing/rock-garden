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
  for (var i = 0; i < storeComponents.length; i++) {
    var storeComponent = storeComponents[i];

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

  var trees = Node(initialTrees);

  var dispatching = false;

  store.dispatch = function (action) {
    if (dispatching) {
      throw new Error("Cannot dispatch while dispatching.");
    }
    dispatching = true;
    for (var key in updaters) {
      updaters[key](trees[key], action);
    }
    dispatching = false;
  };

  store.getState = function () {
    return trees;
  };

  return store;
};

module.exports = Store;