import { useEffect, createContext, useReducer } from 'react'

import { useWindowSize } from '../hooks/useWindowSize'

export type User = {
  _id?: string
  username: string
  email: string
  color: string
}

const initialState = {
  windowWidth: 0,
  loggedIn: false
}

type GlobalState = {
  windowWidth: number
  loggedIn: boolean
}

type SetStateAction =
  | { type: 'windowWidth'; payload: number }
  | { type: 'loggedIn'; payload: boolean }

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
    case 'windowWidth':
      return {
        ...state,
        windowWidth: action.payload
      }
    case 'loggedIn':
      return {
        ...state,
        user: action.payload
      }
    default:
      return { ...state }
  }
}

type ContextProps = {
  children: JSX.Element[] | JSX.Element
}

export const GlobalContextProvider = ({ children }: ContextProps) => {
  const windowSize = useWindowSize()
  useEffect(() => {
    dispatch({ type: 'windowWidth', payload: windowSize.width })
  }, [windowSize])

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
