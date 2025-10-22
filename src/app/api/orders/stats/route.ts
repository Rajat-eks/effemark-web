import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder, fallbackStorage } from '@/lib/fallback-storage';

// Get order statistics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    let stats;
    let useFallback = false;

    try {
      await connectDB();
      
      // Build date filter
      const dateFilter: any = {};
      if (startDate) {
        dateFilter.createdAt = { $gte: new Date(startDate) };
      }
      if (endDate) {
        dateFilter.createdAt = { 
          ...dateFilter.createdAt,
          $lte: new Date(endDate)
        };
      }

      // Get order statistics from MongoDB
      const pipeline = [
        { $match: dateFilter },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 },
            totalValue: { $sum: '$total' },
            avgValue: { $avg: '$total' }
          }
        },
        {
          $group: {
            _id: null,
            statusBreakdown: {
              $push: {
                status: '$_id',
                count: '$count',
                totalValue: '$totalValue',
                avgValue: '$avgValue'
              }
            },
            totalOrders: { $sum: '$count' },
            totalValue: { $sum: '$totalValue' }
          }
        }
      ];

      const result = await Order.aggregate(pipeline);
      stats = result[0] || {
        statusBreakdown: [],
        totalOrders: 0,
        totalValue: 0
      };

      console.log('✅ Order statistics retrieved from MongoDB');
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      
      // Get statistics from fallback storage
      const allOrders = await fallbackStorage.getAllOrders();
      
      // Apply date filter
      let filteredOrders = allOrders;
      if (startDate || endDate) {
        const start = startDate ? new Date(startDate) : new Date(0);
        const end = endDate ? new Date(endDate) : new Date();
        
        filteredOrders = allOrders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate >= start && orderDate <= end;
        });
      }

      // Calculate statistics
      const statusMap = new Map();
      let totalOrders = filteredOrders.length;
      let totalValue = 0;

      filteredOrders.forEach(order => {
        const status = order.status;
        if (!statusMap.has(status)) {
          statusMap.set(status, { count: 0, totalValue: 0 });
        }
        
        const statusData = statusMap.get(status);
        statusData.count++;
        statusData.totalValue += order.total;
        totalValue += order.total;
      });

      const statusBreakdown = Array.from(statusMap.entries()).map(([status, data]) => ({
        status,
        count: data.count,
        totalValue: data.totalValue,
        avgValue: data.totalValue / data.count
      }));

      stats = {
        statusBreakdown,
        totalOrders,
        totalValue
      };
    }

    // Calculate additional metrics
    const statusBreakdown = stats.statusBreakdown || [];
    const totalOrders = stats.totalOrders || 0;
    const totalValue = stats.totalValue || 0;
    const avgOrderValue = totalOrders > 0 ? totalValue / totalOrders : 0;

    // Get status counts
    const statusCounts = statusBreakdown.reduce((acc: any, item: any) => {
      acc[item.status] = item.count;
      return acc;
    }, {});

    return NextResponse.json({
      success: true,
      stats: {
        totalOrders,
        totalValue: parseFloat(totalValue.toFixed(2)),
        avgOrderValue: parseFloat(avgOrderValue.toFixed(2)),
        statusBreakdown,
        statusCounts: {
          pending: statusCounts.pending || 0,
          processing: statusCounts.processing || 0,
          completed: statusCounts.completed || 0,
          failed: statusCounts.failed || 0,
          cancelled: statusCounts.cancelled || 0,
          refunded: statusCounts.refunded || 0
        },
        dateRange: {
          startDate: startDate || null,
          endDate: endDate || null
        }
      },
      storage: useFallback ? 'fallback' : 'mongodb'
    });

  } catch (error) {
    console.error('❌ Error retrieving order statistics:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve order statistics' },
      { status: 500 }
    );
  }
}
