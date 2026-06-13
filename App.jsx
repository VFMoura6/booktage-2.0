import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importação dos componentes
import Welcome from './welcome';
import Login from './login';
import Index from './index';

// Importação do CSS global (se houver)
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal - Página de Boas-vindas */}
        <Route path="/" element={<Welcome />} />
        
        {/* Rota de Login/Cadastro */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota do Painel Principal (após login) */}
        <Route path="/app" element={<Index />} />
        
        {/* Redirecionar rotas inexistentes para a página inicial */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;