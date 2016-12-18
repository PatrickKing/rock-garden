"use strict";

var ActionGroup = function ActionGroup() {

  var actions = {};
  var attributes = {};

  var actionGroup = {};

  actionGroup.add = function (type) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (actions.type) {
      throw new Error("Action " + type + " already exists in ActionGroup.");
    }

    actions[type] = {
      type: type
    };
    attributes[type] = attributes;
  };

  // Specify a bunch of actions with one call: {type: attributeList}
  actionGroup.addMultiple = function () {
    var newActions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    // TODO: better error checking... value should be an array
    for (var type in newActions) {
      this.add(type, newActions[type]);
    }
  };

  actionGroup.get = function (type) {
    var action = actions[type];
    if (!action) {
      throw new Error("Action " + type + " does not exist in ActionGroup.");
    }
    for (var attributeName in attributes[type]) {
      action[attributeName] = null;
    }
    return action;
  };

  return actionGroup;
};

module.exports = ActionGroup;