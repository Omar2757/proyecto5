// src/components/MainLayout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* Aquí se renderizarán Home, CartPage, ApartadoPage, etc. */}
        <Outlet /> 
      </main>
    </div>
  );
}

export default MainLayout;