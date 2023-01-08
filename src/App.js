import "./App.css";
import { useEffect, useReducer, useRef, useState } from "react";

// utils
import sleep from "./utils/sleep";

// components
import { OptionList } from "./components/OptionList";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";

// store
import { OptionProvider } from "./store/optionStore";
import reducer, { actions } from "./store/reducer";

const initialState = {
  options: [],
  loading: true,
  selectedOptions: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cartRef = useRef();

  const value = {
    ...state,
    removeCartItem: (CartItem) => {
      dispatch({ type: actions.REMOVE_FROM_CART, payload: CartItem });
    },
    addCartItem: (CartItem) => {
      dispatch({ type: actions.ADD_TO_CART, payload: CartItem });
    },
    setOptions: (options) => {
      dispatch({ type: actions.SET_OPTIONS, payload: options });
    },
  };

  useEffect(() => {
    (async () => {
      // Fake API Delay
      await sleep(500);

      try {
        const result = await fetch("https://dockertestdev.emissions-calculator.com/api/test/options");
        const data = await result.json();
        value.setOptions(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <OptionProvider value={value}>
      <Layout>
        <OptionList />
        <Cart ref={cartRef} />
      </Layout>
    </OptionProvider>
  );
};

export default App;
