

function defineImmutableProperty(node, name, structure) {

  // TODO: check that we are using this on an object, and NOT a string or array
  let reference = Node(structure);

  Object.defineProperty(node, name, {
    get: function () {
      return reference;
    },
    set: function () {
      throw new Error(`Cannot set attribute ${name} on RockGarden Node.`);
    },
    enumerable: true
  });

}

// TODO: I probably shouldn't call it this
let Node = function (structure) {

  let node = {};
  // TODO: set prototype here...

  for (let name in structure) {

    if (structure.hasOwnProperty( name ) ) {
      defineImmutableProperty(node, name, structure[name]);

    } 
  }

  return node;

};






module.exports = Node;
