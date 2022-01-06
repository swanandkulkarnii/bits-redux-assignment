import axios from "axios";

export const fetchUsersData =
  (pageNo = 1) =>
  async (dispatch) => {
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users?page=${pageNo}`
    );

    dispatch({
      type: "FETCH_USERS_DATA",
      payload: res,
    });
  };

export const loadingData = () => {
  return {
    type: "USERS_DATA_IS_LOADING",
  };
};
