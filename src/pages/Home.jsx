const mockProducts = [
  { id: 1, name: "OXFORD LISO — JEAN PIERRE", price: 2000, img: "url_a_tu_imagen_1.jpg" },
  { id: 2, name: "Blucher tipo Oxford...", price: 2519, img: "url_a_tu_imagen_2.jpg" },
  { id: 3, name: "Zapato de charol...", price: 3000, img: "url_a_tu_imagen_3.jpg" },
];


// src/pages/Home.jsx
import { useState } from 'react';
import styles from './Home.module.css';
import ProductDetail from '../components/ProductDetail/ProductDetail'; // Lo crearemos

// ... (pega const mockProducts aquí) ...

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <div className={styles.productList}>
        {mockProducts.map(product => (
          <div 
            key={product.id} 
            className={styles.card}
            onClick={() => setSelectedProduct(product)} // Abre el modal
          >
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)} MXN</p>
          </div>
        ))}
      </div>

      {/* Modal de Detalle */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
export default Home;