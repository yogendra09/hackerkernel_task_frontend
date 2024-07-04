import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../store/Reducers/cartReducer';

const Card = ({product}) => {
     const dispatch = useDispatch();
  return (
    <div className='flex items-center gap-6'>
      <h1 className='text-2xl'>{product.product}</h1>
      <h1 className='text-2xl '>{product.price}</h1>
      <button className='cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 hover:brightness-110' onClick={()=>{dispatch(removeProduct(product))}}>remove</button>
    </div>
  )
}

export default Card