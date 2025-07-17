import SweetCard from './SweetCard';

export default function SweetList({ sweets, actions }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 py-6">
      {sweets.map((sweet) => (
        <SweetCard
          key={sweet.id}
          sweet={sweet}
          onDelete={actions.delete}
          onPurchase={() => actions.purchase(sweet)}
          onRestock={() => actions.restock(sweet)}
        />
      ))}
    </div>
  );
}
