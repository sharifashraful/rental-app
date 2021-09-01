import React from "react"
import { reducer, initialState } from "./rentalGridReducer"

export const RentalGridContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const RentalGridProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <RentalGridContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </RentalGridContext.Provider>
  )
}