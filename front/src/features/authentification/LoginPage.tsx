import React, { useState } from 'react';

interface LoginProps {
  onLogin: (userData: { name: string; email: string }) => void;
}

export default function LoginPage({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simule une connexion réussie
    onLogin({ name: "Utilisateur Test", email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Connexion Famille</h2>
        <input 
          type="email" placeholder="Email" required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Mot de passe" required className="w-full p-3 border rounded-lg" />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">
          Se connecter
        </button>
      </form>
    </div>
  );
}