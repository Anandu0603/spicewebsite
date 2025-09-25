import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, LogIn } from 'lucide-react';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            if (email === 'admin@spiceparadise.com' && password === 'password') {
                // In a real app, you'd get a token and save it
                navigate('/admin/dashboard');
            } else {
                setError('Invalid credentials. Please try again.');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50 p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
                            <Leaf className="h-10 w-10 text-green-600" />
                            <span className="text-3xl font-bold text-gray-900">Spice Paradise</span>
                        </Link>
                        <h2 className="text-2xl font-semibold text-gray-800">Admin Portal</h2>
                        <p className="text-gray-500 mt-2">Sign in to manage your store</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                placeholder="admin@spiceparadise.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                placeholder="password"
                            />
                        </div>

                        {error && (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 text-center"
                            >
                                {error}
                            </motion.p>
                        )}

                        <div>
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        Signing In...
                                    </>
                                ) : (
                                    <>
                                        <LogIn className="h-5 w-5 mr-2" />
                                        Sign In
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                    Use <code className="bg-gray-200 p-1 rounded">admin@spiceparadise.com</code> and <code className="bg-gray-200 p-1 rounded">password</code> to log in.
                </p>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
