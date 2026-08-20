import React from 'react'

const hero = () => {
  return (
    <section className='container-fluid ' id='supportHero'>
      <div className='p-3' id='supportWrapper'>
        <h4 className=''>Support Portal</h4>
        <a href=''>
          Track Tickets
        </a>
      </div>
      <div className='row p-3 m-5'>
        <div className='col-6 p-3'>
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder='Eg. hoe do I activate F&O' /><br/>
          <a href=''>Track Account opening</a>
          <a href=''>Track segment</a>
          <a href=''>Intraday</a>
          <a href=''>Kite user manual</a>
        </div>
        <div className='col-6 p-3 '>
          <h1 className='fs-3'>Featuredt</h1>
          <ol>
            <li><a href=''>Current Takeovers</a></li>
            <li> <a href=''>Latest Inready leverage - MTS & CO</a></li>
          </ol>
        </div>


      </div>
    </section>
  )
}

export default hero