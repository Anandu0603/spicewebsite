import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Package, Users, ShoppingCart, Leaf, Menu, X, Bell, User, LogOut, Settings } from 'lucide-react';

const AdminLayout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/admin/dashboard' },
        { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
        { id: 'products', label: 'Products', icon: Package, path: '/admin/products' },
        { id: 'customers', label: 'Customers', icon: Users, path: '/admin/customers' },
        { id: 'settings', label: 'Settings', icon: Settings, path: '#' },
    ];

    const handleLogout = () => {
        // In a real app, you'd clear auth tokens here
        navigate('/admin/login');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 256 : 80 }}
                className="bg-gray-900 text-white flex flex-col"
            >
                <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
                    <Link to="/admin/dashboard" className="flex items-center space-x-2">
                        <Leaf className="h-8 w-8 text-green-400" />
                        {isSidebarOpen && <span className="text-xl font-bold">Spice Paradise</span>}
                    </Link>
                </div>
                <nav className="flex-1 py-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`flex items-center py-3 px-6 transition-colors ${
                                location.pathname === item.path
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <item.icon className="h-5 w-5" />
                            {isSidebarOpen && <span className="ml-4">{item.label}</span>}
                        </Link>
                    ))}
                </nav>
                <div className="px-6 py-4 border-t border-gray-700">
                     <button onClick={handleLogout} className="flex items-center w-full py-3 px-6 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
                        <LogOut className="h-5 w-5" />
                        {isSidebarOpen && <span className="ml-4">Logout</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-10">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-600">
                        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-gray-800">
                            <Bell className="h-6 w-6" />
                        </button>
                        <div className="flex items-center space-x-2">
                            <User className="h-8 w-8 text-gray-600 bg-gray-200 rounded-full p-1" />
                            <div>
                                <p className="font-semibold text-sm">Admin User</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
