import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";


const AutoPlay = ({images}) => {

  
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1050,
        autoplaySpeed: 0,
        cssEase: "linear"
      };

      return (
        <Stack  maxW={{base:"300px" , md:"800px" , xl:"full"}} >
         
          <Slider style={{gap:"20px"}} {...settings}>
           {
            images.map((el)=>(
                <Stack>
                    <Image width={{base:"50px", md:"150px"}} src={el} />
                </Stack>
            ))
           }
          </Slider>
        </Stack>
      );
}

export default AutoPlay

