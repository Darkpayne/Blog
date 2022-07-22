import React from 'react'
import Navbar from '../Components/Navbar'
import Down from '../Components/Down'
import ShopItem from './MainShop/Shop'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <section className="">
            <ShopItem/>
        </section>
        <Down/>
    </div>
  )
}

export default Shop