import { useEffect, createContext, useReducer } from 'react'

import { useWindowSize } from '../hooks/useWindowSize'

const initialState = {
  windowWidth: 0
}

type GlobalState = typeof initialState

type SetStateAction = { type: 'windowWidth'; payload: number }

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
  const windowSize = useWindowSize()
  useEffect(() => {
    dispatch({ type: 'windowWidth', payload: windowSize.width })
    console.log(windowSize)
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
