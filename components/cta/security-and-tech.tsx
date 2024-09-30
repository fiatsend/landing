import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaCloud, FaShieldAlt, FaUserShield } from 'react-icons/fa';

export const SecurityAndTechnology = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900">Powered by Secure Blockchain Technology</h2>
                <p className="mt-4 text-lg text-gray-600">Our platform ensures your data is safe and secure.</p>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Web5 DID */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaUserShield className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">DID</h3>
                        <p className="mt-2 text-gray-600">Decentralized Identity Management for enhanced security.</p>
                    </motion.div>

                    {/* End-to-End Encryption */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaLock className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">End-to-End Encryption</h3>
                        <p className="mt-2 text-gray-600">Your data is encrypted from sender to receiver.</p>
                    </motion.div>

                    {/* Secure Cloud Integrations */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaCloud className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">Secure Cloud Integrations</h3>
                        <p className="mt-2 text-gray-600">Utilizing AWS and other secure providers for storage.</p>
                    </motion.div>

                    {/* Data Flow Animation Placeholder */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaShieldAlt className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">Secure Data Flow</h3>
                        <p className="mt-2 text-gray-600">Visualize how your data flows securely and seamlessly.</p>
                        {/* Placeholder for animation */}
                        <div className="mt-4 w-full h-32 bg-gray-300 rounded-lg animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};