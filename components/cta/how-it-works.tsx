import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaShieldAlt, FaPaperPlane } from 'react-icons/fa';

export const HowItWorks = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900">How Fiatsend Works</h2>
                <p className="mt-4 text-lg text-gray-600">A simple three-step process to get started with ease.</p>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Step 1 */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaWallet className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">Step 1: Create or Import Wallet</h3>
                        <p className="mt-2 text-gray-600">Use a secure decentralized identifier (DID) to manage your account.</p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaShieldAlt className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">Step 2: Verify Your Identity</h3>
                        <p className="mt-2 text-gray-600">Leverage verifiable credentials for secure onboarding.</p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaPaperPlane className="h-16 w-16 text-indigo-600" />
                        <h3 className="mt-4 text-lg font-semibold">Step 3: Send Money Securely</h3>
                        <p className="mt-2 text-gray-600">Transfer funds anywhere in the world with just a few clicks.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};