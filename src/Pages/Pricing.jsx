import { Container, Divider, Flex, Highlight, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { SiAskubuntu, SiObservable } from 'react-icons/si';
import { MdOutlineDashboardCustomize } from 'react-icons/md';



const Links = [

  {name:"Observe" , Logo:<SiObservable/>, path:"observe"},
  {name:"Ask" , Logo:<SiAskubuntu/>, path:"ask"},
  {name:"Custom" , Logo:<MdOutlineDashboardCustomize/>, path:"custom"}
]


const Pricing = () => {
  return (
    <Stack border="orange" alignSelf="center" maxW="1400px" spacing={50} 
            padding={{base:"25px 50px",md:"50px 100px"}} >

       <Stack  p={5} >
       <Text  marginTop={50}  fontWeight="semibold"
        fontSize={{base:"32px",lg:"42px" }} > Choose a plan that works for you </Text>

        <Text fontSize="20px" >Start with a single product or create a custom package for a complete view of your user’s needs</Text>

       </Stack>
       
     <Divider />

    
    <Stack  alignSelf="center" spacing={6} justifyItems="center"  >
    <HStack alignSelf="center" >
       {
        Links.map((el)=>(
          <NavLink 
        
          to={el.path}
          classNstame={({ isActive }) => (isActive ? "NestedactiveS" : "NesteddefaultS")} 
           end 
          >
             <HStack p={5} borderRadius={5} bgColor="gray.100" >
              <Text fontSize="3xl" >{el.Logo} </Text><Text fontSize="2xl" fontWeight="semibold" >{el.name}</Text></HStack>
          </NavLink>
        ))
       }
      
     </HStack>
     <Outlet />
    </Stack>

    
    


     <Divider />
      
    </Stack>
  )
}

export default Pricing
