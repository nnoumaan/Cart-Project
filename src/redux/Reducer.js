import { createReducer } from "@reduxjs/toolkit";

// const addValue=()=>{

//   state.cart.quantity += 1;
//   // state.subtotal += item.price
//   state.total = state.shipping + state.subtotal + state.tax;

// }

export const cartReducer = createReducer(
  {
    cartItem: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const isItemExist = state.cartItem.find((i) => i.id === newItem.id);
      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === newItem.id) {
            console.log(i.quantity);
            i.quantity++;
          }
        });
      } else {
        state.cartItem.push(newItem);
      }
    },

    decrement: (state, action) => {
      state.cartItem.forEach((i) => {
        if (i.id === action.payload.id && i.quantity >= 1) {
          switch (action.payload.myAction) {
            case "decrement":
              i.quantity--;
              break;

            case "delete":
              i.quantity = 0;
              // state.cartItem = state.cartItem.filter((item) => item != i);

              break;
              default:
                break;
          }
        }

        if (i.quantity <= 0) {
          // i.quantity = 0;
          state.cartItem = state.cartItem.filter((item) => item !== i);
          return;
        }
      });
    },

    totalCalculate: (state) => {
      if (state.cartItem.length === 0) state.subtotal = 0;
      let sum = 0;
      state.cartItem.forEach((i) => {
        sum += i.price * i.quantity;
        state.subtotal = sum;
      });
      state.tax = state.subtotal * 0.1;
      state.shipping = state.cartItem.length * 40;
      state.total = state.subtotal + state.shipping + state.tax;
    },
  }
);
