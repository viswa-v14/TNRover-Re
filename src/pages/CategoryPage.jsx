import React from 'react'
import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import Footer from '../components/Footer/Footer'

function CategoryPage() {
  return (
    <div>
        <div>
            <div className='black'/>
                <Header/>
        </div>
        <div className='white'>
            <Category/>
            <Footer/>
        </div>
    </div>
  )
}

export default CategoryPage
