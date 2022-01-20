import { useEffect, createContext, useReducer } from 'react'

import { MovedItemInfo } from '../types'
import { useWindowSize } from '../hooks/useWindowSize'

export type User = {
  _id?: string
  username: string
  email: string
  color: string
}

const initialState = {
  windowWidth: 0,
  loggedIn: false,
  movedItemInfo: { item: undefined, newIndex: undefined },
  defaultUsername: `Guest#${(Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1)}`
}

type GlobalState = {
  windowWidth: number
  loggedIn: boolean
  defaultUsername: string
  movedItemInfo: MovedItemInfo
}

type SetStateAction =
  | { type: 'windowWidth'; payload: number }
  | { type: 'loggedIn'; payload: boolean }
  | { type: 'movedItemInfo'; payload: MovedItemInfo }

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
        loggedIn: action.payload
      }
    case 'movedItemInfo':
      return {
        ...state,
        movedItemInfo: action.payload
      }

    default:
      return { ...state }
  }
}

type ContextProps = {
  isLoggedIn: boolean
  children: JSX.Element[] | JSX.Element
}

export const GlobalContextProvider = ({
  isLoggedIn,
  children
}: ContextProps) => {
  const windowSize = useWindowSize()
  useEffect(() => {
    dispatch({ type: 'windowWidth', payload: windowSize.width })
  }, [windowSize])

  useEffect(() => {
    dispatch({ type: 'loggedIn', payload: isLoggedIn })
  }, [isLoggedIn])

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
