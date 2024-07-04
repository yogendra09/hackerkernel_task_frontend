import React from 'react'

const Card = ({product}) => {
    
  return (
    <div className='flex items-center gap-6'>
      <h1 className='text-2xl'>{product.product}</h1>
      <h1 className='text-2xl '>{product.price}</h1>
      <button>remove product</button>
    </div>
  )
}

export default Card