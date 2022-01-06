import { Map } from "immutable";

const initialState = Map({ users: [], total: [], isLoading: false });

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_DATA_IS_LOADING":
      return { ...state, isLoading: true };

    case "FETCH_USERS_DATA":
      return {
        ...state,
        isLoading: false,
        users: action.payload.data.data,
        total: action.payload.data.meta.pagination.total,
      };

    default:
      return state;
  }
};

export default usersReducer;
