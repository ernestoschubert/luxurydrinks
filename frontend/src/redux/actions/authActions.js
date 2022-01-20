import axios from "axios";
import Swal from "sweetalert2";

const authActions = {
  signUpUser: (newUser) => {
    return async (dispatch, getState) => {
      const res = await axios.post(
        "https://luxurydrinks.herokuapp.com/api/user/signup",
        newUser
      );
      if (res.data.success && !res.data.error) {
        localStorage.setItem("token", res.data.response.token);
        dispatch({
          type: "LOG_USER",
          payload: {
            _id: res.data.response.newUser._id,
            token: res.data.response.token,
            userImg: res.data.response.newUser.userImg,
            firstName: res.data.response.newUser.firstName,
            role: res.data.response.newUser.role,
          },
        });
        return res;
      } else {
        console.error(res);
        return res;
      }
    };
  },
  signInUser: (logUser) => {
    return async (dispatch, getState) => {
      const res = await axios.post("https://luxurydrinks.herokuapp.com/api/user/login", {
        ...logUser,
      });
      console.log(res)
      if (res.data.success && !res.data.error) {
        localStorage.setItem("token", res.data.response.token);
        dispatch({
          type: "LOG_USER",
          payload: {
            _id: res.data.response._id,
            token: res.data.response.token,
            userImg: res.data.response.img,
            firstName: res.data.response.firstName,
            role: res.data.response.role,
          },
        });
        return res;
      } else {
        console.log(res);
        return res;
      }
    };
  },
  logOut: () => {
    return async (dispatch, getState) => {
      dispatch({ type: "LOG_OUT" });
    };
  },
  authUser: (token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get(
          "https://luxurydrinks.herokuapp.com/api/user/auth",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        const authUser = response.data.response;
        authUser.token = token;
        dispatch({ type: "LOG_USER", payload: authUser });
      } catch (error) {
        console.error(error);
        return dispatch({ type: "LOG_OUT" });
      }
    };
  },
  getUsers: () => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://luxurydrinks.herokuapp.com/api/admin/users", {
          headers: { Authorization: "Bearer " + token },
        });
        dispatch({ type: "GET_USERS", payload: res.data.users });
        return res.data.users;
      } catch (error) {
        return { msg: "Unauthorized" };
      }
    };
  },
  deleteUser: (userId) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.delete(
          `https://luxurydrinks.herokuapp.com/api/admin/user/${userId}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(res);
        dispatch({ type: "DELETE_USER", payload: res.data.deletedId });

        if (res.data.msg) {
          Swal.fire({
            title: "Borrado de la BD!",
            position: "center",
            background: "black",
            color: "white",
            toast: true,
          });
        }

        return res.data.users;
      } catch (error) {
        return { msg: "You must be login" };
      }
    };
  },
  editUser: (id, newInfo, token) => {
    return async (dispatch, getState) => {
      const res = await axios.put(
        `https://luxurydrinks.herokuapp.com/api/admin/user/` + id,
        { newInfo },
        { headers: { Authorization: "Bearer " + token } }
      );
      if (res.data.success) {
        return res.data;
      } else {
        console.error("error");
      }
    };
  },
};

export default authActions;
