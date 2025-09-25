import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const AdminCustomers: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
            <Users className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Management</h3>
            <p className="text-gray-600 max-w-md mx-auto">
                This section is under construction. Soon you'll be able to view customer details, order history, and manage customer accounts here.
            </p>
        </motion.div>
    );
};

export default AdminCustomers;
