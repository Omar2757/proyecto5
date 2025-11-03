// src/components/Header/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import styles from './Header.module.css';

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Bienvenido</Link></div>
      <nav className={styles.nav}>
        <Link to="/carrito">Carrito</Link>
        {user ? (
          <button onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </nav>
    </header>
  );
}
export default Header;