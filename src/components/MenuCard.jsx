function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default MenuCard;
