import React, { useState } from 'react';
import { Eye, Edit, Trash2, Search, Filter } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  email: string;
  products: string;
  quantity: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

const AdminOrders: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const orders: Order[] = [
        { id: 'ORD-001', customerName: 'Rajesh Kumar', email: 'rajesh@email.com', products: 'Premium Green Cardamom', quantity: 2, total: 2400, status: 'pending', date: '2025-01-12' },
        { id: 'ORD-002', customerName: 'Priya Sharma', email: 'priya@email.com', products: 'Black Pepper', quantity: 1, total: 600, status: 'processing', date: '2025-01-11' },
        { id: 'ORD-003', customerName: 'Amit Patel', email: 'amit@email.com', products: 'Ceylon Cinnamon', quantity: 3, total: 1200, status: 'shipped', date: '2025-01-10' },
        { id: 'ORD-004', customerName: 'Sunita Devi', email: 'sunita@email.com', products: 'Organic Turmeric', quantity: 5, total: 1000, status: 'delivered', date: '2025-01-09' },
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
        <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">All Orders</h3>
                        <p className="text-gray-600 mt-1">Manage and track all customer orders.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Details</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product & Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{order.id}</div>
                                        <div className="text-sm text-gray-500">{order.date}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                                        <div className="text-sm text-gray-500">{order.email}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm text-gray-900">{order.products}</div>
                                        <div className="text-sm text-gray-500">Qty: {order.quantity}kg</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{order.total.toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>{order.status}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-green-600 hover:text-green-900 p-1 rounded-full hover:bg-green-100"><Eye className="h-4 w-4" /></button>
                                        <button className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-100"><Edit className="h-4 w-4" /></button>
                                        <button className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-100"><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrders;
