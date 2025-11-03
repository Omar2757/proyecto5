// src/pages/CartPage.jsx
import { useCart } from '../context/CartContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import styles from './CartPage.module.css';

function CartPage() {
  const { cart, clearCart } = useCart();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleApartar = async () => {
    if (!user) {
      alert("Debes iniciar sesión para apartar productos.");
      navigate('/login');
      return;
    }
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    try {
      // Guardar en Firestore (como en Práctica 3.3)
      const docRef = await addDoc(collection(db, "apartados"), {
        uid: user.uid,
        email: user.email,
        items: cart,
        total: calcularTotal(),
        fecha: new Date()
      });

      clearCart();
      // Redirigir al ticket de confirmación
      navigate(`/apartado/${docRef.id}`);
    } catch (error) {
      console.error("Error al guardar la reserva: ", error);
      alert("Hubo un error al procesar tu reserva.");
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Carrito de Reservas</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.img} alt={item.name} />
              <div className={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>Detalles: (Color, Talla, etc)</p>
              </div>
              <div className={styles.itemPrice}>
                ${item.price.toFixed(2)} MXN
              </div>
            </div>
          ))}
          <div className={styles.totalSection}>
            <h2>Total a Pagar: ${calcularTotal().toFixed(2)} MXN</h2>
            <button onClick={handleApartar} className={styles.apartarButton}>
              APARTAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default CartPage;