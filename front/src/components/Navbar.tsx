import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Accueil</Link>
      <Link to="/add" style={{ marginRight: '15px' }}>Ajouter User</Link>
      <Link to="/users">Liste Users</Link>
    </nav>
  );
};

export default Navbar;