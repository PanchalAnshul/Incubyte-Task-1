import React from "react";

const SweetCard = ({ sweet, onPurchase, onRestock, onDelete }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5 rounded-xl shadow-lg border border-gray-700">
      <h3 className="text-2xl font-semibold text-lime-400 mb-3">{sweet.name}</h3>
      <p><strong className="text-gray-300">ID:</strong> {sweet.id}</p>
      <p><strong className="text-gray-300">Category:</strong> {sweet.category || "N/A"}</p>
      <p><strong className="text-gray-300">Price:</strong> ₹{sweet.price}</p>
      <p><strong className="text-gray-300">Quantity:</strong> {sweet.quantity}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={onPurchase}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition text-sm"
        >
          Purchase
        </button>
        <button
          onClick={onRestock}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-md transition text-sm"
        >
          Restock
        </button>
        <button
          onClick={() => onDelete(sweet.id)}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded-md transition text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SweetCard;
