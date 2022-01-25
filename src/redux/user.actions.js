const userActionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE"
};

const userActions = {
  add: (userObj) => ({ type: userActionTypes.ADD, payload: userObj }),
  remove: (email) => ({ type: userActionTypes.REMOVE, payload: email })
};

export { userActionTypes, userActions };
