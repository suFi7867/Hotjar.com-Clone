import { Divider, Highlight, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Pricing = () => {
  return (
    <Stack alignSelf="center" maxW="1400px" spacing={50} 
            padding={{base:"25px 50px",md:"50px 100px"}} >

       <Stack border="1px solid" p={5} >
       <Text  marginTop={50}  
        fontSize={{base:"32px",lg:"42px" }} > Choose a plan that works for you </Text>

        <Text fontSize="10px" >Start with a single product or create a custom package for a complete view of your user’s needs</Text>

       </Stack>
       
     <Divider />
      
    </Stack>
  )
}

export default Pricing
