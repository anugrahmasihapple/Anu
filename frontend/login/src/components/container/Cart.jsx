import React from 'react';
import { useState } from 'react';
import HomeCSS from '../../assets/css/Home.css';
import CartCSS from '../../assets/css/Cart.css';
import frok2 from '../../assets/img/frok2.png';
import dress from '../../assets/img/dress.png';
import jeans2 from '../../assets/img/jeans2.png';
import watch3 from '../../assets/img/watch3.png';
import iphone from '../../assets/img/iphone.png';
import { BsXLg } from 'react-icons/bs';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Cart() {
  // const [productOneQuantiy, setProductOneQuantity] = useState=(1);
  // const [productTwoQuantiy, setProductTwoQuantity] = useState=(1);
  // const [productThreeQuantiy, setProductThreeQuantity] = useState=(1);
  // const [productFourQuantiy, setProductFourQuantity] = useState=(1);
  // const [productFiveQuantiy, setProductFiveQuantity] = useState=(1);


  return (
    <div className='cart-block'>
      <p className='wish-list'>Wish List</p>
      <div>
        <div className='product-heading'>
          <span id='product-column-heading'>Product</span>
          <span id='color-column-heading'>Color</span>
          <span id='size-column-heading'>Size</span>
          <span id='amount-column-heading'>Amount</span>
          <span id='price-column-heading'>Price</span>
        </div>
        <div className='product'>
          <div id='product-image'>
            <img id='product-image-raw' src={frok2}/>
          </div>
          <div>
            <h3 id='product-name'>Night Wear</h3>
            <p id='product-order-number'>#261311</p>
          </div>
          <span id='color-value'>Peach</span>
          <span id='size-value'>XL</span>
          <div className='amount-button'>
            <button id='amount-button-trigger-minus'>-</button>
            <p id='amount-value'></p>
            <button id='amount-button-trigger-add'>+</button>
          </div>
          <span id='price-value'>$89.99</span>
          <button id='product-removal-button'>
            <BsXLg />
          </button>
        </div>
        <div className='product'><div id='product-image'>
            <img id='product-image-raw' src={dress}/>
          </div>
          <div>
            <h3 id='product-name'>Long Gown</h3>
            <p id='product-order-number'>#212315</p>
          </div>
          <span id='color-value'>Golden</span>
          <span id='size-value'>XL</span>
          <div className='amount-button'>
            <button className='amount-button-trigger'></button>
          </div>
          <span id='price-value'>$69.99</span>
          <button id='product-removal-button'>
            <BsXLg />
          </button></div>
        <div className='product'><div id='product-image'>
            <img id='product-image-raw' src={jeans2}/>
          </div>
          <div>
            <h3 id='product-name'>Denim Jeans Men</h3>
            <p id='product-order-number'>#502942</p>
          </div>
          <span id='color-value-denim'>Blue</span>
          <span id='size-value-denim'>XL</span>
          <div className='amount-button'>
            <button className='amount-button-trigger'></button>
          </div>
          <span id='price-value'>$69.99</span>
          <button id='product-removal-button'>
            <BsXLg />
          </button></div>
      </div>

      <hr></hr>
      
      <p className='wish-list'>Shopping Cart</p>
      <div>
        <div className='product-heading'>
          <span id='product-column-heading'>Product</span>
          <span id='color-column-heading'>Color</span>
          <span id='size-column-heading'>Size</span>
          <span id='amount-column-heading'>Amount</span>
          <span id='price-column-heading'>Price</span>
        </div>
        <div className='product'>
          <div id='product-image'>
            <img id='product-image-raw' src={watch3}/>
          </div>
          <div>
            <h3 id='product-name'>Watch</h3>
            <p id='product-order-number'>#321503</p>
          </div>
          <span id='color-value'>Silver</span>
          <span id='size-value'>-</span>
          <div className='amount-button'>
            <button className='amount-button-trigger'></button>
          </div>
          <span id='price-value'>$159.99</span>
          <button id='product-removal-button'>
            <BsXLg />
          </button>
        </div>
        <div className='product-iphone'><div id='product-image'>
            <img id='product-image-raw' src={iphone}/>
          </div>
          <div>
            <h3 id='product-name-iphone'>iPhone X</h3>
            <p id='product-order-number-iphone'>#712108</p>
          </div>
          <span id='color-value-iphone'>Black</span>
          <span id='size-value-iphone'>Standard</span>
          <div className='amount-button'>
            <button className='amount-button-trigger'></button>
          </div>
          <span id='price-value'>$999.99</span>
          <button id='product-removal-button'>
            <BsXLg />
          </button></div>
      </div>
      <Link to='/Order'>
        <button id='checkout-button'>Continue to Checkout...</button>
      </Link>
    </div>
  )
}

export default Cart;