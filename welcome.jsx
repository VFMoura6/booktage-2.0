import React from 'react';
import { Link } from 'react-router-dom';
import './style/welcome_style.css';

// Importações das imagens (certifique-se que existem em src/assets/)
import capa1 from './style/assets/1.png';
import capa2 from './style/assets/2.png';
import capa3 from './style/assets/3.png';
import capa4 from './style/assets/4.png';

function Welcome() {
  return (
    <div className="welcome-wrapper">
      
      {/* ── HERO ── */}
      <div className="welcome-hero">
        <h1>Bem-vindo ao Booktage!</h1>
        <p>Sua cabana de livros digitais</p>
      </div>

      {/* ── CAPAS EM DESTAQUE ── */}
      <div className="images-welcome">
        <img src={capa1} alt="Capa do livro 1" />
        <img src={capa2} alt="Capa do livro 2" />
        <img src={capa3} alt="Capa do livro 3" />
        <img src={capa4} alt="Capa do livro 4" />
      </div>

      {/* ── FEATURES ── */}
      <div className="welcome-features">
        <h3>Aqui você encontra:</h3>

        <div className="feature-item">
          <span className="feature-icon" role="img" aria-label="Livro">📖</span>
          <div className="feature-text">
            <p>Biblioteca completa</p>
            <span>Livros de todos os gêneros em um só lugar</span>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon" role="img" aria-label="Marcador">🔖</span>
          <div className="feature-text">
            <p>Ferramentas de leitura</p>
            <span>Marcadores, anotações e progresso de leitura</span>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon" role="img" aria-label="Acampamento">🏕️</span>
          <div className="feature-text">
            <p>Comunidade ativa</p>
            <span>Faça amizades e compartilhe os mesmos gostos</span>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon" role="img" aria-label="Estrela">⭐</span>
          <div className="feature-text">
            <p>Sistema de XP e níveis</p>
            <span>Suba de nível conforme você lê e interage</span>
          </div>
        </div>
      </div>

      {/* ── ATUALIZAÇÕES ── */}
      <div className="welcome-updates">
        <h3>Atualizações!</h3>
        <div className="update-card">
          <span className="update-data">15 mai 2026 — v1.2.0</span>
          <ul className="update-lista">
            <li>Bugs de carregamento eliminados</li>
            <li>Reajuste no design geral</li>
            <li>Melhorias de performance na biblioteca</li>
          </ul>
        </div>
      </div>

      {/* ── CTA (Call to Action) ── */}
      <div className="buttons-welcome">
        <p>Venha fazer parte da Cabana!</p>
        <div className="btn-welcome-group">
          <Link to="/login" className="btn-primary">
            Criar Conta
          </Link>
          <Link to="/login" className="btn-secondary">
            Já tenho conta — Fazer Login
          </Link>
        </div>
      </div>

      {/* ── RODAPÉ ── */}
      <footer className="welcome-footer">
        <p>Booktage · Todos os direitos reservados</p>
      </footer>
      
    </div>
  );
}

export default Welcome;