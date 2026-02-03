import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  History, 
  LogOut, 
  ShoppingCart 
} from 'lucide-react';

// Définition des types pour les Props
interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  
  // Configuration des menus pour éviter la répétition de code
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'ajouter', label: 'Ajouter un achat', icon: <PlusCircle size={20} /> },
    { id: 'historique', label: 'Historique', icon: <History size={20} /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen text-white flex flex-col p-4 shadow-2xl">
      {/* Header de la Sidebar */}
      <div className="mb-10 p-4 flex items-center gap-3 border-b border-slate-700">
        <ShoppingCart className="text-green-400" />
        <span className="text-xl font-black tracking-tight uppercase">FamilleShop</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
              currentPage === item.id 
                ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' 
                : 'hover:bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer / Bouton Déconnexion (Lien avec l'entité User) */}
      <div className="pt-4 border-t border-slate-700">
        <button 
          onClick={() => window.location.reload()} // Simule une déconnexion
          className="w-full flex items-center space-x-3 p-3 text-red-400 hover:bg-red-900/10 rounded-xl transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Quitter la session</span>
        </button>
      </div>
    </aside>
  );
}