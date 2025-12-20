import { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function AdminDashboard() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>E-Commerce Admin Dashboard</h1>
        <p>Manage your products with Cloudinary image storage</p>
      </header>

      <nav className="admin-nav">
        <button
          className={`admin-nav__btn ${showForm ? 'active' : ''}`}
          onClick={() => setShowForm(true)}
        >
          Add Product
        </button>
        <button
          className={`admin-nav__btn ${!showForm ? 'active' : ''}`}
          onClick={() => setShowForm(false)}
        >
          View Products
        </button>
      </nav>

      <main className="admin-main">
        {showForm ? (
          <ProductForm onSuccess={() => setShowForm(false)} />
        ) : (
          <ProductList />
        )}
      </main>

      <style>{`
        .admin-dashboard {
          min-height: 100vh;
          background: #f3f4f6;
        }

        .admin-header {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .admin-header h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .admin-header p {
          opacity: 0.9;
        }

        .admin-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .admin-nav__btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .admin-nav__btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .admin-nav__btn.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .admin-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}
