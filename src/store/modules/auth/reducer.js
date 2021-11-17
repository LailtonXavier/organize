import * as types from '../types';

const initialState = {
  user: {},
  isLoggedIn: false,
  token: false,
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CONTACT_REQUEST: {
      const newState = { ...state };
      return newState;
    }
    case types.CONTACT_SUCCESS: {
      const newState = { ...state };
      return newState;
    }
    case types.CONTACT_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
}
