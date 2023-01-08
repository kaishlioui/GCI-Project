// store
import OptionContext from "../../store/optionStore";

// components
import { forwardRef, useContext, useEffect } from "react";
import { CartItem } from "../CartItem";

// styles
import { StyledCart } from "./Cart.styled";
import scrollToBottom from "../../utils/scrollToBottom";

const Cart = forwardRef(({}, ref) => {
  const { selectedOptions } = useContext(OptionContext);
  const total = selectedOptions.reduce((accu, curr) => accu + parseFloat(curr.price), 0);

  useEffect(() => {
    if (!!selectedOptions.length) {
      scrollToBottom(ref);
    }
  }, [selectedOptions]);

  return (
    <StyledCart ref={ref}>
      {!!selectedOptions.length && (
        <>
          <h2 className="cart__title">Selected Options</h2>

          <div className="cart__items" role="list">
            {selectedOptions.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>

          <div className="cart__total">Total: €{total.toFixed(2)}</div>
        </>
      )}
    </StyledCart>
  );
});

export default Cart;
