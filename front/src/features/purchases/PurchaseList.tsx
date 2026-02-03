import React from 'react';

interface Purchase {
  id: number;
  name: string;
  price: number;
  date: string;
}

interface PurchaseListProps {
  purchases: Purchase[];
}

export default function PurchaseList({ purchases }: PurchaseListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="p-4 font-semibold text-gray-600">Date</th>
            <th className="p-4 font-semibold text-gray-600">Produit</th>
            <th className="p-4 font-semibold text-gray-600 text-right">Prix</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((item) => (
            <tr key={item.id} className="border-b last:border-none hover:bg-gray-50 transition">
              <td className="p-4 text-gray-500">{new Date(item.date).toLocaleDateString()}</td>
              <td className="p-4 font-medium text-gray-800">{item.name}</td>
              <td className="p-4 text-right font-bold text-green-600">{item.price.toFixed(2)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}