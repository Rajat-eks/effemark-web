import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomerInfo {
  fullName: string;
  email: string;
  contactNumber: string;
  country: string;
  markTypes: string;
  markDetails?: string;
  markImage?: string; // Store file path or base64
  niceClasses?: string;
  goodsServices?: string;
  referenceNumber?: string;
  message?: string;
}

export interface ICartItem {
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

export interface IOrder extends Document {
  orderNumber: string;
  customerInfo: ICustomerInfo;
  items: ICartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  paymentId?: string;
  paymentStatus?: string;
  paymentMethod?: string;
  paymentMode?: string; // sandbox, live
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

const CustomerInfoSchema = new Schema<ICustomerInfo>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  country: { type: String, required: false },
  markTypes: { type: String, required: true },
  markDetails: { type: String },
  markImage: { type: String },
  niceClasses: { type: String },
  goodsServices: { type: String },
  referenceNumber: { type: String },
  message: { type: String },
});

const CartItemSchema = new Schema<ICartItem>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  banner: { type: String, required: true },
  included: { type: String, required: true },
  addOns: [{
    name: { type: String },
    price: { type: Number },
  }],
  selectedAddOns: [{
    name: { type: String },
    price: { type: Number },
  }],
});

const OrderSchema = new Schema<IOrder>({
  orderNumber: { 
    type: String, 
    required: true, 
    unique: true
  },
  customerInfo: { 
    type: CustomerInfoSchema, 
    required: true 
  },
  items: [CartItemSchema],
  total: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  paymentId: { 
    type: String
  },
  paymentStatus: { 
    type: String 
  },
  paymentMethod: { 
    type: String,
    default: 'paypal'
  },
  paymentMode: { 
    type: String,
    enum: ['sandbox', 'live'],
    default: 'live'
  },
  notes: { 
    type: String 
  },
  trackingNumber: { 
    type: String 
  },
  estimatedDelivery: { 
    type: Date 
  },
}, {
  timestamps: true,
  collection: 'orders'
});

// Indexes for better query performance
OrderSchema.index({ orderNumber: 1 });
OrderSchema.index({ 'customerInfo.email': 1 });
OrderSchema.index({ status: 1 });
OrderSchema.index({ createdAt: -1 });
OrderSchema.index({ paymentId: 1 });

// Virtual for order age
OrderSchema.virtual('orderAge').get(function() {
  return Date.now() - this.createdAt.getTime();
});

// Method to update status
OrderSchema.methods.updateStatus = function(newStatus: string, notes?: string) {
  this.status = newStatus;
  if (notes) {
    this.notes = notes;
  }
  this.updatedAt = new Date();
  return this.save();
};

// Static method to find by order number
OrderSchema.statics.findByOrderNumber = function(orderNumber: string) {
  return this.findOne({ orderNumber });
};

// Static method to find by customer email
OrderSchema.statics.findByCustomerEmail = function(email: string) {
  return this.find({ 'customerInfo.email': email }).sort({ createdAt: -1 });
};

// Static method to get order statistics
OrderSchema.statics.getOrderStats = function() {
  return this.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalValue: { $sum: '$total' }
      }
    }
  ]);
};

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
