import { Button, Divider, HStack, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AutoPlay from '../slideShow'
// #fcfae6
const logoSlider = [
    "https://images.ctfassets.net/lh3zuq09vnm2/3wtrDaAESflMICYhvZtOdE/3d4248c94b553f012fa63a6f0eb52826/Slack.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4A944uO2u8ijz0ueTW6Gix/64bb6b8d02d0080f3dc5c5043f5d475e/Property_1_Segment.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/Oma32qGH0Mrvd0GDwye01/dbf9446b8e9d356738bb804e020dcba9/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4VCGBnxidEWtUhJuqX5fcU/883c3b48b035e1ee690d77e704202d4d/Property_1_Zapier.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/1FcKgE6Wc4Q0oKlCrZe9db/a766ff23aadece8e7f64ad14716dc67c/Property_1_Optimizely.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/2sFKKdOpxmVgpWs65YpSU3/df1c3d18dfbd1d540752cce56bce3535/Omniconvert.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/2rmAIb5zgDRa8qqxILCAhC/fd845e66d774072ccf081aa975c60453/Microsoft-teams.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/6GxHuHnVO3oaiQkLRznyrv/ed2fb4fd18f9d26aba90aed0fd86b6dc/Property_1_Zendesk.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/51S20iDqjIQ93v3WkVsMkF/a316074ea318475105786e8d808c588e/gmail.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/2sfh7DIpMg2kHXiz0icHNi/550125a6e0da967c7b608f623313e424/Property_1_asana.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5XsPx6nAN2Sj6eu8BlnD1u/8bc2687273b40f88402a0f932513b133/Property_1_facebook-conversions.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5zpKws6k8CzDHl4kmzpFHr/a3b2d7332d2115222f33948b098ee0bc/Property_1_google-analytics.svg"
    

]
const Custom = () => {
  return (
    <Stack border="white" w="full" maxW="1400px" bg="#fdd835" spacing={25} p={10} >
       
       <VStack justifyContent="center" >
        <Text  fontSize="4xl">CUSTOM PACKAGES</Text>
        <Text fontSize="lg" >Discover how your users feel with Feedback & hear from your users with Surveys</Text>
       </VStack>

       <HStack alignSelf="center" bg="green.800" w="fit-content" borderRadius={50} p={1} >
          <Text color="white" padding={5} >Pay Yearly</Text>
          <Text color="black" bg="white"  padding={5} borderRadius={50} >Pay Monthly</Text>
       </HStack>
 <Divider />
 <AutoPlay images={logoSlider} />
       <SimpleGrid columns={{base:2,md:3,lg:4}} spacing={5} >
           
     
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
                 <Text fontWeight="semibold" fontSize="4xl">
                    $59</Text>
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
                 <Text fontWeight="semibold" fontSize="4xl">
                    $79</Text>
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

export default Custom
