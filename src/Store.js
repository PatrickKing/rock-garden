let Node = require('./Node.js');


// storeComponents: array of objects with three properties each:
// key: to be stored under state
// tree: hash to be transformed into immutable nodes
// updater: function which is passed tree and action, when the action is dispatched

let Store = function (storeComponents) {

  let store = {};
  
  let updaters = {};

  let initialTrees = {};
  for (let storeComponent of storeComponents) {

    if (!storeComponent.key || !storeComponent.updater) {
      // TODO improve this
      throw new Error("Missing required store component key or updater.");
    }
    if (initialTrees[storeComponent.key]) {
      throw new Error(`Tried to add store component ${storeComponent.key} but a component with this key already exists`);
    }

    initialTrees[storeComponent.key] = storeComponent.tree || {};
    updaters[storeComponent.key] = storeComponent.updater;

  }

  let trees = Node(initialTrees);

  let dispatching = false;

  store.dispatch = function (action) {
    if (dispatching) {
      throw new Error(`Cannot dispatch while dispatching.`);
    }
    dispatching = true;
    for (let storeKey of store.updaters) {
      updaters[storeKey]( trees[storeKey], action );
    }
    dispatching = false;
  };

  store.getState = function () {
    return trees;
  };


  return store;
};


module.exports = Store;
