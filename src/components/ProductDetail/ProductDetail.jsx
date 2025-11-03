// src/components/ProductDetail/ProductDetail.jsx
import { useCart } from '../../context/CartContext';
import styles from './ProductDetail.module.css';

function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    onClose(); // Cierra el modal después de agregar
  };

  // El .overlay ahora cierra el modal al hacer clic en el fondo
  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* e.stopPropagation() evita que el clic en el modal se propague al overlay */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        <img src={product.img} alt={product.name} />
        
        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p><strong>Color disponible:</strong> Negro</p>
          <p><strong>Precio (oferta):</strong> ${product.price.toFixed(2)} MXN</p>
          <p><strong>Tallas disponibles:</strong> 25.5, 26, 26.5, 27, 27.5, 28</p>
          <p><strong>Materiales / características:</strong></p>
          <ul>
            <li>Corte: piel genuina</li>
            <li>Forro: piel</li>
            <li>Suela: cuero con parte antiderrapante sintética</li>
            <li>Diseño: liso, sin adornos</li>
          </ul>
        </div>
        
        <button onClick={handleAdd} className={styles.button}>
          AGREGAR
        </button>
        <button 
          onClick={onClose} 
          className={`${styles.button} ${styles.closeButton}`}>
          Cerrar
        </button>

      </div>
    </div>
  );
}

export default ProductDetail;