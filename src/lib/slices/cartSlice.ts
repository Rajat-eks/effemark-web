import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  banner: string;
  included: string;
  addOns?: Array<{
    name: string;
    price: number;
  }>;
  selectedAddOns?: Array<{
    name: string;
    price: number;
  }>;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      // Recalculate totals
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => {
        const basePrice = item.price * item.quantity;
        const addOnsPrice = item.selectedAddOns?.reduce((addOnTotal, addOn) => 
          addOnTotal + (addOn.price * item.quantity), 0) || 0;
        return total + basePrice + addOnsPrice;
      }, 0);
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      // Recalculate totals
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => {
        const basePrice = item.price * item.quantity;
        const addOnsPrice = item.selectedAddOns?.reduce((addOnTotal, addOn) => 
          addOnTotal + (addOn.price * item.quantity), 0) || 0;
        return total + basePrice + addOnsPrice;
      }, 0);
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        
        // Recalculate totals
        state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
        state.total = state.items.reduce((total, item) => {
          const basePrice = item.price * item.quantity;
          const addOnsPrice = item.selectedAddOns?.reduce((addOnTotal, addOn) => 
            addOnTotal + (addOn.price * item.quantity), 0) || 0;
          return total + basePrice + addOnsPrice;
        }, 0);
      }
    },
    
    updateAddOns: (state, action: PayloadAction<{ id: string; selectedAddOns: Array<{ name: string; price: number }> }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.selectedAddOns = action.payload.selectedAddOns;
        
        // Recalculate totals
        state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
        state.total = state.items.reduce((total, item) => {
          const basePrice = item.price * item.quantity;
          const addOnsPrice = item.selectedAddOns?.reduce((addOnTotal, addOn) => 
            addOnTotal + (addOn.price * item.quantity), 0) || 0;
          return total + basePrice + addOnsPrice;
        }, 0);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, updateAddOns, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
