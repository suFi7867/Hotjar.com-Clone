
import { Stack } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';

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
  // npm install react-slick --save