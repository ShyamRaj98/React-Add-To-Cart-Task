import React, { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import MiniCart from './components/MiniCart';

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) => { console.log(error) })
  }, [])

  const [productDetails, setProductDetails] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [miniCard, setMiniCard] = useState(false);

  console.log(productDetails);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCartItems([...cartItems, product]);
  };
  console.log(cartItems);

  const removeProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <Navbar count={cartItems.length} openMiniCart={() => setMiniCard(true)} />
      <div className='bg-stone-900'>
        <section className='container md:lg lg:xl mx-auto py-[100px] px-4'>
          <h1 className='text-white text-2xl font-semibold mb-5'>Shop All</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 gap-y-6">
            {productDetails.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>
      </div>
      <MiniCart cartItems={cartItems} removeProduct={removeProduct} closeMiniCart={() => setMiniCard(false)} miniCard={miniCard} />
    </>

  )
}

export default App
