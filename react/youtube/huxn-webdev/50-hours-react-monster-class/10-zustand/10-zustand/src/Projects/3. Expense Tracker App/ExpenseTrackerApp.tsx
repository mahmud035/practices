import { useState } from 'react';
import useExpenseTrackerStore, {
  IExpense,
} from '../../stores/expenseTrackerStore';

const defaultFormData = {
  id: '',
  description: '',
  amount: 0,
};

export default function ExpenseTrackerApp() {
  const { expenses, addExpense, removeExpense } = useExpenseTrackerStore();
  const [formData, setFormData] = useState<IExpense>(defaultFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'amount') {
      setFormData((previousFormData) => ({
        ...previousFormData,
        [name]: Number(value),
      }));
    } else {
      setFormData((previousFormData) => ({
        ...previousFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.description === '') return;

    addExpense({
      id: crypto.randomUUID(),
      description: formData.description,
      amount: formData.amount,
    });

    setFormData(defaultFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Expense Tracker
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Expense Description"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min={0}
            placeholder="Amount"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Expense
          </button>
        </form>

        {/* Expense List */}
        <div className="space-y-4 mb-6">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">
                {expense.description}: ${expense.amount.toFixed(2)}
              </span>
              <button
                onClick={() => removeExpense(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800">
            Total Expense: $
            {expenses
              .reduce((total, expense) => total + expense.amount, 0)
              .toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}
