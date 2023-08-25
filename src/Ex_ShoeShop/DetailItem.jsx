import React from 'react'

export default function DetailItem({product, onCloseDetail, onAddToCart}) {
    if(!product){
        return
    }
    return (
        <div>
            <div className="modal show" style={{display: "block"}} tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCloseDetail} />
                        </div>
                        <div className="modal-body">
                            <div className='text-center'>
                            <img src={product.image} alt={product.name} style={{maxWidth: "200px"}} />
                            </div>
                            <div>
                            <h6 style={{display: 'inline-block'}}>Tên sản phẩm : </h6><span> {product.name}</span><br />
                            <h6 style={{display: 'inline-block'}}>Miêu tả : </h6><span> {product.shortDescription}</span>
                            <p className='text-end me-4 text-danger mb-0'>Giá : ${product.price}</p>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCloseDetail}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=> onAddToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </div>
    )
}
