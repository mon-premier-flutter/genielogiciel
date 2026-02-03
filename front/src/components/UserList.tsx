import { useEffect, useState } from 'react';
import api from '../services/api';

// 1. Définition de l'interface pour correspondre à ton schéma Prisma
interface User {
  id: number;
  email: string;
  name: string;
}

const UserList = () => {
  // 2. On précise que le state est un tableau de User
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get<User[]>('/users') // 3. On type la réponse de l'API
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur backend:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des utilisateurs...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Liste des Utilisateurs</h2>
      {users.length === 0 ? (
        <p>Aucun utilisateur trouvé.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;