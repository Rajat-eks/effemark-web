import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  customerInfo?: {
    fullName: string;
    email: string;
    contactNumber: string;
    country: string;
    markTypes: string;
    markDetails?: string;
    markImage?: string;
    niceClasses?: string;
    goodsServices?: string;
    referenceNumber?: string;
    message?: string;
  };
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
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Update price and add-ons to match the new payload (in case add-ons changed)
        existingItem.price = action.payload.price;
        existingItem.selectedAddOns = action.payload.selectedAddOns;
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Recalculate totals
      // Price already includes add-ons, so we don't need to add them separately
      state.itemCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.total = state.items.reduce((total, item) => {
        // item.price already includes add-ons, so just multiply by quantity
        const itemTotal = item.price * item.quantity;
        return total + itemTotal;
      }, 0);
      
      console.log('🔍 Cart total calculated:', state.total);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Recalculate totals
      // Price already includes add-ons, so we don't need to add them separately
      state.itemCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.total = state.items.reduce((total, item) => {
        // item.price already includes add-ons, so just multiply by quantity
        return total + item.price * item.quantity;
      }, 0);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;

        // Recalculate totals
        // Price already includes add-ons, so we don't need to add them separately
        state.itemCount = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.total = state.items.reduce((total, item) => {
          // item.price already includes add-ons, so just multiply by quantity
          return total + item.price * item.quantity;
        }, 0);
      }
    },

    updateAddOns: (
      state,
      action: PayloadAction<{
        id: string;
        selectedAddOns: Array<{ name: string; price: number }>;
      }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        // Calculate old add-ons total to get base price
        const oldAddOnsTotal = item.selectedAddOns?.reduce(
          (sum, addOn) => sum + addOn.price,
          0
        ) || 0;
        
        // Get base product price (current price minus old add-ons)
        const basePrice = item.price - oldAddOnsTotal;
        
        // Calculate new add-ons total
        const newAddOnsTotal = action.payload.selectedAddOns.reduce(
          (sum, addOn) => sum + addOn.price,
          0
        );
        
        // Update selected add-ons and recalculate price
        item.selectedAddOns = action.payload.selectedAddOns;
        item.price = basePrice + newAddOnsTotal;

        // Recalculate totals
        // Price already includes add-ons, so we don't need to add them separately
        state.itemCount = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.total = state.items.reduce((total, item) => {
          // item.price already includes add-ons, so just multiply by quantity
          return total + item.price * item.quantity;
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

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  updateAddOns,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
