import { useContext } from "react";

//store
import OptionContext from "../../store/optionStore";

// styles
import { StyledCartItem } from "./CartItem.styled";

const CartItem = ({ id, price, name }) => {
  const { removeCartItem } = useContext(OptionContext);
  return (
    <StyledCartItem>
      <img className="cart-item__img" src={`/${id}.jpg`} alt={name} />
      <h3 className="cart-item__name">{name}</h3>
      <div className="cart-item__price">€{price}</div>
      <button className="cart-item__action" onClick={() => removeCartItem({ id, price, name })}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      </button>
    </StyledCartItem>
  );
};

export default CartItem;
