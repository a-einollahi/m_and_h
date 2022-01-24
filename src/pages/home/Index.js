import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/layout/home/Navbar';
import Footer from '../../components/layout/home/Footer';
import Products from './Products';

export default function HomeIndex() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}
