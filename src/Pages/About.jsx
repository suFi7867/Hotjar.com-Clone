import { Button, Divider, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AutoPlay from '../components/slideShow'
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
const About = () => {

    
  return (
    <Stack border="orange" alignSelf="center" maxW="1400px" spacing={50} 
    padding={{base:"20px",md:"50px 100px"}} >


        <Stack marginTop="60px" direction={{base:"column", md:"row"}} >

           <VStack w={{base:"300px", md:"50%"}} textAlign="left" spacing={10}  >
              <Text  fontSize="15px" color="gray.500" >COMPANY / ABOUT US</Text>
              
              <Text fontSize="2xl"  >On a mission to make the web a better place</Text>
              
              <Text fontSize="15px" color="gray.500" >
              We started life in 2014 as a people-first, self-funded, fully-distributed company, dedicated to helping people make websites their users love. Then after seven great years (almost all of which were profitable), we joined forces with Contentsquare to take this mission to the next level.
              </Text>

              <Text fontSize="15px" color="gray.500" >
              We’re very proud to serve customers in 180+ countries, and work with the best people around the world: our global team of over 200 Hotjarians works remotely throughout Europe, the Americas, and Africa.
              </Text>

           </VStack>

        <VStack w={{base:"300px", md:"50%"}}>
           <Image w="full" src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F7nj0B730SdRHjFQh3ot9D0%2F20e2fe55f98fb9ccb27522b44e5c655a%2FCompany_photo_-_2022.png&w=1200&q=75" />
        </VStack>

        </Stack>


       <Divider />

       <Stack margin="auto" align="center" spacing={5} >

           <Text fontWeight="semibold" fontSize="3xl">We play well with others</Text>
           <Text fontWeight="thin" fontSize="xl">Save time and effort. Integrate Hotjar with dozens of tools.           </Text>
           
           <AutoPlay images={logoSlider} />
           <Button  size="lg" fontWeight="lighter" colorScheme="messenger" variant='outline'>
            Explore Intergration
           </Button>
           </Stack>
           
        <Divider />

        <Stack p={5} spacing={5} marginTop="60px" direction={{base:"column", md:"row"}} >

            <VStack alignItems="left" textAlign="left" p={5} spacing={3}>
                <Image src='https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F7H1CsMTGA2y8I9oYCE2skw%2Fbc5f83bdceee9a58b7d69a664d9179d9%2Fwhat-we-do.jpg&w=1920&q=75' />
                <Text fontWeight="semibold" fontSize="30px" >What we do</Text>
                <Text>
                We help you understand how users behave on your site, what they need, and how they feel, fast.
                </Text>
                <Text as="u" color="blue" >Show more</Text>
            </VStack>

            <VStack alignItems="left" textAlign="left" p={5} spacing={3}>
                <Image w="full" src='https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F23iKHp96SO8uWM8IZCFNXY%2F901a1bab19b1fbd554e290db0e221d38%2Fhotjar-product-team.width-750.jpg&w=1920&q=75' />
                <Text fontWeight="semibold" fontSize="30px" >How we work</Text>
                <Text>
                We want to build a long-lasting, sustainable, and purposeful business with engaged team members and delighted customers.
                </Text>
                <Text as="u" color="blue" >Show more</Text>
            </VStack>


        </Stack>

        <Divider />

           <Stack  bg="linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)" direction={{base:"column", md:"row"}} margin="auto" align="center" spacing={5} padding={10} >

            <VStack  alignItems="flex-start" textAlign="left" p={5} spacing={3}>
              <Text fontWeight="semibold" fontSize="2xl">Get started with Hotjar</Text>
               <Text fontWeight="thin" fontSize="15px">It only takes a few minutes to get       started with     Hotjar. Understand your users—start free, today.</Text>
                   <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
                        <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
                         To The Product
                       </Button>
                       
                       <Button fontWeight="lighter" colorScheme="messenger" variant='solid'>
                         Get Started Free
                       </Button>
      
                  </Stack>
                  <Text fontWeight="thin" fontSize="15px">No credit card required</Text>
            </VStack>

         <Divider display={{base:"block", md:"none"}} />

         <Stack  spacing={6} direction={{base:"column",md:"column", lg:"column",xl:"column" }} >
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

          <Divider />


         <Stack>
         <Text fontWeight="semibold" fontSize="2xl">Our core values</Text>
               <Text fontWeight="thin" fontSize="15px">We love these principles. We live by these principles.</Text>
         </Stack>
       
          <SimpleGrid justifyContent="center" columns={{base:1, md:3}} >

             <VStack spacing={5} p={5} direction={{base:"column", md:"row"}} >
              <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg' w={25}/>
             <Text fontWeight="semibold" fontSize="xl">Put our customers at the heart of everything</Text>
               <Text fontWeight="thin" fontSize="15px">Our top priority is delivering value to the people that rely on Hotjar to solve their day-to-day challenges. </Text>
             </VStack>

             <Divider  display={{base:"block", sm:"none"}} />
             
             <VStack spacing={5} p={5} direction={{base:"column", md:"row"}} >
              <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg' w={25}/>
             <Text fontWeight="semibold" fontSize="xl">Be bold and move fast</Text>
               <Text fontWeight="thin" fontSize="15px">We pursue big goals by prioritizing brilliantly, taking quick decisions, and delivering incremental change.. </Text>
             </VStack>
             <Divider  display={{base:"block", sm:"none"}} />
             <VStack spacing={5} p={5} direction={{base:"column", md:"row"}} >
              <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg' w={25}/>
             <Text fontWeight="semibold" fontSize="xl">Work with respect</Text>
               <Text fontWeight="thin" fontSize="15px">We are honest, tolerant, and inclusive. And we measure success not by profits alone, but by contributions to all stakeholders. </Text>
             </VStack>
             <Divider  display={{base:"block", sm:"none"}} />
             <VStack spacing={5} p={5} direction={{base:"column", md:"row"}} >
              <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg' w={25}/>
             <Text fontWeight="semibold" fontSize="xl">Build trust with transparency</Text>
               <Text fontWeight="thin" fontSize="15px">We communicate with our team, customers, users, and end-users in a clear, timely, and open way. </Text>
             </VStack>
             <Divider  display={{base:"block", sm:"none"}} />
             <VStack spacing={5} p={5} direction={{base:"column", md:"row"}} >
              <Image  src='https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg' w={25}/>
             <Text fontWeight="semibold" fontSize="xl">Challenge ourselves to grow</Text>
               <Text fontWeight="thin" fontSize="15px">We celebrate results and we are always thinking about ways to grow and improve.</Text>
             </VStack>

          </SimpleGrid>
      
          <Divider />

     

<Stack margin="auto" align="center" spacing={5} >

    <Text fontWeight="semibold" fontSize="3xl">We play well with others</Text>
    <Text fontWeight="thin" fontSize="xl">Save time and effort. Integrate Hotjar with dozens of tools.           </Text>
    
    <AutoPlay images={images} />
    <Button  size="lg" fontWeight="lighter" colorScheme="messenger" variant='outline'>
     Explore Intergration
    </Button>
    </Stack>
    
    <Divider />

            <VStack  bg="linear-gradient(183deg, rgba(207,249,255,1) 0%, rgba(216,205,255,1) 41%, rgba(255,227,254,1) 67%, rgba(175,188,255,0.1910990168539326) 100%)"  textAlign="left" p={5} spacing={5}>
              <Text fontWeight="semibold" fontSize="4xl">Get started with Hotjar</Text>
               <Text fontWeight="thin" fontSize="15px">It only takes a few minutes to get       started with     Hotjar. Understand your users—start free, today.</Text>
                   <Stack direction={{base:"column",md:"column", lg:"column",xl:"row" }}>
                        <Button fontWeight="lighter" colorScheme="messenger" variant='outline'>
                         To The Product
                       </Button>
                       
                   
      
                  </Stack>
                  <Text fontWeight="thin" fontSize="15px">No credit card required</Text>
            </VStack>

    </Stack>
  )
}

export default About
