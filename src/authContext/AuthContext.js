import React, { useReducer, createContext } from 'react';
import axios from 'axios';

import AuthReducer from './AuthReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
} from './AuthTypes';
import setToken from '../utils/setToken';
import { beApiUrl } from '../environment';

export const AuthContext = createContext({});

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //* get user
  const getUser = async () => {
    localStorage.token && setToken(localStorage.token);
    try {
      const res = await axios.get(`${beApiUrl}/user`);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (e) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  //* register user
  const register = async (registerData) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/register`,
        registerData,
        config
      );
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({
        type: REGISTER_FAIL,
        payload: e.response.data.msg,
      });
    }
  };

  //* login user
  const login = async (registerData) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${beApiUrl}/login`, registerData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      await getUser();
    } catch (e) {
      dispatch({
        type: LOGIN_FAIL,
        payload: e.response.data.msg,
      });
    }
  };

  const logOut = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        getUser,
        logOut,

        state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
