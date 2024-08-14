import React from 'react';
import { Outlet ,Link} from 'react-router-dom';

function ShopLayout() {
  return (
    <div
      style={{
        backgroundImage: 'url("/path-to-your-background-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white', // Example theme color
      }}
    >
    <div className="bg-[url('https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=400')] bg-no-repeat bg-center bg-cover h-[400px] w-auto bg-fixed text-white">
        <h1 className="text-7xl text-white font-extrabold p-40">SHOP</h1>
      </div>
      

      <main>
        <Outlet />
      </main>


    </div>
  );
}

export default ShopLayout;
