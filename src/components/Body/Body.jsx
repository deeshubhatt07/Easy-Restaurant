import React from 'react'
import MenuList from './MenuList'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Body = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<MenuList />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default Body
