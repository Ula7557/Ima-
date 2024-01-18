const initialState = {
  test: "",
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TEST":
      return {
        ...state,
        test: payload,
      };

    default:
      return state;
  }
};
