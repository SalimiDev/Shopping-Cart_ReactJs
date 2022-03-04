import React, { useReducer, createContext } from 'react';
export const cartContext = createContext();

const initialState = {
      selectedItems: [],
      itemCounter: 0,
      total: 0,
      checkout: false,
};

const cartaReducer = (state, action) => {
      switch (action.type) {
            case 'ADD_ITEM ':
                  if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
                        state.selectedItems.push({ ...action.payload, quantity: 0 });
                  }

                  return {
                        ...state,
                        selectedItems: [...state.selectedItems],
                  };

            case 'REMOVE_ITEM ':
                  const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
                  return {
                        ...state,
                        selectedItems: [...newSelectedItems],
                  };

            case 'INCREASE':
                  const indexI = state.selectedItems.findIndex((item) => item.id === action.payload.id);
                  state.selectedItems[indexI].quantity++;
                  return {
                        ...state,
                  };

            case 'DECREASE':
                  const indexD = state.selectedItems.findIndex((item) => item.id === action.payload.id);
                  state.selectedItems[indexD].quantity--;
                  return {
                        ...state,
                  };
            case 'CHECKOUT':
                  return {
                        selectedItems: [],
                        itemCounter: 0,
                        total: 0,
                        checkout: true,
                  };

            case 'CLEAR':
                  return {
                        selectedItems: [],
                        itemCounter: 0,
                        total: 0,
                        checkout: false,
                  };
            default:
                  return state;
      }
};

const CartContextProvider = ({ children }) => {
      // States
      const [state, dispatch] = useReducer(cartaReducer, initialState);

      return (
            <div>
                  <cartContext.Provider value={{ state, dispatch }}>{children}</cartContext.Provider>
            </div>
      );
};

export default CartContextProvider;
