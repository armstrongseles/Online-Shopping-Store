import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.cartHeader}>Shopping Cart</h2>
      <div style={styles.cartItems}>
        {state.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div style={styles.cartSummary}>
        <h3>Total Quantity: {state.totalQuantity}</h3>
        <h3>Total Amount: ${state.totalAmount}</h3>
      </div>
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '20px',
  },
  cartHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cartItems: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cartSummary: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Cart;
