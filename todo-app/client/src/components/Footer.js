import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <div>

            <Stack spacing={{ base: '4', md: '5', }} mt="5px">

               <Center>
               <Flex mt="5px">
                   
                   <Box p='4' >
                    <Link href='https://github.com/sinemagar' isExternal>
                    <Image width="40px" src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' />
                </Link>
                    </Box>
                    
                    <Box p='4'>
                    <Link href='https://www.linkedin.com/in/sinemagar/' isExternal >
                    <Image width="40px" src='https://cdn-icons-png.flaticon.com/512/49/49408.png' />

                </Link>
                    </Box>
                  
                </Flex>
               </Center>

               
                

                <Center>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Elif Sinem AĞAR
                </Text>
                </Center>
            </Stack>

        </div>
    )
}

export default React.memo(Footer)
