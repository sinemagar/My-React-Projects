import { Button, Center, Grid, GridItem } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { changeActiveFilter,clearCompleted ,selectActiveFilter,selectTodos} from '../redux/todos/todosSlice';


function ContentFooter() {

    //all items
    const items = useSelector(selectTodos)
    //console.log("items:",items)
    //kaç yapılmamış kaldı
    const itemsLeft = items.filter((item) => !item.completed).length;

    //console.log("itemsLeft:",itemsLeft)

    //Active filter
   const dispatch=useDispatch();
   const activeFilter=useSelector(selectActiveFilter)
   useEffect(()=>{
    localStorage.setItem('activeFilter',activeFilter)

   },[activeFilter])


    return (
        <Center
        style={{marginBottom:"10px",marginRight:"5px"}}
        >
            <Grid display='flex' >
            <GridItem ml="3px" >
                <span>
                    <strong
                        style={{ marginRight: "3px" }}
                    >
                        {itemsLeft}
                    </strong>
                    item{itemsLeft > 1 && 's'} left
                </span>
            </GridItem>
            <GridItem  ml="3px"  >
                <Button 
                size="sm" 
                colorScheme="telegram" 
                variant="outline"
                onClick={()=>dispatch(changeActiveFilter('all'))}
                 >
                    ALL
                </Button>
            </GridItem>
            <GridItem  ml="2px"  >

                <Button 
                size="sm" 
                colorScheme="telegram" 
                variant="outline"
                onClick={()=>dispatch(changeActiveFilter('active'))}
                >
                    Active
                </Button>
            </GridItem>
            <GridItem   ml="2px"  >

                <Button 
                size="sm" 
                colorScheme="telegram" 
                variant="outline"
                onClick={()=>dispatch(changeActiveFilter('completed'))}
                >
                    Completed
                </Button>
            </GridItem>
            <GridItem  ml="1px"  >
                <Button 
                size="sm" 
                colorScheme="telegram" 
                variant="outline"
                onClick={()=>dispatch(clearCompleted())}
                >
                    Clear
                </Button>
            </GridItem>
        </Grid>
        </Center>
    )
}

export default ContentFooter
/*

<footer>
            <span>
                <strong>2</strong>
                items left
            </span>

            <ul>
                <li>

                    <p>
                        all
                    </p>
                </li>
                <li>
                    <p>
                        Active
                    </p>
                </li>
                <li>
                    <p>
                        Completed
                    </p>
                </li>
            </ul>
            <Button>
                Clear Completed
            </Button>
        </footer>

*/