import React, { useState } from 'react';

export default function AddPurchase() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Achat ajouté:", { name, price: parseFloat(price) });
    alert("Produit ajouté !");
    setName(''); setPrice('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4">Ajouter un achat</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" value={name} placeholder="Nom" required 
          className="w-full p-2 border rounded-lg" 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="number" step="0.01" value={price} placeholder="Prix" required 
          className="w-full p-2 border rounded-lg" 
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg font-bold">
          Valider
        </button>
      </form>
    </div>
  );
}