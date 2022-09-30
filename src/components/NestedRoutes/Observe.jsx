import { Button, Divider, HStack, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import AutoPlay from '../slideShow'
import Loader from '../SmallComponents/Loader'
// #fcfae6
const images = [
    "https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg",
   
    
  ]
 
const Observe = () => {

    ////////////////////////LOADER //////////////////////////////
// is Loading   // 
const [isLoading, setIsLoading] = useState(true);

setTimeout(() => {
setIsLoading(false)
 
}, 1000);
 

// console.log(data)

if(isLoading){

 return (  
    <Loader />
   ) 

}


////////////////////////LOADER //////////////////////////////

  return (
    <Stack w="full" maxW="1400px" bg="#fcfae6" spacing={25} p={10} >
       
       <VStack justifyContent="center" >
        <Text  fontSize="4xl">Hotjar OBSERVE</Text>
        <Text fontSize="lg" >Discover how your users feel with Feedback & hear from your users with Surveys</Text>
       </VStack>

       <HStack alignSelf="center" bg="blue.400" w="fit-content" borderRadius={50} p={1} >
          <Text color="white" padding={5} >Pay Yearly</Text>
          <Text color="black" bg="white"  padding={5} borderRadius={50} >Pay Monthly</Text>
       </HStack>
 <Divider />
 <AutoPlay images={images} />
       <SimpleGrid columns={{base:1,md:3,lg:4}} spacing={5} >
           
     
              <Stack bg="white" border="0.5px solid #6e71cc" spacing={10} textAlign="left"
               padding={5}  borderRadius='lg' overflow='hidden'>
                
                 <Stack textAlign="left">
                 <Text fontWeight="semibold" fontSize="4xl">Basic</Text>
                <Text fontWeight="thin" fontSize="sm">Get started with Ask essentials</Text>
                 </Stack>
                 
                 <VStack justifyContent="flex-start" >
                 <HStack textAlign="left">
                 <Text fontWeight="semibold" fontSize="4xl">
                    $0</Text>
                <Text fontWeight="semibold" fontSize="md">/forever</Text>
                 </HStack>
                 <Button variant="solid" colorScheme="telegram" >Get Started</Button>
                 </VStack>

                 <VStack spacing={5} >
                  <Text textAlign="left" fontWeight="semibold" >Access to:</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Create and store 3 surveys & 3 feedback widgetsTooltip</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Feedback in 40+ languagesTooltip</Text>
                 </VStack>

                <Spacer />
                <Text color="blue.500" as="u" >Learn More</Text>
              </Stack>

              <Stack bg="white" border="0.5px solid #6e71cc" spacing={10} textAlign="left"
               padding={5}  borderRadius='lg' overflow='hidden'>
                
                 <Stack textAlign="left">
                 <Text fontWeight="semibold" fontSize="4xl">Plus</Text>
                <Text fontWeight="thin" fontSize="sm">Ask for small teams, more responses and filters</Text>
                 </Stack>
                 
                 <VStack justifyContent="flex-start" >
                 <HStack textAlign="left">
                 <Text as="s" fontWeight="semibold" fontSize="md">$59</Text>
                 <Text color="green.800" fontWeight="semibold" fontSize="4xl">
                    $39</Text>
                <Text fontWeight="semibold" fontSize="md">/month</Text>
                 </HStack>
                 <Button variant="solid" colorScheme="telegram" >Get Started</Button>
                 </VStack>

                 <VStack spacing={5} >
                  <Text textAlign="left" fontWeight="semibold" >Everything in Basic, and:</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Up to 250 monthly responsesTooltip</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Create unlimited surveys & feedback widgets</Text>
                 </VStack>

                <Spacer />
                <Text color="blue.500" as="u" >Learn More</Text>
              </Stack>

              <Stack bg="white" border="0.5px solid #6e71cc" spacing={10} textAlign="left"
               padding={5}  borderRadius='lg' overflow='hidden'>
                
                 <Stack textAlign="left">
                 <Text fontWeight="semibold" fontSize="4xl">Business</Text>
                <Text fontWeight="thin" fontSize="sm">The best Ask plan for growing companies</Text>
                 </Stack>
                 
                 <VStack justifyContent="flex-start" >
                 <HStack textAlign="left">
                 <Text as="s" fontWeight="semibold" fontSize="md">$99</Text>
                 <Text color="green.800" fontWeight="semibold" fontSize="4xl">
                    $80</Text>
                <Text fontWeight="semibold" fontSize="md">/month</Text>
                 </HStack>
                 <Button variant="solid" colorScheme="telegram" >Get Started</Button>
                 </VStack>

                 <VStack spacing={5} >
                  <Text textAlign="left" fontWeight="semibold" >Everything in Plus, and:</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Starting at 500 monthly responses</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Identify API: target feedback by custom user attributes</Text>
                 </VStack>

                <Spacer />
                <Text color="blue.500" as="u" >Learn More</Text>
              </Stack>

              <Stack bg="white" border="0.5px solid #6e71cc" spacing={10} textAlign="left"
               padding={5}  borderRadius='lg' overflow='hidden'>
                
                 <Stack textAlign="left">
                 <Text fontWeight="semibold" fontSize="4xl">Scale</Text>
                <Text fontWeight="thin" fontSize="sm">Ask for experts, unlimited responses plus all features</Text>
                 </Stack>
                 
                 <VStack justifyContent="flex-start" >
                 <HStack textAlign="left">
                 <Text fontWeight="semibold" fontSize="3xl">
                   Lets Talk </Text>
                <Text fontWeight="semibold" fontSize="md">with suFi</Text>
                 </HStack>
                 <Button variant="solid" colorScheme="whatsapp" >BOOK ALL</Button>
                 </VStack>

                 <VStack spacing={5} >
                  <Text textAlign="left" fontWeight="semibold" >Everything in Business, and</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Unlimited monthly responses</Text>
                  <Divider/>
                  <Text fontWeight="thin" >Full access to every feature</Text>
                 </VStack>

                <Spacer />
                <Text color="blue.500" as="u" >Learn More</Text>
              </Stack>


              
           

         </SimpleGrid>

         <Divider />
         <Text fontSize="lg" >All plans include unlimited team members, data storage for 365 days, and a 30-day money back guarantee</Text>
         <Text fontSize="lg" >By subscribing to any of our Ask plans, you automatically have access to Observe Basic.</Text>
         <Text fontSize="lg" >Have questions regarding the plans? Check our FAQs
</Text>

       

    </Stack>
  )
}

export default Observe
