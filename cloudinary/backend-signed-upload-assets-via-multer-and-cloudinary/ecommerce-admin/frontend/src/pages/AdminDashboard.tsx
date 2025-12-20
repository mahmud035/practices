import React, { useState } from 'react';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';

export const AdminDashboard: React.FC = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-linear-to-r from-blue-500 to-purple-500 text-white py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">E-Commerce Admin Dashboard</h1>
        <p className="opacity-90">
          Manage your products with Cloudinary image storage
        </p>
      </header>

      <nav className="flex justify-center gap-4 p-4 bg-white shadow-sm">
        <button
          className={`px-6 py-3 border-2 rounded-lg font-medium cursor-pointer transition-all
            ${
              showForm
                ? 'bg-blue-500 border-blue-500 text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500'
            }`}
          onClick={() => setShowForm(true)}
        >
          Add Product
        </button>
        <button
          className={`px-6 py-3 border-2 rounded-lg font-medium cursor-pointer transition-all
            ${
              !showForm
                ? 'bg-blue-500 border-blue-500 text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500'
            }`}
          onClick={() => setShowForm(false)}
        >
          View Products
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {showForm ? (
          <ProductForm onSuccess={() => setShowForm(false)} />
        ) : (
          <ProductList />
        )}
      </main>
    </div>
  );
};
