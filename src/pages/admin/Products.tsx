import React from 'react';
import { Eye, Edit, Trash2, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive';
}

const AdminProducts: React.FC = () => {
    const products: Product[] = [
        { id: 'PRD-001', name: 'Premium Green Cardamom', price: 1200, stock: 45, category: 'Cardamom', status: 'active' },
        { id: 'PRD-002', name: 'Black Cardamom', price: 800, stock: 32, category: 'Cardamom', status: 'active' },
        { id: 'PRD-003', name: 'Organic Black Pepper', price: 600, stock: 28, category: 'Pepper', status: 'active' },
        { id: 'PRD-004', name: 'Ceylon Cinnamon', price: 400, stock: 15, category: 'Cinnamon', status: 'inactive' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Product Management</h3>
                        <p className="text-gray-600 mt-1">Add, edit, and manage your spice inventory.</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                        <Plus className="h-5 w-5 mr-2" />
                        Add Product
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                    <div className="text-sm text-gray-500">{product.id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{product.price}/kg</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <span className={product.stock < 20 ? 'text-red-600 font-semibold' : 'text-green-600'}>
                                        {product.stock} kg
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                        product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {product.status}
                                    </span>
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

export default AdminProducts;
