import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import ShopLayout from './pages/ShopLayout';  // Ensure this is correctly imported
import ItemDetails from './pages/Itemdetials';  // Corrected the naming
import { useEffect } from 'react';
import { useCartStore } from './store/cart-store';
import ReviewForm from './components/Reviews';
import Details from './components/Details';
import Size from './components/Size';
import NotFound from './pages/Notfound';
import BMICalculator from './pages/BMICalculator';
function App() {
  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bmi" element={<BMICalculator />} />
          <Route path="shop" element={<ShopLayout />}>
            <Route index element={<Shop />} />
            <Route path="product/:id" element={<ItemDetails />} >
            <Route index  element={<Details/>}/>
            <Route path='reviews'  element={<ReviewForm/>}/>
            <Route path='size'  element={<Size/>}/>
            
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
