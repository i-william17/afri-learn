import React from 'react'
import Sidebar from './Sidebar'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import Navbar from '../../../components/Navbar/Navbar'

const AdminDash = () => {
  return (
    <div>
      <div className="relative z-10">
        <Header/>
      </div>

      <div className="relative z-20">
        <Navbar/>
      </div>
      <Sidebar/>
      <Footer/>

      
    </div>
  )
}

export default AdminDash
