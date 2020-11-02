export const setData = (data) => {
  return (dispatch) => {
    dispatch({ type: "SET_DATA", data: data });
  };
};

