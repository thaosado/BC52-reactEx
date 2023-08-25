import React, { useState } from 'react'
import ShoeList from './ShoeList';
import data from "./data.json"
import DetailItem from './DetailItem';
import ShoesCart from './ShoesCart';

export default function ShoeShop() {
  //State quản lý sản phẩm được chọn để show thông tin
  const [selectProduct, setSelectProduct] = useState(null);
  //State quản lý modal
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false)
  //State quản lý carts
  const [carts, setCarts] = useState([]);

  const totalProduct = carts.reduce((result, item) => {
    return result + item.quantity
  },0)
  const totalPrice = carts.reduce((result, item) => {
    return result + (item.quantity * item.price)
  }, 0)

  //Hàm show thông tin sản phẩm
  const handleShowDetail = (product) => {
    setIsOpenDetail(true);
    setSelectProduct(product)
  }

  //Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    //kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    const found = carts.find(item => item.id === product.id);
    if(found){
      const newCarts = carts.map(item => {
        if(item.id === product.id){
          return item = {...item, quantity: item.quantity +1 }
        }
        return item;
      });
      setCarts(newCarts)
    }else{
      setCarts([...carts, {...product, quantity: 1}])
    }
    handleCloseDetail();
  }

  //Hàm tăng giảm số lượng sản phẩm
  const handleChangeQuantity = (producId, quantity) => {
    const newCarts = carts.map(item => {
      if(item.id === producId){
        return item = {...item, quantity: item.quantity + quantity}
      }
      return item;
    });

    setCarts(newCarts)
    
  }

  //Hàm xóa sản phẩm
  const handleDeleteProduct = (producId) => {
    const newCarts = carts.filter(item => item.id != producId);
    setCarts(newCarts)
  }

  //Hàm pay
  const handleClickToPay = () => {
    setCarts([]);
    handleCloseCart();
    alert("Cảm ơn bạn đã mua hàng")
  }

  //Hàm close modal
  const handleCloseDetail = () => {
    setIsOpenDetail(false)
  }
  const handleCloseCart = () => {
    setIsOpenCart(false)
  }

  return (
    <div className='container'>
      <h1 className='text-center text-primary'>Shoe Shop</h1>

      <div className='d-flex justify-content-end mb-3'>
        <button className='btn btn-danger' onClick={() => { setIsOpenCart(true) }}>Giỏ Hàng ({totalProduct})</button>
      </div>

      <ShoeList products={data} onShowDetail={handleShowDetail} onAddToCart={handleAddToCart} />
      {isOpenDetail && <DetailItem onAddToCart={handleAddToCart} product={selectProduct} onCloseDetail={handleCloseDetail} />}
      {isOpenCart && <ShoesCart carts={carts} onCloseCart={handleCloseCart} onChangeQuantity = {handleChangeQuantity} onDeleteProduct={handleDeleteProduct} onClickToPay = {handleClickToPay} totalPrice={totalPrice} />}
    </div>
  )
}
