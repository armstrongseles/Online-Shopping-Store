import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { products } from '../data';

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div style={styles.productList}>
      {products.map((product) => (
        <div key={product.id} style={styles.productCard}>
          <img src={product.image} alt={product.title} style={styles.productImage} />
          <h3 style={styles.productTitle}>{product.title}</h3>
          <p style={styles.productPrice}>${product.price}</p>
          <p style={styles.productDescription}>{product.description}</p>
          <p style={styles.productCategory}>Category: {product.category}</p>
          <p style={styles.productRating}>Rating: {product.rating.rate} ({product.rating.count})</p>
          <button onClick={() => addToCart(product)} style={styles.addButton}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
  productCard: {
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '10px',
    padding: '20px',
    width: '250px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  productTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: '16px',
    color: '#4CAF50',
  },
  productDescription: {
    fontSize: '14px',
    color: '#757575',
  },
  productCategory: {
    fontSize: '14px',
    color: '#2196F3',
  },
  productRating: {
    fontSize: '14px',
    color: '#FF9800',
  },
  addButton: {
    padding: '10px 15px',
    backgroundColor: '#FF5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductList;
