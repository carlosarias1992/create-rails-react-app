import { RECEIVE_ERRORS } from "../../actions";
import { BaseAction } from "../../../types";

interface ErrorsAction extends BaseAction {
  errors?: string[];
}

export default (state = [], action: ErrorsAction) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
