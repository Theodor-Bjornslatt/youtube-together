import { createContext, useReducer } from 'react'

const initialState = {
  anAction: 'Action'
}

type GlobalState = typeof initialState

type SetStateAction = { type: 'anAction'; payload: string }

type GlobalContextType = {
  state: GlobalState
  dispatch: (action: SetStateAction) => void
}

export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null
})

const GlobalReducer = (state: GlobalState, action: SetStateAction) => {
  switch (action.type) {
    case 'anAction':
      return {
        ...state,
        anAction: action.payload
      }
    default:
      return { ...state }
  }
}

type ContextProps = {
  children: JSX.Element[]
}

export const GlobalContextProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer<
    (state: GlobalState, action: SetStateAction) => GlobalState
  >(GlobalReducer, {
    ...initialState
  })

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
