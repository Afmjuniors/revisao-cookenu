import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    ScaleFade,
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  const  RecipeCard = ({recipe}) => {
    return (
      <ScaleFade initialScale={0.9} in={true}>
      <Center py={12}>
        <Box
        cursor={"pointer"}
        _hover={{
                        transform: "scale(1.1)",
                        transition: "all .3s ease"
                    }}
        
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={recipe.imageUrl}
            />
         
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Brand
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {recipe.title}
            </Heading>
            
          </Stack>
        </Box>
      </Center>
      </ScaleFade>
    );
  }
  export default RecipeCard