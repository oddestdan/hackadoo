import * as types from './types';
import axios from 'axios';
import setToken from '../utils/setToken';

export const getUser = () => async (dispatch) => {
  localStorage.token && setToken(localStorage.token);
  try {
    const res = await axios.get('http://localhost:5000/api/auth/user_info');
    dispatch({ type: types.USER_LOADED, payload: res.data });
  } catch (e) {
    dispatch({ type: types.AUTH_ERROR });
  }
};

export const register = (registerData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      'http://localhost:5000/api/auth/register',
      registerData,
      config
    );
    console.log(res);
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({
      type: types.REGISTER_FAIL,
      payload: e.response.data.msg,
    });
  }
};
