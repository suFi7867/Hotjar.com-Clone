import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Image, Spacer, Stack, Text, useColorMode, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDynamicFeed, MdEco, MdEditNotifications, MdFeed, MdOutlineDarkMode } from 'react-icons/md';
import { BsLightbulb } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
//AiOutlineMenu

import { Link, NavLink } from 'react-router-dom';

const Links = [
    {
        name:"Product",
        path:"/"
    },
    {
        name:"WhyHotjar",
        path:"/WhyHotjar"
    },
    {
        name:"Pricing",
        path:"/Pricing"
    },
    {
        name:"Learn",
        path:"/Learn"
    },
    {
        name:"Company",
        path:"/Company"
    }
]

const Navbar = () => {

 

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <HStack  p="0px 8%" justify="center"  w="100%" h="64px" borderBottom="1px solid #eeee">
       
       <HStack position="sticky" w="full" maxW="1400px" p="0.6rem"  spacing={8}>
         
          <HStack >
             <Image h={7} w="" src="https://insights.hotjar.com/static/dd3f3da381ecbb6aa239.svg" />
          </HStack>

          <Box    display={{ base: 'none', md: 'none', lg: 'block' }} >
          <HStack  
         
               spacing={5} >
            {
                Links.map((el)=>(

                    <NavLink
                    key={el.path}
                    to={el.path}
                 
                    className={({ isActive }) => (isActive ? "activeS" : "defaultS")
                  } end
                  >
                        <Text    p="10px 10px">{el.name}</Text>
                    </NavLink>

                ))
            }
        
          </HStack>

          </Box>
           <Spacer />

          <HStack display={{ base: 'none', md: 'none', lg: 'block' }} >

          <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
             Sign in
           </Button>

           <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
             Get Started Free
           </Button>

           <IconButton
           fontSize='25px'
           borderRadius={50}
           
           onClick={toggleColorMode}
           icon={ colorMode === "light" ? <MdOutlineDarkMode /> : <BsLightbulb/>  } />

          </HStack>


          <HStack display={{ base: 'block', md: 'block', lg: 'none' }}  >

            <IconButton
            onClick={()=>onOpen()}
            icon={<AiOutlineMenu />} >

            </IconButton>



          </HStack>



       </HStack>

 
        <Drawer  placement='right' onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> 

          <HStack alignItems="center">
          <Image h={7} w="" src="https://insights.hotjar.com/static/dd3f3da381ecbb6aa239.svg" />
        
        
         <IconButton
         fontSize='25px'
         position="absolute"
         right="12"
         borderRadius={50}
         onClick={toggleColorMode}
         icon={ colorMode === "light" ? <MdOutlineDarkMode /> : <BsLightbulb/>  } />

          </HStack>

             
             </DrawerHeader>
          <DrawerBody  >

          <Accordion>

              
               <AccordionItem>
              
                   <AccordionButton>
                     <Box flex='1' textAlign='left'>
                     <Text fontWeight="semibold" fontSize="md" >
                       Product  
                        </Text>
                     </Box>
                     <AccordionIcon />
                   </AccordionButton>
              
                 <AccordionPanel  pb={4}>
                   <VStack alignItems="left" >
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdEditNotifications/>} bg="none" />
                          <Text>Product Tour</Text> 
                   </Flex>
                   <Divider />
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdFeed/>} bg="none" />
                          <Text>HeatMap</Text> 
                   </Flex>
                   <Divider />
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdDynamicFeed/>} bg="none" />
                          <Text>FeedBack</Text> 
                   </Flex>
                   <Divider />
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdEco/>} bg="none" />
                          <Text>Contact</Text> 
                   </Flex>
                   <Divider />
                 

                   </VStack>

                 </AccordionPanel>


               </AccordionItem>

                <AccordionItem>
              
                   <AccordionButton>
                     <Box flex='1' textAlign='left'>
                     <Text fontWeight="semibold" fontSize="md" >
                       Why HotJar  
                        </Text>
                     </Box>
                     <AccordionIcon />
                   </AccordionButton>
              
                 <AccordionPanel  pb={4}>
                   <VStack alignItems="left" >
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdEditNotifications/>} bg="none" />
                          <Text>Product Tour</Text> 
                   </Flex>
                   <Divider />
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdFeed/>} bg="none" />
                          <Text>HeatMap</Text> 
                   </Flex>
                   <Divider />
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdDynamicFeed/>} bg="none" />
                          <Text>FeedBack</Text> 
                   </Flex>
                   <Divider />
                   <Flex alignItems="center" > 
                         <IconButton color="red.500" 
                         icon= {<MdEco/>} bg="none" />
                          <Text>Contact</Text> 
                   </Flex>
                   <Divider />
                 

                   </VStack>

                 </AccordionPanel>

                 
               </AccordionItem>

               
                <AccordionItem>
              
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="semibold" fontSize="md" >
                  Pricing  
                   </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
         
            <AccordionPanel  pb={4}>
              <VStack alignItems="left" >
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdEditNotifications/>} bg="none" />
                     <Text>Product Tour</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdFeed/>} bg="none" />
                     <Text>HeatMap</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdDynamicFeed/>} bg="none" />
                     <Text>FeedBack</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdEco/>} bg="none" />
                     <Text>Contact</Text> 
              </Flex>
              <Divider />
            

              </VStack>

            </AccordionPanel>

            
               </AccordionItem>

               <AccordionItem>
              
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="semibold" fontSize="md">
                  Learn  
                   </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
         
            <AccordionPanel  pb={4}>
              <VStack alignItems="left" >
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdEditNotifications/>} bg="none" />
                     <Text>Product Tour</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdFeed/>} bg="none" />
                     <Text>HeatMap</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdDynamicFeed/>} bg="none" />
                     <Text>FeedBack</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdEco/>} bg="none" />
                     <Text>Contact</Text> 
              </Flex>
              <Divider />
            

              </VStack>

            </AccordionPanel>

            
            
               </AccordionItem>

               <AccordionItem>
              
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="semibold" fontSize="md" >
                  suFi  
                   </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
         
            <AccordionPanel  pb={4}>
              <VStack alignItems="left" >
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdEditNotifications/>} bg="none" />
                     <Text>Product Tour</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdFeed/>} bg="none" />
                     <Text>HeatMap</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdDynamicFeed/>} bg="none" />
                     <Text>FeedBack</Text> 
              </Flex>
              <Divider />
              <Flex alignItems="center" > 
                    <IconButton color="red.500" 
                    icon= {<MdEco/>} bg="none" />
                     <Text>Contact</Text> 
              </Flex>
              <Divider />
            

              </VStack>

            </AccordionPanel>

            
            
               </AccordionItem>


             </Accordion>
            <Divider/>

           <HStack marginTop="20px" justifyContent="space-around" >
           <Button  colorScheme="messenger" variant='outline'>
             Sign in
           </Button>
         
           <Button  colorScheme="messenger" variant='solid'>
             Get Started Free
           </Button>
           </HStack>
             
          </DrawerBody>
        </DrawerContent>
        </Drawer>   
      
    
    </HStack>
  )
}

export default Navbar
