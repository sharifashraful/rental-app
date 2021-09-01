export const reducer = (state, action) => {
  switch (action.type) {
    case "selection_row":
      return {
        ...state,
        selectedRow: action.row
      }

    default:
      return state
  }
}

export const initialState = {
  selectedRow: null
}