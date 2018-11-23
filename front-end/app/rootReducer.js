const initialState = { test: false };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST': {
      return {
        ...state,
        test: true
      }
    }
  }
  return state;
}
