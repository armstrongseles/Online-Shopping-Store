import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.appHeader}>Online Shopping Store</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7cac9',
    padding: '20px',
  },
  appHeader: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '40px',
  },
};

export default App;
