const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="greeting-section">
        <h1>{greeting}</h1>
      </div>
      <div className="products-grid">
        <p>Próximamente: Catálogo de productos</p>
      </div>
    </div>
  );
};
export default ItemListContainer;
