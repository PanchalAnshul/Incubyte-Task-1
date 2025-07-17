export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-green-900 via-emerald-700 to-lime-600 text-white shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">🍬 Sweet Treats</h1>
        <p className="text-sm hidden sm:block">Your Inventory of Deliciousness</p>
      </div>
    </nav>
  );
}
