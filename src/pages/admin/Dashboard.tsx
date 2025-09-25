import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Package, Users, Eye } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

const Dashboard: React.FC = () => {
    const stats = [
        { label: 'Total Orders', value: '1,234', change: '+12%', icon: ShoppingCart, color: 'bg-blue-500' },
        { label: 'Revenue', value: '₹2,45,678', change: '+8%', icon: TrendingUp, color: 'bg-green-500' },
        { label: 'Products', value: '45', change: '+2', icon: Package, color: 'bg-purple-500' },
        { label: 'Customers', value: '856', change: '+15%', icon: Users, color: 'bg-orange-500' },
    ];

    const recentOrders: Order[] = [
        { id: 'ORD-001', customerName: 'Rajesh Kumar', total: 2400, status: 'pending' },
        { id: 'ORD-002', customerName: 'Priya Sharma', total: 600, status: 'processing' },
        { id: 'ORD-003', customerName: 'Amit Patel', total: 1200, status: 'shipped' },
        { id: 'ORD-004', customerName: 'Sunita Devi', total: 900, status: 'delivered' },
        { id: 'ORD-005', customerName: 'Vikram Singh', total: 1800, status: 'pending' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'processing': return 'bg-blue-100 text-blue-800';
            case 'shipped': return 'bg-purple-100 text-purple-800';
            case 'delivered': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">Welcome back, Admin! Here's your store's overview.</p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-lg p-6"
                    >
                        <div className="flex items-center">
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                <div className="flex items-center">
                                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                    <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {recentOrders.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.total.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-green-600 hover:text-green-900 flex items-center">
                                            <Eye className="h-4 w-4 mr-1" /> View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
