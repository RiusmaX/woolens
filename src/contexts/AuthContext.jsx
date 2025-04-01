import React, { createContext, useReducer, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  ERROR: 'ERROR',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING'
}

const initialState = {
  woocommerce: {
    url: null,
    consumerKey: null,
    consumerSecret: null
  },
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initialState,
        woocommerce: {
          url: action.data.url,
          consumerKey: action.data.consumerKey,
          consumerSecret: action.data.consumerSecret
        }
      }
    case actionTypes.ERROR:
      return {
        ...initialState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      return initialState
    case actionTypes.LOADING:
      return {
        ...initialState, loading: true
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const ContextFactory = (dispatch) => ({
  loginUser: async (credentials) => {
    try {
      // const data = await login(credentials)
      // if (data.user && data.jwt) {
      //   dispatch({
      //     type: actionTypes.LOGIN,
      //     data: { user: data.user, token: data.jwt }
      //   })
      // }
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        data: { error: error.message }
      })
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
})

const persistAuth = async (state) => {
  try {
    await AsyncStorage.setItem('@auth', JSON.stringify(state))
  } catch (error) {
    console.error(error)
  }
}

const rehydrateAuth = async () => {
  try {
    const persistedState = await AsyncStorage.getItem('@auth')
    if (persistedState) {
      return JSON.parse(persistedState)
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    const loadStoredState = async () => {
      dispatch({ type: actionTypes.LOADING })
      const storedState = await rehydrateAuth()
      if (storedState) {
        dispatch({
          type: actionTypes.LOGIN,
          data: {
            url: storedState.woocommerce.url,
            consumerKey: storedState.woocommerce.consumerKey,
            consumerSecret: storedState.woocommerce.consumerSecret
          }
        })
      } else {
        dispatch({ type: actionTypes.LOGOUT })
      }
    }
    loadStoredState()
  }, [])

  useEffect(() => {
    const save = async (state) => {
      await persistAuth(state)
    }
    save(state)
  }, [state])

  return <AuthContext.Provider value={{ state, ...ContextFactory(dispatch) }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  actionTypes,
  AuthProvider,
  useAuth
}
