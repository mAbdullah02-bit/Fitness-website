import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { getproduct, fetchProducts } from '../firebase';
import { useCartStore } from '../store/cart-store';

function ItemDetails() {
  const addtoCart = useCartStore((state) => state.addtoCart);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const [fetchProductlist, setFetchProductlist] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getproduct(id);
        setProduct(fetchedProduct);
      } catch (err) {
        setError('Error fetching product');
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setFetchProductlist(data);
      } catch (err) {
        setError('Error fetching products');
        console.error('Error fetching products:', err);
      }
    };
    getProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const relatedProducts = fetchProductlist.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleViewDetails = (productId) => {
    navigate(`/shop/product/${productId}?${searchParams.toString()}`);
  };

  return (
    <div className="p-8 sm:p-16 bg-white flex flex-col relative">
      {/* Product Images and Details Section */}
      <div className="flex flex-col lg:flex-row mb-10">
        <div className="lg:mr-20">
          <img
            src={product.image}
            alt={product.name}
            className="h-[300px] sm:h-[400px] w-auto shadow-lg rounded-lg mb-10 lg:mb-0
             object-cover lg:hover:scale-[160%] md:hover:scale-[150%] sm:hover:scale-[140%] hover:scale-[140%]
               lg:hover:translate-x-20 md:hover:translate-x-20  hover:translate-x-10 transition ease-in-out  cursor-zoom-in"
          />
        </div>

        <div className="flex-2 text-black">
          <h1 className="font-popins text-xl sm:text-3xl mb-5">
            <span className="font-bold">{product.name}</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold mb-5">
            <span className="font-bold">${product.price}</span>
          </p>
          <p className="mb-8 leading-relaxed w-full sm:w-[600px]">
            <span className="font-light">{product.description}</span>
          </p>

          {/* Add to Cart Section */}
          <div className="flex flex-col sm:flex-row items-center mb-8">
            <input
              type="number"
              defaultValue="1"
              min="1"
              className="w-16 mr-0 sm:mr-4 p-2 rounded border border-gray-300 mb-4 sm:mb-0"
            />
            <button
              className="w-full sm:w-auto px-5 py-2 bg-red-500 text-white rounded mb-4 sm:mb-0 mr-0 sm:mr-4"
              onClick={() => addtoCart(product)}
            >
              Add to Cart
            </button>
            <button className="w-full sm:w-auto px-5 py-2 bg-transparent text-red-500 border border-red-500 rounded">
              Add to Wishlist
            </button>
          </div>

          {/* Additional Information Section */}
          <div className="pt-14">
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
          </div>
        </div>
      </div>

      {/* Mini Nav Bar */}
      <div className="border-t border-gray-200 pt-6">
  <nav className="text-black space-x-8 font-semibold">
    <Link
      to="."
      
      className={`hover:text-red-700 ${
        location.pathname === " " ? "text-red-700" : ""
      }`}
    >
      Details
    </Link>
    <Link
      to="size"
      className={`hover:text-red-700 ${
        location.pathname.includes("size") ? "text-red-700" : ""
      }`}
    >
      Additional Info
    </Link>
    <Link
      to="reviews"
      className={`hover:text-red-700 ${
        location.pathname.includes("reviews") ? "text-red-700" : ""
      }`}
    >
      Reviews
    </Link>
  </nav>
</div>

      {/* Outlet for Additional Info/Reviews */}
      <div className="mr-0 sm:mr-40 mb-10 mt-20 p-5 rounded-md shadow-md">
        <Outlet context={product} />
      </div>

      <hr />

      {/* Related Products Section */}
      <div className="h-auto flex flex-col">
        <h1 className="text-black text-xl m-5 font-bold">Related Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div
                key={item.id}
                className="text-center relative group border-2 shadow-sm p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto mb-4 w-full h-60 object-contain transition-opacity
                   duration-300 ease-in-out group-hover:opacity-25"
                />
                <div
                  onClick={() => addtoCart(item)}
                  className="rounded-md cursor-pointer h-10 w-auto text-nowrap p-5 absolute top-40 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-red-500 text-white font-bold text-lg uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  >
                  ADD TO CART
                </div>
                <div
                  onClick={() => handleViewDetails(item.id)}
                  className="text-nowrap rounded-md cursor-pointer h-10 w-auto p-5 absolute top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-black text-white font-bold text-lg uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  >
                  View Details
                </div>
                <h1 className="text-black font-bold text-lg">{item.name}</h1>
                <h1 className="text-red-600 font-bold text-lg">${item.price}</h1>
              </div>
            ))
          ) : (
            <p className="text-black">No related products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
