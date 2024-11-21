import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Lessons from './Lesson'
import LessonHero from './LessonHero'

const CourseLessons = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <LessonHero/>
        <Lessons/>
        <Footer/>
      
    </div>
  )
}

export default CourseLessons
