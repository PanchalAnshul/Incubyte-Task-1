import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SweetForm from "./components/SweetForm";
import SweetList from "./components/SweetList";

export default function App() {
  const [sweets, setSweets] = useState([]);
  const [mode, setMode] = useState("add");
  const [form, setForm] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("Name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = {
      ...form,
      id: form.id.trim(),
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
    };

    if (mode === "add") {
      setSweets([...sweets, parsed]);
    } else {
      setSweets((prev) =>
        prev.map((s) =>
          s.id === parsed.id
            ? {
                ...s,
                quantity:
                  mode === "purchase"
                    ? Math.max(0, s.quantity - parsed.quantity)
                    : s.quantity + parsed.quantity,
              }
            : s
        )
      );
    }

    setForm({ id: "", name: "", category: "", price: "", quantity: "" });
  };

  const handleDelete = (id) =>
    setSweets((prev) => prev.filter((s) => s.id !== id));

  const handlePurchase = ({ id, quantity }) =>
    setSweets((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, quantity: Math.max(0, s.quantity - quantity) } : s
      )
    );

  const handleRestock = ({ id, quantity }) =>
    setSweets((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, quantity: s.quantity + quantity } : s
      )
    );

  const sortData = (data) => {
    const key = sortField.toLowerCase();
    const sorted = [...data].sort((a, b) => {
      if (typeof a[key] === "string") {
        return sortOrder === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      } else {
        return sortOrder === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
    });
    return sorted;
  };

  const filteredSweets = sweets.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSweets = sortData(filteredSweets);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 px-4 sm:px-8 pb-10">
      <NavBar />

      <div className="max-w-5xl mx-auto py-8">
        <SweetForm
          form={form}
          setForm={setForm}
          mode={mode}
          setMode={setMode}
          handleSubmit={handleSubmit}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="border px-3 py-1 rounded shadow-sm"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-fuchsia-600 text-white px-4 py-1 rounded hover:bg-fuchsia-700"
              onClick={() => {}}
            >
              Search
            </button>
          </div>

          <div className="flex gap-2">
            <select
              className="border rounded px-2 py-1"
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
            >
              <option>ID</option>
              <option>Name</option>
              <option>Price</option>
              <option>Quantity</option>
            </select>
            <button
              className="border px-3 py-1 rounded bg-white hover:bg-gray-200"
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
            >
              {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <SweetList
            sweets={sortedSweets}
            actions={{
              delete: handleDelete,
              purchase: handlePurchase,
              restock: handleRestock,
            }}
          />
        </div>
      </div>
    </div>
  );
}
