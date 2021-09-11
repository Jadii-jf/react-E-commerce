import React from 'react'
import { Announcemnt } from '../components/Announcemnt'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'

export const Home = () => {
    return (
        <div>
            <Announcemnt/>
            <Navbar/>
            <Slider/>
        </div>
    )
}
