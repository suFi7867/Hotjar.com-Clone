import { Box, Button, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AutoPlay from '../components/slideShow'

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

        <Stack margin="auto" align="center" spacing={10} >
            <Text fontWeight="semibold" fontSize="3xl">Trusted by 900,000 websites in 180+ countries</Text>
            <AutoPlay images={images} />
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


        <Stack margin="auto" align="center" spacing={5} >

            <Text fontWeight="semibold" fontSize="3xl">We play well with others</Text>
            <Text fontWeight="thin" fontSize="xl">Save time and effort. Integrate Hotjar with dozens of tools.</Text>

            <AutoPlay images={logoSlider} />
            <Button size="lg" fontWeight="lighter" colorScheme="messenger" variant='outline'>
             Explore Intergration
           </Button>
        </Stack>


        

  

    </Stack>
  )
}

export default LandingPage
