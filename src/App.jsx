// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Importa el nuevo Layout
import MainLayout from './components/MainLayout/MainLayout'; 

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import ApartadoPage from './pages/ApartadoPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* El Header ya NO va aquí */}
        <Routes>
          
          {/* --- RUTAS PÚBLICAS Y PRIVADAS CON HEADER --- */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route 
              path="/carrito" 
              element={<PrivateRoute><CartPage /></PrivateRoute>} 
            />
            <Route 
              path="/apartado/:id" 
              element={<PrivateRoute><ApartadoPage /></PrivateRoute>} 
            />
            {/* Si tuvieras más rutas con Header, irían aquí */}
          </Route>
          
          {/* --- RUTAS DE AUTENTICACIÓN (SIN HEADER) --- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;