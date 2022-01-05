import { Map } from "immutable";

const initialState = Map({ users: [], total: [] });

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_DATA":
      return {
        ...state,
        users: action.payload.data.data,
        total: action.payload.data.meta.pagination.total,
      };

    default:
      return state;
  }
};

export default usersReducer;
