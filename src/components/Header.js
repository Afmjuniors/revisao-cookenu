import { Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenTxt } from '../constants/texts'
import { GlobalContext } from '../contexts/GlobalContext'
import { goToLoginPage } from '../routes/coordinator'

const Header = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const logout = () =>{
        window.localStorage.removeItem(tokenTxt)
        context.setAuth(false)
        goToLoginPage(navigate)
    }
  return (
    <Flex 
    bg={"blue.100"} 
    justifyContent={"end"}
    h={20}
    alignItems={"center"}
    paddingRight={8}
    paddingLeft={8}>
        <Button onClick={logout} colorScheme="red">Deslogar</Button>
    </Flex>
  )
}

export default Header