export const increment = () => {
      return {
            type: 'INCREMENT', payload: 1,
      };
}

export const decrement = () => {
      return {
            type: 'DECREMENT', payload: 1,
      };
}
export const rescrement = () => {
      return {
            type: 'RESCREMENT', payload: 1
      };
}
