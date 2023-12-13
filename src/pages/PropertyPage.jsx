import React from 'react'
import Property from '../components/Property/Property'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function PropertyPage() {
  return (
    <div>
        <div>
            <div className='black'/>
            <Header/>
        </div>
        <div className='white'>
            <Property/>
            <Footer/>
        </div>
    </div>
  )
}

export default PropertyPage
