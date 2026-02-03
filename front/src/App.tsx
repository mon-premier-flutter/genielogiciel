import React, { useState } from 'react'; // Ne pas oublier React et useState ici
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Imports des features
import LoginPage from './features/authentification/LoginPage';
import StatsCards from './features/stats/StatsCards';
import AddPurchase from './features/purchases/AddPurchase';
import PurchaseList from './features/purchases/PurchaseList';

interface User {
  name: string;
  email: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const purchases = [
    { id: 1, name: "Pomme", price: 2.5, date: "2026-02-03" },
    { id: 2, name: "Poire", price: 1.8, date: "2026-02-03" }
  ];

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <StatsCards total={125.50} topProduct="Pomme" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <AddPurchase />
              </div>
              <div className="lg:col-span-2">
                <PurchaseList purchases={purchases} />
              </div>
            </div>
          </div>
        );
      case 'ajouter': return <AddPurchase />;
      case 'historique': return <PurchaseList purchases={purchases} />;
      default: return <StatsCards total={0} topProduct="N/A" />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-8">
          <h1 className="text-2xl font-bold mb-6">Bonjour, {user?.name}</h1>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;