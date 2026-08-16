import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
          <p>we pioneered the concept of dicount broking and price tranperancy in india. Flat fees and no hidden charge</p>
          <a href='' style={{ textDecoration: "none" }}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 mb-5'>
          <div className='row text-center'>
            <div className='col p-3 border'>
              <h1 className='mb-3'>₹0</h1>
              <p>Free equity deliver and <br></br>direct mutual funds</p>
            </div>
            <div className='col p-3 border'>
              <h1 className='mb-3'>₹200</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing