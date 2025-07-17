export default function SweetForm({ form, setForm, mode, setMode, handleSubmit }) {
  return (
    <form
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-lime-400 mb-5">🍬 Manage Sweet</h2>

      {/* Mode Buttons */}
      <div className="flex gap-2 mb-6">
        {["add", "purchase", "restock"].map((m) => (
          <button
            type="button"
            key={m}
            className={`px-4 py-2 rounded font-medium transition ${
              mode === m
                ? "bg-lime-500 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setMode(m)}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="ID"
          className="bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className="bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required={mode === "add"}
        />
        <input
          type="text"
          placeholder="Category"
          className="bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required={mode === "add"}
        />
        <input
          type="number"
          placeholder="Price"
          className="bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required={mode === "add"}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded placeholder-gray-400"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-lime-500 text-black font-semibold py-2 rounded hover:bg-lime-400 transition"
      >
        {mode === "add" ? "Add Sweet" : `${mode.charAt(0).toUpperCase() + mode.slice(1)} Sweet`}
      </button>
    </form>
  );
}
