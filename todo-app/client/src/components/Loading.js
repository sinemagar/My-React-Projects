import { Button, Center } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Center>
    <Button
    mt="20px"
     size="lg"
      isLoading
      loadingText='Loading'
      colorScheme='black'
      variant='outline'
      spinnerPlacement='start'
     >
         
     </Button>
    </Center>
    
  )
}

export default Loading
