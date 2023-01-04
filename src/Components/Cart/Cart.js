import classes from "./Cart.module.css";

const Cart = () => {
  const cartItem = <ul className="classes.">{[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>)}</ul>;
  
  return (
    <div>
      {cartItem}
      <div className="classes.total"></div>
      <span>Total Amount</span>
      <span>35.62</span>
      <div className="classes.actions">
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
