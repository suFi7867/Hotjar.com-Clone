
import { Stack } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedBack from './components/SmallComponents/FeedBack';


function App() {
  return (
    <Stack  className="App">
      <Navbar />
      <AllRoutes  />
      <Footer />
   
    </Stack>
  );
}

export default App;

 //npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
  // npm i react-router-dom
  // npm install react-icons --save
  
  ////****** SLIDER  /////////
  // npm install react-slick --save
  // npm install slick-carousel --save

  // npm install react-icons --save