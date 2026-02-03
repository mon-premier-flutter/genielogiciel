import React from 'react';

interface StatsProps {
  total: number;
  topProduct: string | null;
}

export default function StatsCards({ total, topProduct }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl text-white shadow-md">
        <p className="text-sm uppercase font-bold opacity-80">Total des dépenses</p>
        <h3 className="text-3xl font-black">{total.toFixed(2)} €</h3>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-xl text-white shadow-md">
        <p className="text-sm uppercase font-bold opacity-80">Produit le plus acheté</p>
        <h3 className="text-3xl font-black">{topProduct || "Aucun"}</h3>
      </div>
    </div>
  );
}