import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items : [],
    },
    reducers: {
        addItem : (state, action) => {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity = (existing.quantity || 1) + 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },  
        removeItem : (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart : (state) => {
            state.items = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity = (item.quantity || 1) - 1;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },
    },
});
export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;