/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    // to create the contact
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
      // to remove the contact
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id)
    default:
      return state;
  }
};

// we are returning a new state
// new state = original state + new contact data
