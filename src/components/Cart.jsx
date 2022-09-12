import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

const Cart = () => {

  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const removeHandler = (productId) =>{
    dispatch(removeFromCart(productId))
  }
  return (
   <div>
      <h3 className='cartheading'>Your Cart</h3>

      <div className='cartWrapper'>
         {
          products.map((item) =>(
            <div className="cartCard">
                 <img src={item.image} alt={item.title}/>
                 <h5>{item.title}</h5>
                 <h5>{item.price}</h5>
                 <button onClick={()=>removeHandler(item.id)} className='btn'>Remove</button>
            </div>
          ))
         }
      </div>

   </div>
  )
}

export default Cart