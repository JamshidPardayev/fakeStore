import React, { useEffect } from 'react'
import notFountGif from "../../assets/notFound.gif"
import Header from '../../components/header/Header'
import AOS from 'aos';

const NotFound = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div data-aos="fade-down" className='h-[100vh] overflow-hidden'>
      <Header />
      <img src={notFountGif} alt="notFoundGif" className='w-screen h-[92vh] object-cover'/>
    </div>
  )
}

export default React.memo(NotFound)
