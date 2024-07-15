import React from 'react'
import CustomerTable from '../CustomerTable/CustomerTable'
import TransactionGraph from '../TransactionGraph/TransactionGraph'


export default function Home() {
  
  return (
    <div className='mt-3'>
      
      <h2 className='mt-3'>CustomerTable</h2>
      <CustomerTable/>
      
    
      <h2 className='mt-3'>TransactionGraph</h2>
      <TransactionGraph/>
    </div>
  )
}
