// Fallback storage for development when MongoDB is not available
import { IOrder } from '@/models/Order';

interface FallbackOrder {
  _id: string;
  orderNumber: string;
  customerInfo: any;
  items: any[];
  total: number;
  status: string;
  paymentId?: string;
  paymentStatus?: string;
  paymentMethod?: string;
  paymentMode?: string;
  createdAt: Date;
  updatedAt: Date;
}

class FallbackStorage {
  private orders: Map<string, FallbackOrder> = new Map();
  private orderCounter = 0;

  async createOrder(orderData: any): Promise<FallbackOrder> {
    const orderId = `fallback_${++this.orderCounter}_${Date.now()}`;
    
    // Debug: Log the order data being saved
    console.log('🔍 Fallback order data:', {
      orderNumber: orderData.orderNumber,
      total: orderData.total,
      totalType: typeof orderData.total,
      items: orderData.items?.length || 0
    });
    
    const order: FallbackOrder = {
      _id: orderId,
      orderNumber: orderData.orderNumber,
      customerInfo: orderData.customerInfo,
      items: orderData.items,
      total: orderData.total,
      status: orderData.status || 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.orders.set(orderId, order);
    console.log('📦 Order saved to fallback storage:', order.orderNumber, 'Total:', order.total);
    return order;
  }

  async findById(id: string): Promise<FallbackOrder | null> {
    return this.orders.get(id) || null;
  }

  async findByOrderNumber(orderNumber: string): Promise<FallbackOrder | null> {
    for (const order of this.orders.values()) {
      if (order.orderNumber === orderNumber) {
        return order;
      }
    }
    return null;
  }

  async findByEmail(email: string): Promise<FallbackOrder[]> {
    const orders: FallbackOrder[] = [];
    for (const order of this.orders.values()) {
      if (order.customerInfo.email === email) {
        orders.push(order);
      }
    }
    return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async updateOrder(id: string, updates: Partial<FallbackOrder>): Promise<FallbackOrder | null> {
    const order = this.orders.get(id);
    if (!order) return null;

    const updatedOrder = {
      ...order,
      ...updates,
      updatedAt: new Date(),
    };

    this.orders.set(id, updatedOrder);
    return updatedOrder;
  }

  async getAllOrders(): Promise<FallbackOrder[]> {
    return Array.from(this.orders.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getOrderStats(): Promise<any[]> {
    const stats = new Map<string, { count: number; totalValue: number }>();
    
    for (const order of this.orders.values()) {
      const status = order.status;
      if (!stats.has(status)) {
        stats.set(status, { count: 0, totalValue: 0 });
      }
      
      const stat = stats.get(status)!;
      stat.count++;
      stat.totalValue += order.total;
    }

    return Array.from(stats.entries()).map(([status, data]) => ({
      _id: status,
      count: data.count,
      totalValue: data.totalValue,
    }));
  }
}

// Global fallback storage instance
export const fallbackStorage = new FallbackStorage();

// Mock Mongoose-like methods for fallback
export const FallbackOrder = {
  create: (data: any) => fallbackStorage.createOrder(data),
  findById: (id: string) => fallbackStorage.findById(id),
  findOne: (query: any) => {
    if (query.orderNumber) {
      return fallbackStorage.findByOrderNumber(query.orderNumber);
    }
    return null;
  },
  find: (query: any) => {
    if (query['customerInfo.email']) {
      return fallbackStorage.findByEmail(query['customerInfo.email']);
    }
    return fallbackStorage.getAllOrders();
  },
  findByOrderNumber: (orderNumber: string) => fallbackStorage.findByOrderNumber(orderNumber),
  findByEmail: (email: string) => fallbackStorage.findByEmail(email),
  updateOrder: (id: string, updates: any) => fallbackStorage.updateOrder(id, updates),
  countDocuments: async () => (await fallbackStorage.getAllOrders()).length,
  aggregate: () => fallbackStorage.getOrderStats(),
};

// Mock save method for created documents
export const createFallbackDocument = (data: any) => {
  const doc = {
    ...data,
    _id: `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    save: async () => {
      return await fallbackStorage.createOrder(data);
    },
  };
  return doc;
};
