import React from 'react'

import { Announcemnt } from '../components/Announcemnt'
import { Categories } from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import {Products} from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
export const Home = () => {
    return (
        <div>
            <Announcemnt/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
