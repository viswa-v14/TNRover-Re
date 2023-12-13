import React from 'react'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import Footer from '../components/Footer/Footer'

function ListPage() {
  return (
    <div>
        <div>
            <div className='black'/>
                <Header/>
        </div>
        <div className='white'>
            <List/>
            <Footer/>
        </div>
    </div>
  )
}

export default ListPage
