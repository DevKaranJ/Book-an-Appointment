import axios from 'axios';

export const register = (email, password) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  const response = await axios.post('http://localhost:3000/register', {
    email,
    password,
  });
  if (response.status === 200) {
    dispatch({ type: 'REGISTER_SUCCESS', payload: { user: response.data.user } });
  } else {
    dispatch({ type: 'REGISTER_FAILURE', payload: { error: response.data.error } });
  }
};

export const confirm = (confirmationCode) => async (dispatch) => {
    dispatch({ type: 'CONFIRM_REQUEST' });
    const response = await axios.post('http://localhost:3000/confirm', {
      confirmationCode,
    });
    if (response.status === 200) {
      dispatch({ type: 'CONFIRM_SUCCESS' });
    } else {
      dispatch({ type: 'CONFIRM_FAILURE', payload: { error: response.data.error } });
    }
  };

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  const response = await axios.post('http://localhost:3000/login', {
    email,
    password,
  });
  if (response.status === 200) {
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: response.data.user } });
  } else {
    dispatch({ type: 'LOGIN_FAILURE', payload: { error: response.data.error } });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: 'LOGOUT_REQUEST' });
  const response = await axios.post('http://localhost:3000/logout');
  if (response.status === 200) {
    dispatch({ type: 'LOGOUT_SUCCESS' });
  } else {
    dispatch({ type: 'LOGOUT_FAILURE', payload: { error: response.data.error } });
  }
};
