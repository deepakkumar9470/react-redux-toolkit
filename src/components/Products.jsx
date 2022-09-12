import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const Products = () => {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        const fecthProducts = async () =>{

            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                console.log(res)
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }

        }
        fecthProducts()
    }, [])

    const addToCartHandler = (product) =>{
        dispatch(addToCart(product))
    }
    
  return (
    <div className='productsWrapper'>
        {
            products.map(p=>(
                <div className="card">
                    <img src={p.image} alt={p.title} />
                    <h4>{p.title}</h4>
                    <h5>{p.price}</h5>
                    <button onClick={()=>addToCartHandler(p)} className='btn'>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products