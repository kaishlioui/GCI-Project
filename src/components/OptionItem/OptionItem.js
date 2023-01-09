// store
import { useContext } from "react";
import OptionContext from "../../store/optionStore";

// styles
import { StyledOptionItem } from "./OptionItem.styled";

const OptionItem = ({ id, price, name, isAddedToCart }) => {
  const { addCartItem } = useContext(OptionContext);
  return (
    <StyledOptionItem role="article">
      <img className="option-item__img" src={`${process.env.PUBLIC_URL}/${id}.jpg`} alt={name} />
      <h3 className="option-item__name">{name}</h3>
      <div className="option-item__price">€{price}</div>
      <button disabled={isAddedToCart} className="option-item__action" onClick={() => addCartItem({ id, price, name })}>
        Add to Cart
      </button>
    </StyledOptionItem>
  );
};

export default OptionItem;
