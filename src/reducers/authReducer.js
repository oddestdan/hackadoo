const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
