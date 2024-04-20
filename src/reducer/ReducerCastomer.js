const defaultState = []



export const reducerCastomer = (state = defaultState, action) => {
      switch (action.type) {
            case "ADD_CASTOMER":
                  return { ...state, }
            case "ADD_CASTOMERS":
                  return { ...state, }
            default:
                  return state
      }

}
