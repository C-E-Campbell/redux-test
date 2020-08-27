import { UPDATE_TEXT } from '../ActionCreators';

const initialState = {
  text: 'Hello',
};

function textReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
      });
    default:
      return initialState;
  }
}

export default textReducer;
