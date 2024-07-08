import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const increaseQuantity = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const decreaseQuantity = () => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  return (
    <div style={styles.cartItem}>
      <img src={item.image} alt={item.title} style={styles.itemImage} />
      <div style={styles.itemDetails}>
        <h3 style={styles.itemTitle}>{item.title}</h3>
        <p style={styles.itemPrice}>${item.price}</p>
        <p style={styles.itemQuantity}>Quantity: {item.quantity}</p>
        <p style={styles.itemTotalPrice}>Total Price: ${item.totalPrice}</p>
        <button onClick={increaseQuantity} style={styles.quantityButton}>+</button>
        <button onClick={decreaseQuantity} style={styles.quantityButton}>-</button>
        <button onClick={removeFromCart} style={styles.removeButton}>Remove</button>
      </div>
    </div>
  );
};

const styles = {
  cartItem: {
    display: 'flex',
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '10px',
    padding: '20px',
    width: '600px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  itemImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  itemDetails: {
    marginLeft: '20px',
  },
  itemTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: '16px',
    color: '#4CAF50',
  },
  itemQuantity: {
    fontSize: '14px',
    color: '#757575',
  },
  itemTotalPrice: {
    fontSize: '16px',
    color: '#FF5722',
  },
  quantityButton: {
    padding: '5px 10px',
    backgroundColor: '#FF9800',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#F44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CartItem;
