import React, { useState } from 'react';
import './Cart.css';
import { useCartStore } from '../store/cart-store';
import { Link } from 'react-router-dom';
import { useNavigate,useSearchParams } from 'react-router-dom';
const Cart = () => {
const searchParams=useSearchParams()
  const navigate=useNavigate()
  const { cart, quantities, removeFromCart, clearCart, updateQuantities } = useCartStore((state) => ({
    cart: state.cart,
    quantities: state.quantities,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
    updateQuantities: state.updateQuantities,
  }));

  const [couponCode, setCouponCode] = useState('');
  const [shipping, setShipping] = useState(20);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + Number(item.price) * (quantities[item.id] || 1), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + shipping;
  };

  const handleCouponApply = () => {
    // Implement coupon logic here
  };

  const updateQuantity = (id, qty) => {
    const newQuantities = {
      ...quantities,
      [id]: Math.max(1, qty), // Ensure quantity is at least 1
    };
    updateQuantities(newQuantities);
  };
  const handleViewDetails = (productId) => {
    navigate(`/shop/product/${productId}?${searchParams.toString()}`);
  };
  return (
    <div className="cart-container -m-5">
      {/* Header Section with CART Title */}
      <div className="cart-header bg-[url('https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/shop-title-img-1.jpg')] bg-no-repeat bg-cover bg-fixed">
        <div className="cart-header-text font-extrabold m-20">CART</div>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty h-full lg:m-40 justify-center text-center  m-10 ">
          <hr />
          <p className="empty-message lg:text-4xl text-xl m-10 font-bold font-popins">YOUR CART IS CURRENTLY EMPTY.</p>
          <hr />
          <a href="/shop" className="return-link bg-red-600 p-4   
        left-1/2  hover:bg-red-900 text-white rounded">Return to shop</a>
        </div>
      ) : (
        <>
          <div className="cart-items xl:px-60 p-10">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="product-cell">
                      <img src={item.image} alt={item.name} className="product-image" />
                      <div  onClick={() => handleViewDetails(item.id)} className= ' cursor-pointer hover:text-red-800 hover:font-semibold'>{item.name}</div>
                    </td>
                    <td>${Number(item.price).toFixed(2)}</td>
                    <td>
                      <input 
                        type="number" 
                        value={quantities[item.id] || 1} 
                        min="1" 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="quantity-input"
                      />
                    </td>
                    <td>${(Number(item.price) * (quantities[item.id] || 1)).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)} className="remove-item">×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-actions p-10 xl:px-60">
            <div className="coupon-section">
              <input 
                type="text" 
                value={couponCode} 
                onChange={(e) => setCouponCode(e.target.value)} 
                placeholder="Coupon code"
                className="coupon-input text-nowrap w-[150px]"
              />
              <button onClick={handleCouponApply} className="bg-red-600 text-white p-0 text-nowrap w-[100px] text-sm">APPLY </button>
            </div>
    
            <button onClick={clearCart} className="clear-cart bg-red-600 text-white p-2 rounded text-nowrap  text-sm">CLEAR CART</button>
          </div>

          <div className="cart-totals p-10 xl:px-60">
            <h2>CART TOTALS</h2>
            <div className="totals-row ">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="totals-row">
              <span>Shipping</span>
              <div className="shipping-options ">
                <label>
                  <input 
                    type="radio" 
                    value={20} 
                    checked={shipping === 20} 
                    onChange={() => setShipping(20)}
                  />
                  Flat rate: $20
                </label>
                <label>
                  <input 
                    type="radio" 
                    value={0} 
                    checked={shipping === 0} 
                    onChange={() => setShipping(0)}
                  />
                  Free shipping
                </label>
                <label>
                  <input 
                    type="radio" 
                    value={5} 
                    checked={shipping === 5} 
                    onChange={() => setShipping(5)}
                  />
                  Local pickup: $5
                </label>
              </div>
            </div>
            <div className="totals-row">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
