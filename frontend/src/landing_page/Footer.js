import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
      <div className='container border-top mt-5 ' >
        <div className='row mt-5'>
          <div className='col'>
            <img src='media/images/logo.svg' style={{ width: '50%' }} alt='logo' />
            <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved</p>
          </div>
          <div className='col'>
            <p className="fw-semibold">Company</p>
            <a
              href="#"
              className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }}
            >
              About
            </a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }}>Products
            </a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Pricing</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >referral program</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Carreers</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Zerodha.tech</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Press & media</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Zerodha cares</a>

          </div>
          <div className='col'>
            <p className="fw-semibold">Support</p>

            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Support</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Contact </a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Support portal</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >List of charges</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Download & resources</a>

          </div>
          <div className='col'>
            <p className="fw-semibold">Account</p>
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >Open an account</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >fund transfer</a>
            <br />
            <a href='' className="text-decoration-none text-dark d-block"
              style={{ lineHeight: "0.8" }} >60 days challaenges</a>
          </div>
        </div>

        <div className='mt-5  text-muted' style={{ fontSize: "14px" }}>

          <p>Our Zerodha-inspired trading platform is designed to provide a simple, fast, and user-friendly experience for managing investments and exploring financial markets. Users can access market information, track their investments, and manage their portfolios through a clean and intuitive interface.</p>



          <p>We believe trading platforms should be easy to understand and accessible to everyone. Our platform focuses on a clean design, transparent information, and smooth navigation so users can make informed decisions without unnecessary complexity.</p>



          <p>The platform provides useful features for monitoring stocks, viewing market data, managing portfolios, and keeping track of investments. It is designed as a learning and development project inspired by modern online trading platforms.</p>



          <p>This project is a Zerodha-inspired clone created for educational and development purposes only. It is not affiliated with or endorsed by Zerodha, and it does not provide real investment, trading, or financial advisory services. Users should conduct their own research before making any financial decisions.</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer