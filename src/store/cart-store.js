import { create } from 'zustand';

export const useCartStore = create((set) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const storedQuantities = JSON.parse(localStorage.getItem('quantities')) || {};

  return {
    cart: storedCart,
    quantities: storedQuantities,
    setCart: (storedcart) => set({ cart: storedcart }),
    
    addtoCart: (product) => set((state) => {
      const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
      let updatedCart;

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase the quantity
        updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add it with an initial quantity of 1
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
    
    removeFromCart: (id) => set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

    clearCart: () => {
      localStorage.removeItem('cart');
      localStorage.removeItem('quantities');
      set({ cart: [], quantities: {} });
    },
    
    updateQuantities: (newQuantities) => {
      localStorage.setItem('quantities', JSON.stringify(newQuantities));
      set({ quantities: newQuantities });
    }
  };
});
