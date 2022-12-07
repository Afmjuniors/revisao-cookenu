import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
  
  const LoginPage = () => {
    const [form, handleOnChangeForm] = useForm({email:"", password:""})

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
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
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
                name="email"
                 value={form.email} 
                 onChange={handleOnChangeForm} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" 
                name="password" 
                value={form.password} 
                onChange={handleOnChangeForm}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Lembre me</Checkbox>
                  <Link color={'blue.400'}>Esqueceu a senha?</Link>
                </Stack>
                <Button
                onClick={()=>console.log(form)}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default  LoginPage