import React, {useState,useEffect} from 'react';
import './App.css';
import RingLoader from "react-spinners/RingLoader";
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

import Particle from './configu/Particle';

import Headroom from 'react-headroom';

import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet';
import Logo from './assets/Logo.jpg';


const App = () => {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
  },[]);

  return (
    <div>
      {
        loading ?
        <div  className='App dark:bg-white bg-[#03030d]'>
        <RingLoader




        color={'#00baa7'}
        loading={loading}
        // cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>

        :
    
    <div className='bg-side bg-no-repeat  bg-cover overflow-hidden relative'>
      <Helmet>
        <title>hello it's ZDR</title>
        <Link ref="icon" href={Logo} />
      </Helmet>
    <Particle />
    

    <Headroom>
    <Header  />
    </Headroom>

      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
  
      {/* <div className='h-[4000px]'></div> */}
    </div>
      }
    </div>
  );
};

export default App;
