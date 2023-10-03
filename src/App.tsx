import React from 'react'
import RenderComponent from "./Component"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './Component/body';
import Navbar from './Component/Navbar';
import HeaderCpn from './Component/Header';
import renderRoutes from './Route';

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<RenderComponent />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
