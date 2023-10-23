import React from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/footer'
import '/src/styles/MarketPages.css'
import TableOV from '../components/tableov'


export const MarketPages = () => {
  return (
   <>
   <Nav2></Nav2>
  <body>
  <div className="container">
      <h1>Market overview</h1>
      <div className='box-container'>
          <div className='box-1'>
          <h1>Crytocurrency</h1>
          <TableOV></TableOV>
          </div>
          <div className='box-1'>
          <h1>Stock</h1>
          <TableOV></TableOV>
          </div>
      </div>
  </div>
  </body>
   <Footer></Footer>
   
   </>
    
  )
}
