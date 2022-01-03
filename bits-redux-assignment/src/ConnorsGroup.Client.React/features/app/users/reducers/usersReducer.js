import { Map } from "immutable";

const initialState = Map({ users: [], total: [] });

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_DATA":
      console.log("action.payload", action.payload);
      //state.set("users", action.payload.data.data);
      //state.set("total", action.payload.data.meta.pagination.total);
      return {
        ...state,
        users: action.payload.data.data,
        total: action.payload.data.meta.pagination.total,
      };

    default:
      console.log("default", state);
      return state;
  }
};

export default usersReducer;
