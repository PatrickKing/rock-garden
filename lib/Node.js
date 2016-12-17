"use strict";

function defineImmutableProperty(node, name, structure) {

  // TODO: check that we are using this on an object, and NOT a string or array
  var reference = Node(structure);

  Object.defineProperty(node, name, {
    get: function get() {
      return reference;
    },
    set: function set() {
      throw new Error("Cannot set attribute " + name + " on RockGarden Node.");
    },
    enumerable: true
  });
}

// TODO: I probably shouldn't call it this
var Node = function Node(structure) {

  var node = {};
  // TODO: set prototype here...

  for (var name in structure) {

    if (structure.hasOwnProperty(name)) {
      defineImmutableProperty(node, name, structure[name]);
    }
  }

  return node;
};

module.exports = Node;