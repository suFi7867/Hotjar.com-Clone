import { Box, Container, Divider, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Stack spacing={50}  padding={{base:5, md:10, lg:50}} bg="#202641" alignItems="center" >
          <Image w="25px" src="https://www.hotjar.com/images/hotjar-logo-small.svg"/>  
        <SimpleGrid margin="auto"  w="80%" columns={[1,2,5]} fontSize="15px" spacing={5}  >
         
         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Product</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product tour</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Heatmaps</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Session recordings</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Feedback</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Surveys</Text>

                 <Text fontWeight="thin" color="whiteAlpha.800" > Session recordings</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Feedback</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Surveys</Text>
  
              </SimpleGrid>
              
         </Stack>

  

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Why Hotjar</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > For product teams</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > For product managers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > For product designers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > For researchers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Case studies</Text>
        </SimpleGrid>
         </Stack>

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Learn</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Guides</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Blog</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product forge</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product updates</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Support</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product management 101</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product management glossary</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > UX design</Text>
               
        </SimpleGrid>
         </Stack>
         
         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Company</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > About Us</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Carrers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Privace</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Press</Text>
               
        </SimpleGrid>
         </Stack>

         <Stack alignItems="flex-start" spacing={5}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Compliance</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >

                 <Text fontWeight="thin" color="whiteAlpha.800" > Legal overview</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Compliance & security</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Terms of Service</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Privacy Policy</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Acceptable Use Policy</Text>
               
        </SimpleGrid>
         </Stack>
  
           
        </SimpleGrid>


        <Divider />

     


        <Stack w="full" margin="auto" direction={{base:"column", md:"column", lg:"row"}} > 
           <HStack spacing={5}>
             <Image w="25px" src="https://www.hotjar.com/images/hotjar-logo-small.svg"/>
              <Text color="whiteAlpha.800" >Copyright © 2014 - 2022 Hotjar Ltd. All rights reserved.</Text>
           </HStack>

           <Spacer />

           <HStack spacing={5} >
            
              <Text color="whiteAlpha.800" >Cookie info</Text>
              <Text color="whiteAlpha.800" >Cookie settings</Text>
              <Text color="whiteAlpha.800" >Do not track</Text>
           </HStack>
         </Stack>

    </Stack>
  )
}

export default Footer
