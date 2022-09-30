import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Image, Spacer, Stack, Text, useColorMode, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { MdDynamicFeed, MdEco, MdEditNotifications, MdFeed, MdOutlineDarkMode } from 'react-icons/md';
import { BsLightbulb } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
//AiOutlineMenu

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { ImAndroid } from 'react-icons/im';
import { RiLogoutBoxRLine } from 'react-icons/ri';


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
        name:"About",
        path:"/about"
    }
]

const Navbar = () => {

  const {userName,isAuth,LogOutUser} = useContext(AuthContext)

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <HStack 
      bg="whiteAlpha.900"
         style={{position:"fixed" }} 
         p="0px 8%" justify="center"  
         w="100%" h="64px" 
         borderBottom="1px solid #eeee">
 
       <HStack  w="full" maxW="1400px" p="0.6rem" spacing={8}>
         
          <HStack >
            <Link to="/">
            <Image h={7} w=""
             src="https://insights.hotjar.com/static/dd3f3da381ecbb6aa239.svg" /></Link>
          </HStack>

          <Box  display={{ base: 'none', md: 'none', lg: 'block' }} >
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

           {
            !isAuth ? 
            <Box display={{ base: 'none', md: 'none', lg: 'block' }} >
              <HStack>
              <NavLink to="/login" >
                <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
                   Sign in
                 </Button>
             </NavLink> 
   
             <NavLink to="/login" >
              <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
                Get Started Free
              </Button>
              </NavLink> 

              <IconButton
              fontSize='25px'
        borderRadius={50}
        
        onClick={toggleColorMode}
              icon={ colorMode === "light" ? <MdOutlineDarkMode /> : <BsLightbulb/>  } />

              </HStack>
       
             </Box> 
       : <Box  display={{ base: 'none', md: 'none', lg: 'block' }} >

            <HStack spacing={5} >
            <HStack  ><Text color="blackAlpha.800" fontSize="xl"><ImAndroid  /></Text> 
            <Text fontWeight="semibold" color="blackAlpha.800">{userName}</Text></HStack>

             <Button onClick={LogOutUser} fontWeight="lighter" colorScheme="messenger" variant='solid'>
                   LogOut
              </Button>
             
             <IconButton
             fontSize='25px'
             borderRadius={50}
             
             onClick={toggleColorMode}
             icon={ colorMode === "light" ? <MdOutlineDarkMode /> : <BsLightbulb/>  } />
            </HStack>
                   
                   </Box>
           }


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

             {
              isAuth &&   <AccordionItem>
              
            <VStack >
            <Image borderRadius={12}  w={150} src='https://i.im.ge/2022/07/29/FwZXw1.jpg' ></Image>
            <HStack  >
              <Text fontSize="xl"><ImAndroid  /></Text> 
            <Text fontWeight="semibold" >{userName}</Text></HStack>
            
            </VStack>


          </AccordionItem>
             }

              
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
                          <Link to="/about">About Us</Link> 
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

            {
              !isAuth ? <HStack marginTop="20px" justifyContent="space-around" >
              <NavLink to="/login">
   
              <Button onClick={()=>onClose()} colorScheme="messenger" variant='outline'>
                Sign in
              </Button>
              </NavLink>
              <NavLink to="/login">
              <Button  colorScheme="messenger" variant='solid'>
                Get Started Free
              </Button></NavLink>
              </HStack> 
              :
              <HStack marginTop="20px" justifyContent="space-around" >
             
              <NavLink to="/login">
              <Button onClick={()=>{
                onClose()
                LogOutUser()
              }}
             colorScheme="messenger" variant='solid'>
                LOG OUT
              </Button></NavLink>
              </HStack>
            }
             
          </DrawerBody>
           </DrawerContent>

        </Drawer>   

    </HStack>
  )
}

export default Navbar
