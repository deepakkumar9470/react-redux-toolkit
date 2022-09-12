import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const item = useSelector((state) => state.cart)

  return (
    <div className='navbar'>
        <span className='logo'>RECAT CART</span>

        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span className="cartCount">cart Items :  {item.length}</span>
        </div>
    </div>
  )
}

export default Navbar