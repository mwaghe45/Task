import * as types from "./actionType";

import axios from "axios";

const getusers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const addedusers = () => ({
  type: types.ADD_USER,
});
const updatedusers = () => ({
  type: types.UPDATE_USER,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});
// const userSearch = () => ({
//   type: types.SEARCH_USER,
// });
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        dispatch(getusers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
        alert("User Delete Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addusers = (data) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, data)
      .then((res) => {
        dispatch(addedusers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateusers = (data, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, data)
      .then((res) => {
        dispatch(updatedusers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const serchUsers = (search) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}?q=${search}`)
      .then((res) => {
        dispatch(getusers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
