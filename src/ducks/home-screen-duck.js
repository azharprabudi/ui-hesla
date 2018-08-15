const initialState = {
  loading: false,
  data: []
};

export const SET_SINGLE_STATE_HOMESCREEN = "SET_SINGLE_STATE_HOMESCREEN";
export const SUCCESS_GET_DATA_HOMESCREEN = "SUCCESS_GET_DATA_HOMESCREEN";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_STATE_HOMESCREEN:
      return {
        ...state,
        [action.payload.stateName]: action.payload.value
      };

    case SUCCESS_GET_DATA_HOMESCREEN:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export const doSetSingleStateHomeScreen = (stateName, value) => ({
  type: SET_SINGLE_STATE_HOMESCREEN,
  payload: {
    stateName,
    value
  }
});

export const successGetDataHomeScreen = data => ({
  type: SUCCESS_GET_DATA_HOMESCREEN,
  payload: { data }
});
