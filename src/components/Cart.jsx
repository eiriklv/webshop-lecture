function Cart({ cart, onClose, onRemoveItem }) {
  const styles = {
    position: 'fixed',
    right: 0,
    top: 0,
    width: '30vw',
    height: '100vh',
    backgroundColor: 'yellow',
  }
  return (
    <div style={styles}>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Cart;