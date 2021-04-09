function ProductList({ products }) {
  const styles = {
    height: '100vh',
    backgroundColor: 'orange',
    display: 'flex'
  }

  const productElements = products.map((product) => (
    <div>
      <h3>{product.name}</h3>
    </div>
  ))

  return (
    <div style={styles}>{productElements}</div>
  );
}

export default ProductList;