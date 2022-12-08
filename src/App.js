import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Router from './routes/Router'
import { GlobalStyle } from './GlobalStyle.styled'
import { GlobalContext } from './contexts/GlobalContext'
import { tokenTxt } from './constants/texts'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=>{
    const token = window.localStorage.getItem(tokenTxt)
    if(token){
      setIsAuth(true)
    }

  },[])


  const context = {
    isAuth,
    setIsAuth
  }

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  )
}

export default App