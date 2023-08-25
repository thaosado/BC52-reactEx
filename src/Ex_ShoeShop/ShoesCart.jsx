import React from 'react'

export default function ShoesCart({carts, onCloseCart, onChangeQuantity, onDeleteProduct, onClickToPay}) {
    return (
        <div>
            <div className="modal" style={{display: "block"}} tabIndex={-1}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ Hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCloseCart} />
                        </div>
                        <div className="modal-body">
                            <table className='table text-center'>
                                <thead>
                                    <tr>
                                        <th>Mã Sản Phẩm</th>
                                        <th>Hình Ảnh</th>
                                        <th>Số Lượng</th>
                                        <th>Đơn Giá</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map(item => {
                                        return(
                                            <tr key={item.id} >
                                                <td style={{padding: "25px 0"}}>{item.id}</td>
                                                <td><img src={item.image} alt="" style={{width: "70px", height:"70px"}} /></td>
                                                <td style={{padding: "25px 0"}}><a onClick={() => onChangeQuantity(item.id, -1)} style={{cursor: "pointer"}}>-</a> {item.quantity} <a onClick={() => onChangeQuantity(item.id, 1)} style={{cursor: "pointer"}}>+</a></td>
                                                <td style={{padding: "25px 0"}}>{item.price}</td>
                                                <td style={{padding: "25px 0"}}>{item.price * item.quantity}</td>
                                                <td style={{padding: "20px 0"}}>
                                                    <button className='btn btn-danger' onClick={() => onDeleteProduct(item.id)}>X</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCloseCart}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={onClickToPay}>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </div>
    )
}
