import React, { lazy } from 'react'
import Hero from '../../components/hero/Hero'
const Products = lazy(() => import("../products/Products"))
const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
    </div>
  )
}

export default React.memo(Home);
