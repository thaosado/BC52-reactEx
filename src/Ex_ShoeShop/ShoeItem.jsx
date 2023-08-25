import React from 'react'

export default function ShoeItem({product, onShowDetail, onAddToCart}) {
  return (
    <div className="card">
         <img className="card-img" src={product.image} alt="product" />
         <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className='card-text'>{product.price}$</p>
            <button className='btn btn-dark' onClick={() => onAddToCart(product)}>Add to cart</button>
            <button className='btn btn-secondary ms-1' onClick={() => onShowDetail(product)}>More Infor</button>
         </div>
    </div>
  )
}
