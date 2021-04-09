import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

import phones from './data/phones';

function Container({ children }) {
  return <div style={{ minHeight: '100vh' }}>{children}</div>
}

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(undefined);

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
  }

  const handleShowCart = () => {
    setShowCart(true);
  }

  const handleHideCart = () => {
    setShowCart(false);
  }
 
  const handleAddItemToCart = ({ id, variant, color }) => {
    setCart([
      ...cart,
      { id, variant, color }
    ]);
  }

  const handleRemoveItemFromCart = (index) => {
    setCart([
      ...cart.slice(0, index),
      ...cart.slice(index + 1)
    ]);
  }

  const selectedProduct = phones.find(({ id }) => id === selectedProductId);

  return (
    <Container>
      <Header
        cart={cart}
        onCartClick={handleShowCart}
      />
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={handleAddItemToCart}
        />
      ) : (
        <ProductList
          onProductClick={handleSelectProduct}  
          products={phones}
        />
      )}
      <Footer />
      {showCart && (
        <Cart
          cart={cart}
          onClose={handleHideCart}
          onRemoveItem={handleRemoveItemFromCart}
        />
      )}
    </Container>
  );
}

export default App;
