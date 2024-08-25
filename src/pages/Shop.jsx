import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../firebase';
import { useCartStore } from '../store/cart-store';
import { Link, useSearchParams } from 'react-router-dom';

function Shop() {
  const setCart = useCartStore((state) => state.setCart);
  const addtoCart = useCartStore((state) => state.addtoCart);
  const [products, setProducts] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [category, setCategory] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsList = await fetchProducts();
        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };
    getProducts();
  }, []);

  const toggleCategories = (visible) => {
    setShowCategories(visible);
  };

  const filterProducts = () => {
    return products.filter((product) =>
      category ? product.category === category : true
    );
  };

  const productElements = (productsToShow) => (
    <div className="grid md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8 m-10 py-20">
      {productsToShow.map((product) => (
        <div key={product.id} className="text-center relative group border-2 shadow-sm p-4">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto mb-4 w-70 h-60 object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-25"
          />
          <div
            onClick={() => addtoCart(product)}
            className="rounded-md cursor-pointer h-10 w-auto text-nowrap p-5 absolute top-40 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-red-500 text-white font-bold text-lg uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            >
            ADD TO CART
          </div>
          <Link
            to={`product/${product.id}`}
            state={{ search: searchParams.toString() }}
            className="text-nowrap rounded-md cursor-pointer h-10 w-auto p-5 absolute top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-black text-white font-bold text-lg uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
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
        <div
          className="lg:hidden"
          onMouseEnter={() => toggleCategories(true)}
          onMouseLeave={() => toggleCategories(false)}
        >
          <button className="block w-full text-left p-4 bg-gray-200 hover:bg-gray-300 text-lg font-bold">
            Categories
          </button>
          {showCategories && (
            <div className="bg-gray-100 text-black p-5 space-y-5">
              <button
                onClick={() => setCategory('')}
                className="block mb-2 text-left hover:text-red-500"
              >
                All Products
              </button>
              <button
                onClick={() => setCategory('supplement')}
                className="block mb-2 text-left hover:text-red-500"
              >
                Supplements
              </button>
              <button
                onClick={() => setCategory('clothing')}
                className="block mb-2 text-left hover:text-red-500"
              >
                Clothing
              </button>
              <button
                onClick={() => setCategory('accessories')}
                className="block mb-2 text-left hover:text-red-500"
              >
                Accessories
              </button>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Categories Section for Large Devices */}
          <div className="hidden lg:block lg:w-1/4 p-10 lg:pl-10 lg:pr-10 border-2 text-black">
            <div className="sticky top-20 pt-20">
              <h1 className="text-2xl font-bold mb-4">Categories</h1>
              <button
                onClick={() => setCategory('')}
                className="block mb-2 text-left hover:text-red-500"
              >
                All Products
              </button>
              <button
                onClick={() => setCategory('supplement')}
                className="block mb-2 text-left hover:text-red-500"
              >
                Supplements
              </button>
              <button
                onClick={() => setCategory('clothing')}
                className="block mb-2 text-left hover:text-red-500"
              >
                Clothing
              </button>
              <button
                onClick={() => setCategory('accessories')}
                className="block mb-2 text-left hover:text-red-500"
              >
                Accessories
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {/* Display Header */}
            <hr className=' mt-5 '/>
            <h1 className="text-3xl font-bold text-center mb-6 text-black  pt-5">
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}
            </h1>
<hr />
            {/* Display Products */}
            {productElements(category ? filterProducts() : products)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
