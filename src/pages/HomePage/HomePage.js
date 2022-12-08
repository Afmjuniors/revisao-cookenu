import { Flex, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { tokenTxt } from '../../constants/texts'
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToLoginPage } from '../../routes/coordinator'
import RecipeCard from './RecipeCard'

const HomePage = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const [recipies, setRecipies] = useState([])


useEffect(()=>{
   

        if(!context.isAuth)
        {
            goToLoginPage(navigate)
        }
    },[])
    useEffect(()=>{
        fetchRecipes()
    },[])

    const fetchRecipes = async () =>{
        try {
            const config ={
                headers:{
                    Authorization: window.localStorage.getItem(tokenTxt)
                }
            }
            const response = await axios.get(`${BASE_URL}/recipe/all`,config)
           setRecipies(response.data)

            
        } catch (error) {
            console.log(error)
        }
    }
    


  return (
    <>
    <Header />
   <Flex flexDir={'column'} paddingTop={4} >
    <Heading>Receitas Cookenu</Heading>
    <Flex flexWrap={"wrap"} justifyContent={"space-between"}>
    {recipies.map((recipe)=><RecipeCard key={recipe.id} recipe={recipe}/>)}
    </Flex>


   </Flex>
    </>
  )
}

export default HomePage