function Header({ cart, onCartClick }) {
  const styles = {
    height: 100,
    backgroundColor: 'red'
  }
  return (
    <div style={styles}>
      <p>
        <span>{cart.length} items in cart </span>
        <button onClick={onCartClick}>Open cart</button>
      </p>
    </div>
  );
}

export default Header;