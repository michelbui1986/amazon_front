export const getProducts = () => async (dispatch) => {
  try {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/getproducts`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const res = await data.json();
    console.log(res);
    dispatch({ type: "SUCCESS_GET_PRODUCT", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCT", payload: error.response });
  }
};
