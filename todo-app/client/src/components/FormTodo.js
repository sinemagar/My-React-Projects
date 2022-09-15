import {  FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

//import { store } from '../redux/store'
import { addTodoAsync } from '../redux/todos/services'


function FormTodo() {
    const toast = useToast()

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    //loading 
    const isLoading = useSelector(state=>state.todos.addNewTodo.isLoading)

    const handleSubmit = async(e) => {
        if (e && e.preventDefault) { e.preventDefault(); }

       
       if(!title)(
        //window.confirm("Not Empty!")
        toast({
            title: 'Empty!.',
            description: "Please fill in the required field.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })

       )
       else{
       await dispatch(addTodoAsync({ title }))
       }
        setTitle('')
        //console.log({ id: newId, title, complated: false });

    }
    //console.log(title)

    //error
    const error =useSelector(state=>state.todos.addNewTodo.error)
    

    return (
        <form
            key={setTitle}
            onSubmit={handleSubmit}
            style={{ marginTop: "10px" }}
        >
            <FormControl
                isInvalid={error}
                bg="white"
                display="flex"
                alignItems="center"
            >
                <Input

                disabled={isLoading}
                    placeholder="Let's To do"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
               {
                isLoading &&  <span
                style={{paddingRight:10}}
                >Loading...</span>

               }
                <FormErrorMessage>
                    {error}

                </FormErrorMessage>
            </FormControl>
           
        </form>
    )
}

export default FormTodo
