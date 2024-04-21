const defaultState = []



export const reducerCastomer = (state = defaultState, action) => {
      switch (action.type) {
            case "ADD_CASTOMER":
                  return { ...state, state: action.payload }
            case "ADD_CASTOMERS":
                  return { ...state, state: action.payload }
            default:
                  return state;
      }

}
