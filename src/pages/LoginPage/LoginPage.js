import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from "axios"
import { BASE_URL } from '../../constants/url';
import { tokenTxt } from '../../constants/texts';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToSignUpPage} from "../../routes/coordinator"

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [form, handleOnChangeForm] = useForm({ email: "", password: "" })

    const login = async () => {
        try {
            setIsLoading(true)
            const body = {
                email: form.email,
                password: form.password
            }
            const response = await axios.post(
                `${BASE_URL}/user/login`, body)
            window.localStorage.setItem(tokenTxt, response.data.token)
            setIsLoading(false)
            goToHomePage(navigate)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Entrar na sua conta</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Para aproveitar as melhores receitas Cookenu ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email"
                                autoComplete='off'
                                name="email"
                                value={form.email}
                                onChange={handleOnChangeForm} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password"
                                name="password"
                                value={form.password}
                                onChange={handleOnChangeForm} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button
                                onClick={login}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                {
                                    isLoading ? <Spinner /> : "Entrar"
                                }

                            </Button>
                            <Stack paddingTop={4} paddingBottom={4}>

                            <Text align="center">Não tem cadastro? <Link color={'blue.400'} onClick={()=>goToSignUpPage(navigate)} >Cadastra-se</Link></Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>


        </Flex>
    );
}

export default LoginPage