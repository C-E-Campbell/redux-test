import { UPDATE_TEXT, updateText } from '../ActionCreators';

const intialState = {
  text: '',
};

function textReducer(state = intialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
      });
    default:
      return state;
  }
}
