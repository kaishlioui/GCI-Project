// stores
import OptionContext from "../../store/optionStore";

// components
import { useContext } from "react";
import { OptionItem } from "../OptionItem";
import { OptionItemLoader } from "../OptionItem";

// styles
import { StyledOptionList } from "./OptionList.styled";

const OptionList = () => {
  const { loading, options, selectedOptions } = useContext(OptionContext);

  return (
    <StyledOptionList>
      <h1 className="option-list__title">Our Services</h1>

      <div className="option-list__items">
        {loading ? (
          <>
            {[...Array(5).keys()].map((item) => (
              <OptionItemLoader key={item} />
            ))}
          </>
        ) : (
          <>
            {options.map((item) => {
              const isAddedToCart = selectedOptions.filter((element) => item.id === element.id).length;
              return <OptionItem key={item.id} {...item} isAddedToCart={isAddedToCart} />;
            })}
          </>
        )}
      </div>
    </StyledOptionList>
  );
};

export default OptionList;
