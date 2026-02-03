import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: (userData: { name: string; email: string }) => void;
}

export default function LoginPage({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ name: "Utilisateur Famille", email });
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100 font-sans">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200 mb-4">
            <Lock className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Bienvenue</h1>
          <p className="text-gray-500 mt-2 text-center">Connectez-vous pour gérer vos achats familiaux</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Adresse Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input 
                type="email" 
                required
                placeholder="papa@famille.com"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Mot de passe</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 transform transition-all active:scale-95"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <span className="text-sm text-gray-400 font-medium italic">Génie Logiciel 2026</span>
        </div>
      </div>
    </div>
  );
}