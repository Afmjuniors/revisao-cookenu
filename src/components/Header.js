import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenTxt } from '../constants/texts'
import { goToLoginPage } from '../routes/coordinator'

const Header = () => {
    const navigate = useNavigate()
    const logout = () =>{
        window.localStorage.removeItem(tokenTxt)
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