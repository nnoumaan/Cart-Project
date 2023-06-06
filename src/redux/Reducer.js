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
      const item = action.payload;
      const isItemExist = state.cartItem.find((i) => i.id === item.id);
      state.subtotal += item.price;
      state.tax = (state.subtotal / 100) * 10;

      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
            // state.subtotal += item.price
            state.total = state.shipping + state.subtotal + state.tax;
          }
        });
      } else {
        state.shipping += 40;
        state.cartItem.push(item);
        state.total = state.shipping + state.subtotal + state.tax;
      }
    },

    increment: (state, action) => {
      state.cartItem.map((i) => {
        if (i.id === action.payload) {
          i.quantity += 1;

          state.subtotal += i.price;

          state.tax = (state.subtotal / 100) * 10;
          state.total = state.shipping + state.subtotal + state.tax;
        }

        // return i.quantity;
      });
    },

    decrement: (state, action) => {
      state.cartItem.map((i) => {
        console.log("runn");
        if (i.id === action.payload && i.quantity > 0) {
          i.quantity--;

          state.subtotal -= i.price;

          state.tax = (state.subtotal / 100) * 10;
          state.total = state.shipping + state.subtotal + state.tax;
        }

        if (i.quantity == 0) {
          state.shipping -= 40;
          state.cartItem.splice(state.cartItem.indexOf(i), 1);
          state.total = state.shipping + state.subtotal + state.tax;
        }
      });
    },

    delete: (state, action) => {
      state.cartItem.map((i) => {
        if (i.id === action.payload) {
          state.subtotal -= i.price * i.quantity;
          state.tax -= (i.price / 100) * 10 * i.quantity;
          state.shipping -= 40;
          state.total = state.shipping + state.subtotal + state.tax;
          state.cartItem.splice(state.cartItem.indexOf(i), 1);

          // delete state.cartItem[state.cartItem.indexOf(i)]
        }

        // console.log(state.cartItem.findIndex(i.id === action.payload))
      });
    },
  }
);
