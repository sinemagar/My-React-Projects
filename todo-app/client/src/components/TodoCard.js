import {  Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const TodoCard = () => {
  return (
    <Text 
    bg="white"
     >
        {/*HEADER */}
        <Heading as='cite'
        fontSize="50px"
        fontWeight="italic"
       
        >
          <Center>
            TO DO
          </Center>
        </Heading>

      

    </Text>
  )
}

export default TodoCard
