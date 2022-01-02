import axios from "axios";

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
  };
};

export const fetchUsersData =
  (pageNo = 1) =>
  async (dispatch, getState) => {
    console.log("pageNo", pageNo);
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users?page=${pageNo}`
    );
    //const data = await res.data.data;
    console.log("data", res);
    dispatch({
      type: "FETCH_USERS_DATA",
      payload: res,
    });
  };
