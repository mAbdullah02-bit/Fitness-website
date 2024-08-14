import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../firebase';
import { useCartStore } from '../store/cart-store';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
function Shop() {
const setCart=useCartStore((state)=>state.setCart)
  const addtoCart=useCartStore((state)=>state.addtoCart)
  const [products, setProducts] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [priceRange, setPriceRange] = useState([80, 690]); // Default range
 const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
 
    const getProducts = async () => {
      try {
        const productsList = await fetchProducts();
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    getProducts();
  }, [setCart]);

  const toggleCategories = (state) => setShowCategories(state);

  const handlePriceChange = (event) => {
    const value = event.target.value.split(',').map(Number);
    setPriceRange(value);
  };

  const productElements = (
    <div className="grid md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8 m-10 py-40">
      {products.map((product) => (
        <div key={product.id} className="text-center relative group border-2 shadow-sm p-4">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto mb-4 w-70 h-60 object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-25"
          />
          <div
            onClick={() => addtoCart(product)}
            className="rounded-md cursor-pointer h-10 w-[200px] absolute top-40 left-10 inset-0 flex items-center justify-center bg-red-500 text-white font-bold text-lg uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          >
            ADD TO CART
          </div>
          <Link
         to={`product/${product.id}`} state={{ search: searchParams.toString() }}
            className="rounded-md cursor-pointer h-10 w-[200px] absolute top-20 left-10 inset-0 flex items-center justify-center bg-black text-white font-bold text-lg uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          >
           View Details
          </Link>
          <h1 className="text-black font-bold text-lg">{product.name}</h1>
          <h1 className="text-red-600 font-bold text-lg">${product.price}</h1>
        </div>
      ))}
    </div>
  );

  return (
    <div>
   

      <div className="bg-white relative">
        {/* Categories Button for Small Devices */}
        <div className="lg:hidden" onMouseEnter={() => toggleCategories(true)} onMouseLeave={() => toggleCategories(false)}>
          <button
            className="block w-full text-left p-4 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
          >
            Categories
          </button>
          {showCategories && (
            <div className="p-4 bg-gray-100">
              <button className="block mb-2 text-left hover:text-red-500">Supplements</button>
              <button className="block mb-2 text-left hover:text-red-500">Clothing</button>
              <button className="block mb-2 text-left hover:text-red-500">Accessories</button>
              <button className="block mb-2 text-left hover:text-red-500">Lifestyle</button>
              <button className="block mb-2 text-left hover:text-red-500">Man</button>
              <button className="block mb-2 text-left hover:text-red-500">Woman</button>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Categories Section for Large Devices */}
          <div className="hidden lg:block lg:w-1/4 p-10 lg:pl-10 lg:pr-10 border-2 text-black">
            <div className="sticky top-20">
              {/* Price Filter */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-4">Filter by Price</h1>
                <input
                  type="range"
                  min="80"
                  max="690"
                  value={priceRange}
                  className="w-full"
                  onChange={handlePriceChange}
                  multiple
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>Price: ${priceRange[0]}</span>
                  <span>—</span>
                  <span>${priceRange[1]}</span>
                </div>
                <button className="block w-full mt-4 p-2 bg-red-500 text-white font-bold">
                  FILTER
                </button>
              </div>

              <h1 className="text-2xl font-bold mb-4">Categories</h1>
              <button className="block mb-2 text-left hover:text-red-500">Supplements</button>
              <button className="block mb-2 text-left hover:text-red-500">Clothing</button>
              <button className="block mb-2 text-left hover:text-red-500">Accessories</button>
              <button className="block mb-2 text-left hover:text-red-500">Lifestyle</button>
              <button className="block mb-2 text-left hover:text-red-500">Man</button>
              <button className="block mb-2 text-left hover:text-red-500">Woman</button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {productElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
