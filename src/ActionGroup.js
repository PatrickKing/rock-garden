let ActionGroup = function () {

  let actions = {};
  let attributes = {};

  let actionGroup = {};

  actionGroup.add = function (type, attributes = []) {
    if (actions.type) {
      throw new Error(`Action ${type} already exists in ActionGroup.`);
    }

    actions[type] = {
      type: type
    };
    attributes[type] = attributes;
  };

  // Specify a bunch of actions with one call: {type: attributeList}
  actionGroup.addMultiple = function (newActions = {}) {

    // TODO: better error checking... value should be an array
    for (let type in newActions) {
      this.add(type, newActions[type]);
    }
  };

  actionGroup.get = function (type) {
    let action = actions[type];
    if (!action) {
      throw new Error(`Action ${type} does not exist in ActionGroup.`);
    }
    for (let attributeName in attributes[type]) {
      action[attributeName] = null;
    }
    return action;
  };

  return actionGroup;
};


module.exports = ActionGroup;






