import { Button, Container, Divider, Flex, Highlight, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { SiAskubuntu, SiObservable } from 'react-icons/si';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import Loader from '../components/SmallComponents/Loader';



const Links = [

  {name:"Observe" , Logo:<SiObservable/>, path:"observe"},
  {name:"Ask" , Logo:<SiAskubuntu/>, path:"ask"},
  {name:"Custom" , Logo:<MdOutlineDashboardCustomize/>, path:"custom"}
]


const Pricing = () => {

  ////////////////////////LOADER //////////////////////////////
// is Loading   // 
const [isLoading, setIsLoading] = useState(true);

setTimeout(() => {
setIsLoading(false)
 
}, 1500);
 

// console.log(data)

if(isLoading){

 return (  
    <Loader />
   ) 

}


////////////////////////LOADER //////////////////////////////

  return (
    <Stack border="orange" alignSelf="center" maxW="1400px" spacing={50} 
    padding={{base:"0px",md:"50px 100px"}} >

       <Stack  p={5} >
       <Text  marginTop={50}  fontWeight="semibold"
        fontSize={{base:"32px",lg:"42px" }} > Choose a plan that works for you </Text>

        <Text fontSize="20px" >Start with a single product or create a custom package for a complete view of your user’s needs</Text>

       </Stack>
       
     <Divider />

    
    <Stack spacing={8}  alignSelf="center" justifyItems="center"  >

     <Text fontSize="4xl" >NESTED ROUTES</Text>

     <HStack bg="white" alignSelf="center" p={5}  style={{position:"sticky", top:60 }}  >
       {
        Links.map((el)=>(
          <NavLink 
        
          to={el.path}
          classNstame={({ isActive }) => (isActive ? "NestedactiveS" : "NesteddefaultS")} 
           end 
          >
             <HStack p={5} borderRadius={5} bgColor="gray.100" >
              <Text  >{el.Logo} </Text><Text  fontWeight="semibold" >{el.name}</Text></HStack>
          </NavLink>
        ))
       }
      
     </HStack>
     <Outlet />
    </Stack>

     <Divider />
     <Stack  >
       <Text  fontWeight="semibold"
        fontSize={{base:"32px",lg:"42px" }} > What's included? </Text>

        <Text fontSize="20px" >See what you get in each product and its plans.
     </Text>

       </Stack>
       
 

 

<Stack  bg="linear-gradient(90deg, #efd5ff 0%, #515ada 100%)" direction={{base:"column", md:"row"}} margin="auto" align="center" spacing={5} padding={10} >

    <VStack  alignItems="flex-start" textAlign="left" p={5} spacing={6}>
      <Text fontWeight="semibold" fontSize="2xl">Want to become a Hotjar partner?
</Text>
       <Text fontWeight="thin" fontSize="15px">Introduce your clients to Hotjar and earn up to 25% recurring revenue for every Hotjar referral</Text>
           <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
                <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
                 To The Product
               </Button>
             

          </Stack>
          <Text fontWeight="thin" fontSize="15px">No credit card required</Text>
    </VStack>



 <Stack  spacing={6} direction={{base:"column",md:"column", lg:"column",xl:"column" }} >
 <Image 
  w={300} src='https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F2wdWozE9QnLjqjRIPN7uT2%2F6198776d0600926bf0ac1b33260cb340%2FYour_introduction_to_Hotjar__what_it_is__what_it_can_do_for_you__and_how_it_works.jpg&w=1920&q=75' ></Image>
</Stack>

</Stack>
      
    </Stack>
  )
}

export default Pricing
