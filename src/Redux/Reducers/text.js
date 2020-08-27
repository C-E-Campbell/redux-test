const initialState = {
  text: '',
};

export default function textReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return Object.assign({}, state, {
        text: action.payload,
      });
    default:
      return state;
  }
}
