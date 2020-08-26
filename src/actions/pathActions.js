export const pathActionTypes = {
  SET_PATH: 'SET_PATH',
};

export const setPath = (path) => ({
  type: pathActionTypes.SET_PATH,
  payload: { path },
});
