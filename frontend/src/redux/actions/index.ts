export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrorsAction = ({ response }) => {
  return {
    type: RECEIVE_ERRORS,
    errors: response.data?.errors || [
      "Something went wrong. Try again shortly."
    ]
  };
};
