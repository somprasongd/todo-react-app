import * as types from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case types.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        )
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case types.TOGGLE_TIME:
      console.log(state);

      return {
        ...state,
        isShowTime: !state.isShowTime
      };
    default:
      return state;
  }
};

export default reducer;
