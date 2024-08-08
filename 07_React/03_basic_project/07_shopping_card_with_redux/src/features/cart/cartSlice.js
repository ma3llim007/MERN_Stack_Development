import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartsData: [],
}

export const counterSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let isPrevent = false;
            state.cartsData.map((cart) => {
                if (cart.id === action.payload.id) {
                    isPrevent = true;
                }
            })
            if (!isPrevent) {
                state.cartsData.push(action.payload);
                toast.success('Item is Add To Cart', {
                    position: "bottom-center",
                    autoClose: 1300,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            } else {
                toast.error('Item Is Already In Cart', {
                    position: "bottom-center",
                    autoClose: 1300,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

        },
        increamentQty: (state, action) => {
            let UpdateState = state.cartsData.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item;
            });
            state.cartsData = UpdateState;
        },
        decreamentQty: (state, action) => {
            let updateState = state.cartsData.map((item) => {
                if (item.id === action.payload) {
                    if (item.amount > 1) {
                        return { ...item, amount: item.amount - 1 }
                    }
                    return item;
                } else {
                    return item;
                }
            });
            state.cartsData = updateState;
        },
        removeItemInCart: (state, action) => {
            state.cartsData = state.cartsData.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, increamentQty, decreamentQty, removeItemInCart } = counterSlice.actions;
export default counterSlice.reducer;