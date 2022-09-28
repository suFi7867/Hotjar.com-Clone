import { Box, Button, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const LandingPage = () => {
  return (
    <Stack alignSelf="center" maxW="1400px"  spacing={50} padding={{base:"25px 50px",md:"50px 100px"}} >

       <Stack>
       <Text textAlign="left" maxWidth={{base:"100%",md:"100%",lg:"60%" }} fontSize={{base:"32px",lg:"42px" }} >Understand how users behave on your site, what they need, and how they feel, fast.
        </Text>

        <Stack  spacing={6} direction={{base:"column",md:"column", lg:"column",xl:"row" }} >
           <HStack spacing={5} >
             <Image src='https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/32b9315a40b4f1363fb448bd0cab5534/icon-no-card.svg' w="25px" />
             <Text color="GrayText">
             No credit card required
             </Text>
           </HStack>
           <HStack spacing={5} >
             <Image src='https://images.ctfassets.net/lh3zuq09vnm2/o8L9i7vSjKytR7aYfef7C/ead95db8958fa7ef66750e9ba4fea91e/icon-sign.svg' w="25px" />
             <Text color="GrayText">
             56,549 users signed up last month
             </Text>
           </HStack>
           <HStack spacing={5} >
             <Image src='https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg' w="25px" />
             <Text color="GrayText">
             GDPR- & CCPA-ready
             </Text>
           </HStack>
        </Stack>

        <Stack padding={5}  w="full" spacing={50} direction={{base:"column",md:"column", lg:"row",xl:"row" }} >

        <Image maxH="800px" src="https://i.im.ge/2022/09/28/1EaFz0.Screenshot-2092.png" />

        <Spacer />
         
         <Stack spacing={{base:5, lg:10}} margin="auto"  textAlign="left"  >

            <Text fontSize="xl" fontWeight="semibold" maxWidth={{base:"100%",md:"60%",lg:"60%" }}>
            The slow, manual days of collating data and feedback are over.
            </Text>
            <Text maxWidth={{base:"100%",md:"60%",lg:"60%" }} >
            Hotjar is an intuitive, visual way to discover, consolidate, and communicate user needs.
            </Text>
          
            

            <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
            <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
             Start With Free Trial
           </Button>
           
           <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
             Login With Google
           </Button>

            </Stack>

            <Text>
            Hotjar is free forever - upgrade anytime
            </Text>
        
         </Stack>

            

        </Stack>
       </Stack>

        <Stack margin="auto" align="center" >
            <Text fontWeight="semibold" fontSize="3xl">Trusted by 900,000 websites in 180+ countries</Text>
           <Text fontSize="6xl">SLIDER HERE</Text>
            <Stack  spacing={6} direction={{base:"column",md:"column", lg:"column",xl:"row" }} >
           <HStack spacing={5} >
             <Image src='https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/32b9315a40b4f1363fb448bd0cab5534/icon-no-card.svg' w="25px" />
             <Text color="GrayText">
             No credit card required
             </Text>
           </HStack>
           <HStack spacing={5} >
             <Image src='https://images.ctfassets.net/lh3zuq09vnm2/o8L9i7vSjKytR7aYfef7C/ead95db8958fa7ef66750e9ba4fea91e/icon-sign.svg' w="25px" />
             <Text color="GrayText">
             56,549 users signed up last month
             </Text>
           </HStack>
           <HStack spacing={5} >
             <Image src='https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg' w="25px" />
             <Text color="GrayText">
             GDPR- & CCPA-ready
             </Text>
           </HStack>
        </Stack>
        </Stack>

      
    </Stack>
  )
}

export default LandingPage
