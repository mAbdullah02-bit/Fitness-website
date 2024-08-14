import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getproduct } from '../firebase';
import { useCartStore } from '../store/cart-store';
import { Link, Outlet } from 'react-router-dom';
import useFirebase from '../firebase';
function ItemDetails() {
  const addtoCart = useCartStore((state) => state.addtoCart);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

const productlist=useFirebase((state)=>state.productlist)

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

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  function relatedproducts(){
    const relatedproducts= productlist.filter((items)=>items.category === product.category)
  }
  
  console.log(productlist)
  return (
    <div className="p-16 bg-white flex flex-col relative">
      {/* Product Images and Details Section */}
      <div className="flex flex-col lg:flex-row mb-10">
        <div className="lg:mr-20">
          <img
            src={product.image}
            alt={product.name} 
            className="h-[400px] w-auto shadow-lg rounded-lg mb-10 lg:mb-0 object-cover " 
          />
        </div>

        <div className="flex-2 text-black">
          <h1 className="font-popins text-3xl mb-5">
            <span className="font-bold">{product.name}</span> 
          </h1>
          <p className="text-2xl font-semibold mb-5">
            <span className="font-bold">${product.price}</span> 
          </p>
          <p className="mb-8 leading-relaxed w-[600px]">
            <span className="font-medium">{product.description}</span> 
          </p>

          {/* Add to Cart Section */}
          <div className="flex items-center mb-8">
            <input
              type="number"
              defaultValue="1"
              min="1"
              className="w-16 mr-4 p-2 rounded border border-gray-300"
            />
            <button
              className="px-5 py-2 bg-red-500 text-white rounded mr-4"
              onClick={() => addtoCart(product)}
            >
              Add to Cart
            </button>
            <button className="px-5 py-2 bg-transparent text-red-500 border border-red-500 rounded">
              Add to Wishlist
            </button>
          </div>

          {/* Additional Information Section */}
          <div className="pt-14">
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        </div>
      </div>

      {/* Mini Nav Bar */}
      <div className="border-t border-gray-200 pt-6">
        <nav className="text-black space-x-8 font-semibold">
          <Link to="details" end className="hover:text-red-700">Details</Link>
          <Link to="size" className="hover:text-red-700">Additional Info</Link>
          <Link to="reviews" className="hover:text-red-700">Reviews</Link>
        </nav>
      </div>

      {/* Outlet for Additional Info/Reviews */}
      <div className=" mr-40 mb-10 mt-20 p-5   rounded-md shadow-md">
        <Outlet context={product} />
      </div>
<hr />
<div className='h-[500px] flex'>
<h1 className='text-black text-xl  m-5 font-bold'>Related Products</h1>

{
relatedproducts.map(item=>{

<div key={item.id} className='grid grid-rows-3'>
<img src={item.image} alt="" />
<h1>{item.name}</h1>
<h1>{item.price}</h1>
</div>

})

}

</div>

    </div>
  );
}

export default ItemDetails;
