const mockProducts = [
  { id: 1, name: "Oxford liso — Jean Pierre", price: 2000.00, image: "./src/assets/oxford-liso.jpg" },
  { id: 2, name: "Blucher tipo Oxford — Jean Pierre", price: 2519.00, image: "./src/assets/blucher.jpg" },
  { id: 3, name: "Zapato de charol — Jean Pierre", price: 3000.00, image: "./src/assets/charol.jpg" },
  { id: 4, name: "Zapato formal negro — Boston", price: 2700.00, image: "/src/assets/formal-negro.jpg" },
  { id: 5, name: "Mocasín clásico — Flexi", price: 1999.00, image: "/src/assets/mocasin.jpg" },
  { id: 6, name: "Derby clásico — Lottusse", price: 3200.00, image: "/src/assets/derby-clasico.jpg" },
  { id: 7, name: "Monk strap — Ferrato", price: 3100.00, image: "/src/assets/monk-strap.jpg" },
  { id: 8, name: "Mocasín café — Clarks", price: 2600.00, image: "/src/assets/mocasin-cafe.jpg" },
  { id: 9, name: "Oxford brogue — Aldo", price: 3300.00, image: "/src/assets/oxford-brogue.jpg" },
  { id: 10, name: "Zapato formal azul — Ferrato", price: 2900.00, image: "/src/assets/formal-azul.jpg" },
  { id: 11, name: "Monk doble hebilla — Hush Puppies", price: 3150.00, image: "/src/assets/monk-doble.jpg" },
  { id: 12, name: "Mocasín con borla — Flexi", price: 2700.00, image: "/src/assets/mocasin-borla.jpg" },
  { id: 13, name: "Derby punta redonda — Lottusse", price: 3000.00, image: "/src/assets/derby-redondo.jpg" },
  { id: 14, name: "Oxford con costura — Bally", price: 3150.00, image: "/src/assets/oxford-costura.jpg" },
  { id: 15, name: "Zapato italiano premium — Giorgio Brutini", price: 3700.00, image: "/src/assets/italiano.jpg" },
  { id: 16, name: "Zapato casual beige — Zara", price: 1800.00, image: "/src/assets/casual-beige.jpg" },
  { id: 17, name: "Botín chelsea — Dr. Martens", price: 4200.00, image: "/src/assets/botin-chelsea.jpg" },
  { id: 18, name: "Mocasín ligero — Dockers", price: 2100.00, image: "/src/assets/mocasin-ligero.jpg" },
  { id: 19, name: "Zapato formal vino — Milano", price: 2800.00, image: "/src/assets/formal-vino.jpg" },
  { id: 20, name: "Zapato sport elegante — Flexi", price: 2300.00, image: "/src/assets/sport-elegante.jpg" },
  { id: 21, name: "Zapato casual gris — H&M", price: 1700.00, image: "/src/assets/casual-gris.jpg" },
  { id: 22, name: "Derby piel marrón — Lottusse", price: 3300.00, image: "/src/assets/derby-marron.jpg" },
  { id: 23, name: "Zapato de gamuza — Zara", price: 2500.00, image: "/src/assets/gamuza.jpg" },
  { id: 24, name: "Oxford clásico negro — Hugo Boss", price: 4100.00, image: "/src/assets/oxford-clasico.jpg" },
  { id: 25, name: "Mocasín italiano — Prada", price: 4500.00, image: "/src/assets/mocasin-italiano.jpg" },
  { id: 26, name: "Zapato casual azul — Ferrato", price: 2400.00, image: "/src/assets/casual-azul.jpg" },
  { id: 27, name: "Zapato bostoniano — Aldo", price: 3200.00, image: "/src/assets/bostoniano.jpg" },
  { id: 28, name: "Derby inglés — Lottusse", price: 3400.00, image: "/src/assets/derby-ingles.jpg" },
  { id: 29, name: "Zapato formal beige — Milano", price: 2900.00, image: "/src/assets/formal-beige.jpg" },
  { id: 30, name: "Monk elegante — Ferrato", price: 3300.00, image: "/src/assets/monk-elegante.jpg" },
  { id: 31, name: "Zapato vintage — Clarks", price: 2600.00, image: "/src/assets/vintage.jpg" },
  { id: 32, name: "Oxford moderno — Jean Pierre", price: 3100.00, image: "/src/assets/oxford-moderno.jpg" },
  { id: 33, name: "Mocasín urbano — Dockers", price: 2200.00, image: "/src/assets/mocasin-urbano.jpg" },
  { id: 34, name: "Zapato elegante premium — Bally", price: 3800.00, image: "/src/assets/elegante-premium.jpg" }
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