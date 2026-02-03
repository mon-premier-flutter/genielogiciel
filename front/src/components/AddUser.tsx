import { useState } from 'react';
import api from '../services/api';

const AddUser = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/users', formData);
      alert('Utilisateur créé !');
      setFormData({ name: '', email: '', password: '' }); // Reset
    } catch (err) {
      console.error("Erreur lors de la création", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h3>Ajouter un utilisateur</h3>
      <input 
        type="text" placeholder="Nom" required
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      <input 
        type="email" placeholder="Email" required
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />
      <input 
        type="password" placeholder="Mot de passe" required
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})} 
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default AddUser;