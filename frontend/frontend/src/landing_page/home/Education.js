import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5 '>
      <div className='row'>
        <div className='col-6'>
            <img src='media/images/education.svg' style={{width:"70%"}}/>
        </div>
        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and open market education</h1>
          <p>we pioneered the concept of dicount broking and price tranperancy in india. Flat fees and no hidden charge</p>
          <a href='' style={{ textDecoration: "none" }}>Verify <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           <p className='mt-5'>we pioneered the concept of dicount broking and price tranperancy in india. Flat fees and no hidden charge</p>
          <a href='' style={{ textDecoration: "none" }}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education