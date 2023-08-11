import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
   
        <div className="row justify-content-around">
            <div className='col-md-4 d-grid row'>
                <Link className=' py-3 px-1 text-decoration-none text-dark'>BENCHES & OTTOMANS</Link>
                <Link className=' py-3 px-1 text-decoration-none text-dark'>CHAIRS</Link>
                <Link className=' py-3 px-1 text-decoration-none text-dark'>CHAISES</Link>
            </div>
            <div className='col-md-4 d-grid row'>
                <Link className='py-3 px-1 text-decoration-none text-dark'>COCKTAIL OTTOMANS</Link>
                <Link className='py-3 px-1 text-decoration-none text-dark'>SECTIONALS</Link>
                <Link className='py-3 px-1 text-decoration-none text-dark'>SETTEES & CHAISES</Link>
            </div>
            <div className='col-md-4 d-grid row'>
                <Link className='py-3 px-1 text-decoration-none text-dark'>SLEEPER SOFAS</Link>
                <Link className='py-3 px-1 text-decoration-none text-dark'>SOFAS & LOVESEATS</Link>
                <Link className='py-3 px-1 text-decoration-none text-dark'>SWIVEL CHAIRS</Link>
            </div>
        
    </div>
  )
}

export default HeaderComponent