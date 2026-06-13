import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/login_style.css';

function Login() {
  const navigate = useNavigate();

  // ── ESTADOS ──
  const [abaAtiva, setAbaAtiva] = useState('login');
  const [mostrarSenhaLogin, setMostrarSenhaLogin] = useState(false);
  const [mostrarSenhaCriar, setMostrarSenhaCriar] = useState(false);
  const [mostrarSenhaConfirmar, setMostrarSenhaConfirmar] = useState(false);

  // Form de Login
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  const [msgErro, setMsgErro] = useState('');
  const [loading, setLoading] = useState(false);

  // Controle de Bloqueio
  const [tentativas, setTentativas] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);

  // Form de Recuperação
  const [emailRecuperar, setEmailRecuperar] = useState('');
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  // Efeitos visuais
  const [shakeSenha, setShakeSenha] = useState(false);
  const [abaDestaqueCriar, setAbaDestaqueCriar] = useState(false);

  // Dados fictícios
  const CONTA_DEMO = {
    email: 'leitormagico.123@gmail.com',
    senha: '12345678'
  };
  const MAX_TENTATIVAS = 3;

  // ── CONTROLE DO CONTADOR DE BLOQUEIO ──
  useEffect(() => {
    let intervalo = null;
    if (tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0 && bloqueado) {
      setBloqueado(false);
      setTentativas(0);
      setMsgErro('');
    }
    return () => clearInterval(intervalo);
  }, [tempoRestante, bloqueado]);

  // ── FUNÇÕES ──
  const mudarAba = (aba) => {
    setAbaAtiva(aba);
    setMsgErro('');
    setAbaDestaqueCriar(false);
  };

  const iniciarBloqueio = () => {
    setBloqueado(true);
    setTempoRestante(30);
  };

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (bloqueado) return;

    setMsgErro('');
    const emailLimpo = emailLogin.trim().toLowerCase();

    if (!emailLimpo || !senhaLogin) {
      setMsgErro('Preencha o email e a senha para continuar.');
      return;
    }

    if (emailLimpo !== CONTA_DEMO.email.toLowerCase()) {
      setMsgErro('Este email não está cadastrado. Crie uma conta para continuar.');
      setAbaDestaqueCriar(true);
      return;
    }

    if (senhaLogin !== CONTA_DEMO.senha) {
      const novasTentativas = tentativas + 1;
      setTentativas(novasTentativas);

      if (novasTentativas >= MAX_TENTATIVAS) {
        iniciarBloqueio();
      } else {
        const restantes = MAX_TENTATIVAS - novasTentativas;
        setMsgErro(`Senha incorreta. Você ainda tem ${restantes} tentativa${restantes > 1 ? 's' : ''}.`);
      }

      setShakeSenha(true);
      setTimeout(() => setShakeSenha(false), 500);
      return;
    }

    // Sucesso
    setTentativas(0);
    setLoading(true);
    setTimeout(() => {
      navigate('/app');
    }, 800);
  };

  const handleRecuperarSenha = (e) => {
    e.preventDefault();
    if (!emailRecuperar.trim()) {
      setMostrarConfirmacao(false);
      return;
    }
    setMostrarConfirmacao(true);
  };

  return (
    <div className="login-wrapper">
      
      {/* ── HEADER ── */}
      <header className="header-login">
        <h1>Cabana</h1>
        <p className="header-sub">seu cantinho de leitura</p>
      </header>

      {/* ── MAIN CARD ── */}
      <main className="main-login">
        
        {/* TABS */}
        {abaAtiva !== 'recuperar' && (
          <div className="tabs">
            <button 
              className={`tab ${abaAtiva === 'login' ? 'ativo' : ''}`} 
              onClick={() => mudarAba('login')}
            >
              Entrar
            </button>
            <button 
              className={`tab ${abaAtiva === 'criar' ? 'ativo' : ''} ${abaDestaqueCriar ? 'tab-destaque' : ''}`} 
              onClick={() => mudarAba('criar')}
            >
              Criar Conta
            </button>
          </div>
        )}

        {/* ── PAINEL: LOGIN ── */}
        {abaAtiva === 'login' && (
          <section className="painel ativo">
            <h2 className="painel-titulo">Bem-vindo de volta!</h2>
            <p className="painel-sub">Continue de onde parou.</p>

            <form onSubmit={handleLogin}>
              <div className="campo-grupo">
                <label htmlFor="email-login">Email</label>
                <input 
                  type="email" 
                  id="email-login" 
                  placeholder="seu@email.com" 
                  autoComplete="email"
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  disabled={bloqueado || loading}
                />
              </div>

              <div className="campo-grupo">
                <label htmlFor="senha-login">Senha</label>
                <div className={`campo-senha ${shakeSenha ? 'campo-erro-shake' : ''}`}>
                  <input 
                    type={mostrarSenhaLogin ? 'text' : 'password'} 
                    id="senha-login" 
                    placeholder="••••••••" 
                    autoComplete="current-password"
                    value={senhaLogin}
                    onChange={(e) => setSenhaLogin(e.target.value)}
                    disabled={bloqueado || loading}
                  />
                  <button 
                    className="toggle-senha" 
                    type="button" 
                    style={{ opacity: mostrarSenhaLogin ? '1' : '0.5' }}
                    onClick={() => setMostrarSenhaLogin(!mostrarSenhaLogin)}
                    aria-label="Mostrar senha"
                  >
                    👁
                  </button>
                </div>
              </div>

              <button 
                type="button" 
                className="link-esqueci" 
                onClick={() => setAbaAtiva('recuperar')}
              >
                Esqueci minha senha
              </button>

              {msgErro && (
                <div className="msg-erro">{msgErro}</div>
              )}
              
              {bloqueado && (
                <div className="msg-aviso">
                  🔒 Muitas tentativas incorretas. Tente novamente em <strong>{tempoRestante}s</strong> — ou{' '}
                  <button 
                    type="button" 
                    className="link-inline" 
                    onClick={() => mudarAba('recuperar')}
                  >
                    recupere sua senha
                  </button>.
                </div>
              )}

              <button 
                type="submit" 
                className={`btn-principal ${bloqueado ? 'btn-desabilitado' : ''}`}
                disabled={bloqueado || loading}
              >
                {loading ? '✓ Entrando...' : 'Fazer Login'}
              </button>
            </form>
          </section>
        )}

        {/* ── PAINEL: CRIAR CONTA ── */}
        {abaAtiva === 'criar' && (
          <section className="painel ativo">
            <h2 className="painel-titulo">Faça parte da Cabana!</h2>
            {/* ✅ CORRIGIDO: class → className */}
            <p className="painel-sub">Crie sua conta e comece a explorar.</p>

            <form onSubmit={(e) => { e.preventDefault(); navigate('/app'); }}>
              <div className="campo-grupo">
                <label htmlFor="nome-criar">Nome</label>
                <input 
                  type="text" 
                  id="nome-criar" 
                  placeholder="Como quer ser chamado?" 
                  autoComplete="name" 
                />
              </div>

              <div className="campo-grupo">
                <label htmlFor="email-criar">Email</label>
                <input 
                  type="email" 
                  id="email-criar" 
                  placeholder="seu@email.com" 
                  autoComplete="email" 
                />
              </div>

              <div className="campo-grupo">
                <label htmlFor="senha-criar">Senha</label>
                <div className="campo-senha">
                  <input 
                    type={mostrarSenhaCriar ? 'text' : 'password'} 
                    id="senha-criar" 
                    placeholder="Mínimo 8 caracteres" 
                    autoComplete="new-password" 
                  />
                  <button 
                    className="toggle-senha" 
                    type="button" 
                    style={{ opacity: mostrarSenhaCriar ? '1' : '0.5' }}
                    onClick={() => setMostrarSenhaCriar(!mostrarSenhaCriar)}
                    aria-label="Mostrar senha"
                  >
                    👁
                  </button>
                </div>
              </div>

              <div className="campo-grupo">
                <label htmlFor="senha-confirmar">Confirmar Senha</label>
                <div className="campo-senha">
                  <input 
                    type={mostrarSenhaConfirmar ? 'text' : 'password'} 
                    id="senha-confirmar" 
                    placeholder="Repita a senha" 
                    autoComplete="new-password" 
                  />
                  <button 
                    className="toggle-senha" 
                    type="button" 
                    style={{ opacity: mostrarSenhaConfirmar ? '1' : '0.5' }}
                    onClick={() => setMostrarSenhaConfirmar(!mostrarSenhaConfirmar)}
                    aria-label="Mostrar senha"
                  >
                    👁
                  </button>
                </div>
              </div>

              <div className="campo-check">
                <input type="checkbox" id="termos" />
                <label htmlFor="termos">
                  Li e aceito os <a href="#" className="link-termos">termos de serviço</a> e{' '}
                  <a href="#" className="link-termos">direitos autorais</a>
                </label>
              </div>

              <div className="campo-check">
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter">
                  Quero receber novidades: lançamentos, eventos e recomendações
                </label>
              </div>

              <button type="submit" className="btn-principal">
                Criar Conta
              </button>
            </form>
          </section>
        )}

        {/* ── PAINEL: RECUPERAR SENHA ── */}
        {abaAtiva === 'recuperar' && (
          <section className="painel painel-recuperar ativo">
            <button 
              className="btn-voltar" 
              onClick={() => mudarAba('login')} 
              type="button"
            >
              ← Voltar para Login
            </button>
            <h2 className="painel-titulo">Recuperar Senha</h2>
            <p className="painel-sub">
              Informe seu email e enviaremos um link de redefinição.
            </p>

            <form onSubmit={handleRecuperarSenha}>
              <div className="campo-grupo">
                <label htmlFor="email-recuperar">Email cadastrado</label>
                <input 
                  type="email" 
                  id="email-recuperar" 
                  placeholder="seu@email.com" 
                  autoComplete="email" 
                  value={emailRecuperar}
                  onChange={(e) => setEmailRecuperar(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-principal">
                Enviar link de recuperação
              </button>

              {mostrarConfirmacao && (
                <div className="confirmacao">
                  <p>✓ Se este email estiver cadastrado, você receberá o link em breve.</p>
                </div>
              )}
            </form>
          </section>
        )}

      </main>

      {/* ── FOOTER ── */}
      <footer className="footer-login">
        <a href="#">Precisa de ajuda?</a>
        <Link to="/">Voltar para o início</Link>
      </footer>
      
    </div>
  );
}

export default Login;