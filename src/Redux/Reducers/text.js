import { UPDATE_TEXT } from '../ActionCreators';

const initialState = {
  text: '',
};

function textReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
      });
    default:
      return state;
  }
}

export default textReducer;
