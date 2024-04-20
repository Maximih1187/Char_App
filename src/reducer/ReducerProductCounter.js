
const defaultState = {
      counter: 1,
}

export const reducerCounter = (state = defaultState, action) => {
      switch (action.type) {
            case "INCREMENT":
                  return { ...state, counter: state.counter + action.payload }
            case "DECREMENT":
                  return { ...state, counter: state.counter - action.payload }

            case "RESCREMENT":
                  return { ...state, counter: state.counter = action.payload }
            default:
                  return state;
      }

}
