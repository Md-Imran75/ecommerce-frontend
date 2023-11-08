
import {createSlice} from '@reduxjs/toolkit'

const initialState = {

    isCartOpen: false,
    cart: [],
    items: [],
};



export const cartSlice = createSlice({
    
    initialState,
    name: 'Cart',
    reducers: {
        setItems: (state , action) => {
            state.items = action.payload
        },

    addToCart: (state , action) => {
        const item = state.cart.find((p) => p.id === action.payload.id);
        if(item){
          if(item.attributes.availableQTY >= item.quantity){
            item.quantity++
          }
          item.attributes.price = item.oneProductPrice * item.quantity 
          if(item.attributes.availableQTY >= 1){
            item.attributes.availableQTY--
          }
        }else{
         state.cart.push({...action.payload , quantity : 1}); 
         if(action.payload.attributes.availableQTY >= 1){
            action.payload.attributes.availableQTY--
          } 
        }
    } ,

    removeFromCart: (state , action) => {
     
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    } ,

    increaseCount: (state , action) => {
        state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id){
                if(item.attributes.availableQTY >= item.quantity){
                    item.quantity++
                  }
                item.attributes.price = item.oneProductPrice * item.quantity
                if(item.attributes.availableQTY >= 1){
                    item.attributes.availableQTY--
                  }
            }

            return item
        })
    },

    decreaseCount: (state , action) => {
        state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id && item.quantity > 1){
                item.quantity--;
                item.attributes.price = item.oneProductPrice * item.quantity
                
                    item.attributes.availableQTY++
                  
            }
            return item
        })
    },


    setIsCartOpen: (state) => {

    state.isCartOpen = !state.isCartOpen

    }
        
    }
});

export const {

    setItems , 
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen

} = cartSlice.actions;

export default cartSlice.reducer;