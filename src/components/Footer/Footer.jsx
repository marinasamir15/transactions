import React from 'react'
import googlePlay from '../../assets/img/google play.webp'
import appStore from '../../assets/img/App store.png'
import amazon from '../../assets/img/Amazon-Pay-1.png.webp'
import paypal from '../../assets/img/بيبال-paypal-3.png'

import masterCard from '../../assets/img/png-clipart-logo-debit-mastercard-graphics-debit-card-mastercard-text-orange.png'
export default function Footer() {
  return (
    <footer className="position-static bg-light py-3 mt-4" >
    <div className="container-fluid  p-5 ">
 
  <h5>Get the Transaction app</h5>
  <p className="text-muted mb-2">Copy Right 2024 © By Transactions All Rights Reserved</p>
  <div className="row mb-5 gy-2">
    <div className="col-md-6">
    <div className="socialicons d-flex justify-content-around">
                    <i className="fa-brands fa-twitter fs-3"></i>
                     <i className="fa-brands fa-facebook-f fs-3"></i>
                            
                     <i className="fa-brands fa-instagram fs-3"></i>
                     <i className="fa-brands fa-linkedin fs-3"></i>
                </div>
    </div>
    <div className="col-md-3 ">
    <button className="btn btn-warning text-white">Share App Link</button>
    </div>
  </div>
  <div className="row  text-center ">
    <div className="col-md-8">
      <div className='d-flex flex-wrap  align-items-center'>
    <p className='mt-2'></p>
    <img src={amazon} alt=""  className='ms-1' style={{width:'40px'}}/>
    <img src={paypal} alt=""  className='ms-1' style={{width:'40px'}}/>
    <img src={masterCard} alt=""  className='ms-1' style={{width:'40px'}}/>
      </div>
    </div>
    <div className="col-md-4">
  <div className="d-flex flex-wrap align-items-center">

  <h6 className='me-1 mt-2'>Get delivers with customers</h6>
  <div>
  <img src={googlePlay} alt="" style={{width:'65px'}}/>
  <img src={appStore} alt="" style={{width:'65px'}}/>
  </div>
  </div>
    </div>
  </div>
    <hr />
  </div>
  
  </footer>
  )
}
