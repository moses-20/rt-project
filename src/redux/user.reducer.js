import { userActionTypes } from "./user.actions";

function userReducer(state, action) {
  switch (action.type) {
    case userActionTypes.ADD:
      return [...state, action.payload];
    case userActionTypes.REMOVE:
      return state.filter((person) => person.email !== action.payload);
    default:
      return state;
  }
}

export default userReducer;
