import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import React from 'react';
import PB, { login } from "../api";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return { token: null, email: '' };
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        user: action.payload.user,
        email: action.payload.email,
      };
    case 'update':
      return {
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      // get the token from the storage
      return state;
  }
};

const signup = dispatch => {
  return ({ email, password }) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return async ({ email, password }) => {
    // Do some API Request here
    console.log('Signin', email, password);
    const { record, token } = await login(email, password);
    // save the token to the state
    PB.authStore.save(token, record);

    console.log('Signin', record, token)

    dispatch({
      type: 'signin',
      payload: {
        token: token,
        user: record,
        email,
      },
    });
  };
};

const update = dispatch => {
  return async () => {
    // Do some API Request here
    const userData = await AsyncStorage.getItem("pb_auth");

    console.log('Update', userData)
    // save the token to the state
    dispatch({
      type: 'update',
      payload: {
        token: userData.token,
        user: userData.model,
      },
    });
  };
};

const signout = dispatch => {
  return () => {
    dispatch({ type: 'signout' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, update },
  {
    token: null,
    email: null,
    user: null,
  }
);