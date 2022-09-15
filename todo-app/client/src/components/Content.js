import { Box, Button, Checkbox, Flex, Spacer, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getTodoAsync, removeTodoAsync, toggleTodoAsync } from '../redux/todos/services'
import { selectFilteredTodos } from '../redux/todos/todosSlice'
import ContentFooter from './ContentFooter'
import Error from './Error'
import Loading from './Loading'
import {  CloseIcon } from '@chakra-ui/icons'

//let filtered=[];

const Content = () => {
    const dispatch = useDispatch();

    //filtrede
    const filtredTodos = useSelector(selectFilteredTodos)

    const isLoading = useSelector(state => state.todos.isLoading)
    const error = useSelector(state => state.todos.error)



    const handleDestroy = async(id) => {
        if (window.confirm("Are You Sure?")) {
          await  dispatch(removeTodoAsync(id));
        }
    }

    //get api
    useEffect(() => {
        dispatch(getTodoAsync())
    }, [dispatch])

    //toggle 
    const handleToggle = async(id, completed) => {
      await dispatch(toggleTodoAsync({id,data:{completed}}))
    }


    //loading
    if (isLoading) {
        return <div>
            <Loading />
        </div>
    }
    if (error) {
        return <div>
            <Error message={error} />
        </div>
    }

    return (

        <Stack spacing={5}
            bg="white" mt="10px"
        >
            {/**
             SLICE DAKI ELEMANLARI MAPLEME
             */}
            {filtredTodos.map((item) => (
                <Flex
                    key={item.id}
                    mt="5px"
                    mb="3px">
                    <Box   >
                        <Checkbox
                            size='lg'
                            colorScheme='blue'
                            ml="5px"
                            onChange={() => handleToggle(item.id, !item.completed)}
                        >
                            <p style={item.completed ? 
                                { textDecoration: "line-through",backgroundColor:" #FFFF00" } 
                                : { color: "black" }}>
                                {item.title}
                            </p>
                        </Checkbox>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button
                            size='xs'
                            mr="8px"
                            colorScheme="red"
                           variant="outline"
                            onClick={() => handleDestroy(item.id)}
                        >
                           <CloseIcon/>
                        </Button>
                    </Box>
                </Flex>

            ))}


            <ContentFooter />

        </Stack>
    )
}

export default Content

/*


import { Box, Checkbox, Stack } from '@chakra-ui/react'
import React from 'react'

function Content() {
    return (
        <Stack spacing={5}
            bg="white" mt="10px"
        >
            <Box>
                <Checkbox size='lg' colorScheme='orange' defaultChecked ml="5px">
                    Checkbox
                </Checkbox>
            </Box>
            <Box>
                <Checkbox size='lg' colorScheme='orange' defaultChecked ml="5px">
                    Checkbox
                </Checkbox>
            </Box>
        </Stack>
    )
}

export default Content
*/