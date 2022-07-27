import React from 'react'
import Navbar from '../Components/Navbar'
import Down from '../Components/Down'
import ShopItem from './MainShop/Shop'
import ShopNav from './MainShop/ShopNav'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <section className="">
            <ShopNav/>
            <ShopItem/>
        </section>
        <Down/>
    </div>
  )
}

export default Shop