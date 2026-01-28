import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice( {
    name: "cart",
    initialState,
    reducers: {
        addToCart ( state, action )
        {
            const item = state.items.find( i => i.id === action.payload.id );
            if ( item )
            {
                item.qty += 1;
            } else
            {
                state.items.push( { ...action.payload, qty: 1 } );
            }
        },
        increaseQty ( state, action )
        {
            const item = state.items.find( i => i.id === action.payload );
            if ( item ) item.qty += 1;
        },
        decreaseQty: ( state, action ) =>
        {
            const index = state.items.findIndex(
                item => item.id === action.payload
            );

            if ( index !== -1 )
            {
                if ( state.items[ index ].qty > 1 )
                {
                    state.items[ index ].qty -= 1;
                } else
                {
                    // 🔥 REMOVE ITEM WHEN QTY = 1
                    state.items.splice( index, 1 );
                }
            }

        },

        deleteItem ( state, action )
        {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

        clearCart ( state )
        {
            state.items = [];
        },
    },
} );

export const { addToCart, increaseQty, decreaseQty,deleteItem, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
