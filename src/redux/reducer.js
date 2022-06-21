import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
    case types.ADD_USER:
    case types.UPDATE_USER:
    default:
      return state;
  }
};

export default userReducer;
