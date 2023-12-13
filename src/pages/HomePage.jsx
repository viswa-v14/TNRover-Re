import React from 'react'
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Top from '../components/Top/Top'
import Cities from '../components/Cities/Cities'
import Footer from '../components/Footer/Footer'

function HomePage() {
  return (
    <div>
        <div>
            <div className='white-gradient'/>
                <Header/>
                <Home/>
        </div>
        <div className='white'>
            <Top/>
            <Cities/>
            <Footer/>
        </div>
    </div>
  )
}

export default HomePage
