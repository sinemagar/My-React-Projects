import {  Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return (
    <Grid
    mt="15px"
    h='300px'
    
  >
    <GridItem colSpan={10} bg='red' >
        <p style={{color:"white",fontSize:"25px",marginTop:"10px",marginLeft:"10px"}}>
          
          <strong>Error: </strong> {message}

        </p>
    </GridItem>
  </Grid>
  )
}

export default Error
