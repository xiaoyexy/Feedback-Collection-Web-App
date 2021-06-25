import { bindActionCreators } from "redux";
import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      // if user logged in, payload is a user object, otherwise empty string
      return action.payload || false;

    default:
      return state;
  }
}
