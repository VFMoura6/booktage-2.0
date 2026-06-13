import React, { useState } from 'react';
import './style/style.css';

// IMPORTAÇÃO DE IMAGENS 
// ATENÇÃO: Renomeie os arquivos removendo espaços ou use underscores
// Exemplo: "app icon.png" → "app-icon.png" ou "app_icon.png"
import appIcon from './style/assets/app-icon.png'; // ← ajuste o nome do arquivo
import configWhite from './style/assets/config-white.png';
import homeIcon from './style/assets/home.png';
import libraryIcon from './style/assets/library.png';
import searchIcon from './style/assets/search.png';
import onlineIcon from './style/assets/online-icon.png';
import profileIcon from './style/assets/profile.png';
import iconEditWhite from './style/assets/icon-edit-white.png';
import notifyWhite from './style/assets/notify-white.png';
import assebyWhite from './style/assets/asseby-white.png';
import payWhite from './style/assets/pay-white.png';
import supportWhite from './style/assets/support-white.png';
import trashIcon from './style/assets/trash.png';

function Index() {
  const [secaoAtiva, setSecaoAtiva] = useState('inicial-section');
  const [modalAberto, setModalAberto] = useState(false);

  // ✅ CORRIGIDO: Agora são números, não strings
  const [fontSize, setFontSize] = useState(15);
  const [accessFont, setAccessFont] = useState(2);
  const labelsAcessibilidade = ['Pequeno', 'Médio', 'Grande'];

  const ativarSecao = (sectionId) => {
    setSecaoAtiva(sectionId);
  };

  return (
    <>
      {/* ── HEADER ── */}
      <div className="header">
        <img src={appIcon} className="header-logo" alt="Logo Booktage" />
        <h1>Booktage</h1>
        <button 
          className="btn-config" 
          onClick={() => ativarSecao('config-section')} 
          aria-label="Configurações"
        >
          <img src={configWhite} alt="Configurações" />
        </button>
      </div>

      <div className="container">

        {/* ── SEÇÃO INICIAL ── */}
        {secaoAtiva === 'inicial-section' && (
          <section className="ativa">
            <h2 className="secao-titulo">Sua atividade</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="numero">12</span>
                <span className="label">Livros lidos</span>
              </div>
              <div className="stat-card">
                <span className="numero">Nv. 7</span>
                <span className="label">Nível atual</span>
              </div>
              <div className="stat-card">
                <span className="numero">3</span>
                <span className="label">Lendo agora</span>
              </div>
              <div className="stat-card">
                <span className="numero">86</span>
                <span className="label">XP total</span>
              </div>
            </div>

            <div className="nivel-card">
              <div className="nivel-topo">
                <span className="nivel-num">Nível 7</span>
                <span className="nivel-xp">Faltam 14 XP para o próximo</span>
              </div>
              <div className="barra-xp">
                <div className="barra-progresso"></div>
              </div>
            </div>

            <p className="subtitulo">Seus amigos</p>
            <div className="amigos-lista">
              <div className="amigo-item">
                <div className="avatar">AM</div>
                <div>
                  <p className="amigo-nome">Ana Melo</p>
                  <p className="amigo-livro">Lendo: O Senhor dos Anéis</p>
                </div>
              </div>
              <div className="amigo-item">
                <div className="avatar">RB</div>
                <div>
                  <p className="amigo-nome">Rafael B.</p>
                  <p className="amigo-livro">Terminou: Duna</p>
                </div>
              </div>
              <div className="amigo-item">
                <div className="avatar">CL</div>
                <div>
                  <p className="amigo-nome">Clara Lima</p>
                  <p className="amigo-livro">Lendo: Cem Anos de Solidão</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── SEÇÃO BIBLIOTECA ── */}
        {secaoAtiva === 'biblioteca-section' && (
          <section className="ativa">
            <h2 className="secao-titulo">Sua Biblioteca</h2>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>Duna</p>
                <span>Frank Herbert · 87% lido</span>
              </div>
            </div>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>Neuromancer</p>
                <span>William Gibson · 42% lido</span>
              </div>
            </div>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>1984</p>
                <span>George Orwell · concluído</span>
              </div>
            </div>

            <p className="subtitulo">Favoritos</p>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>O Hobbit</p>
                <span>J.R.R. Tolkien</span>
              </div>
            </div>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>Cem Anos de Solidão</p>
                <span>Gabriel García Márquez</span>
              </div>
            </div>

            {/* ✅ CORRIGIDO: class → className */}
            <p className="subtitulo">Recomendações para você</p>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>Fundação</p>
                <span>Isaac Asimov · Ficção científica</span>
              </div>
            </div>
            <div className="livro-card">
              <div className="livro-capa"></div>
              <div className="livro-info">
                <p>Fahrenheit 451</p>
                <span>Ray Bradbury · Distopia</span>
              </div>
            </div>
          </section>
        )}

        {/* ── SEÇÃO PESQUISA ── */}
        {secaoAtiva === 'pesquisa-section' && (
          <section className="ativa">
            <h2 className="secao-titulo">Pesquisa</h2>
            <div className="campo-busca">
              <input type="text" placeholder="Livros, autores, gêneros…" />
              <button className="btn-pesquisar">Buscar</button>
            </div>

            <p className="subtitulo">Histórico</p>
            <div className="historico-lista">
              <div className="historico-item">Ficção científica brasileira</div>
              <div className="historico-item">Clarice Lispector</div>
              <div className="historico-item">Romance histórico</div>
            </div>

            <p className="subtitulo">Populares agora</p>
            <div className="historico-lista">
              <div className="historico-item">Distopia · 2.3k leitores</div>
              <div className="historico-item">Fantasia épica · 1.8k leitores</div>
              <div className="historico-item">Autoajuda · 1.2k leitores</div>
            </div>

            <p className="subtitulo">Gêneros</p>
            <div className="generos-grid">
              <span className="tag-genero">Ficção</span>
              <span className="tag-genero">Romance</span>
              <span className="tag-genero">Aventura</span>
              <span className="tag-genero">Fantasia</span>
              <span className="tag-genero">Ficção científica</span>
              <span className="tag-genero">Biografia</span>
              <span className="tag-genero">Autoajuda</span>
              <span className="tag-genero">História</span>
            </div>
          </section>
        )}

        {/* ── SEÇÃO COMUNIDADE ── */}
        {secaoAtiva === 'comunidade-section' && (
          <section className="ativa">
            <h2 className="secao-titulo">Comunidade</h2>
            <div className="post-card">
              <div className="post-topo">
                <div className="avatar" style={{width:'32px', height:'32px', fontSize:'11px'}}>AM</div>
                <span className="post-usuario">Ana Melo</span>
                <span className="post-tempo">há 2h</span>
              </div>
              <p className="post-texto">Acabei de terminar Duna e não consigo parar de pensar no universo que Frank Herbert criou. Que livro extraordinário.</p>
              <p className="post-livro">📖 Duna — Frank Herbert</p>
            </div>

            <div className="post-card">
              <div className="post-topo">
                <div className="avatar" style={{width:'32px', height:'32px', fontSize:'11px'}}>RB</div>
                <span className="post-usuario">Rafael B.</span>
                <span className="post-tempo">há 5h</span>
              </div>
              <p className="post-texto">Alguém mais aqui relê livros? Estou na minha terceira vez com O Hobbit e ainda encontro coisas novas.</p>
              <p className="post-livro">📖 O Hobbit — J.R.R. Tolkien</p>
            </div>

            <div className="post-card">
              <div className="post-topo">
                <div className="avatar" style={{width:'32px', height:'32px', fontSize:'11px'}}>CL</div>
                <span className="post-usuario">Clara Lima</span>
                <span className="post-tempo">ontem</span>
              </div>
              <p className="post-texto">Meta de 2024 cumprida: 20 livros lidos! Muito orgulhosa dessa jornada.</p>
            </div>
          </section>
        )}

        {/* ── SEÇÃO PERFIL ── */}
        {secaoAtiva === 'perfil-section' && (
          <section className="ativa">
            <h2 className="secao-titulo">Perfil</h2>
            <div className="perfil-topo">
              <div className="perfil-foto">N</div>
              <div>
                <p className="perfil-nome">Nome do usuário</p>
                <p className="perfil-stats">Nível 7 · 12 livros lidos</p>
              </div>
            </div>

            <div className="perfil-botoes">
              <button className="btn" onClick={() => ativarSecao('perfil-editar-section')}>Editar perfil</button>
              <button className="btn" onClick={() => ativarSecao('perfil-compartilhar-section')}>Compartilhar</button>
              <button className="btn" onClick={() => ativarSecao('perfil-convidar-section')}>Convidar amigo</button>
            </div>

            <p className="subtitulo">Amigos</p>
            <div className="amigos-lista" style={{marginBottom:'28px'}}>
              <div className="amigo-item">
                <div className="avatar">AM</div>
                <div><p className="amigo-nome">Ana Melo</p></div>
              </div>
              <div className="amigo-item">
                <div className="avatar">RB</div>
                <div><p className="amigo-nome">Rafael B.</p></div>
              </div>
              <div className="amigo-item">
                <div className="avatar">CL</div>
                <div><p className="amigo-nome">Clara Lima</p></div>
              </div>
            </div>

            <p className="subtitulo">Histórico de leitura</p>
            <ul className="historico-leitura">
              <li>1984 — George Orwell <span>Lido em 01/01/2024</span></li>
              <li>O Hobbit — Tolkien <span>Lido em 15/02/2024</span></li>
              <li>Neuromancer — Gibson <span>Lido em 10/03/2024</span></li>
            </ul>

            <div style={{marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <button className="btn">Suporte</button>
              <button className="btn btn-sair" style={{background:'transparent', border: '1px solid var(--cor-borda)'}}>Sair</button>
            </div>
          </section>
        )}

        {/* ── SEÇÃO CONFIGURAÇÕES ── */}
        {secaoAtiva === 'config-section' && (
          <section className="ativa">
            <h2 className="secao-titulo">Configurações</h2>
            <div className="config-bloco">
              <div className="config-item" onClick={() => ativarSecao('config-geral-section')}>
                <img src={iconEditWhite} alt="" />
                <span className="config-item-label">Geral</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-privacidade-section')}>
                <img src={configWhite} alt="" />
                <span className="config-item-label">Privacidade</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-notificacoes-section')}>
                <img src={notifyWhite} alt="" />
                <span className="config-item-label">Notificações</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-acessibilidade-section')}>
                <img src={assebyWhite} alt="" />
                <span className="config-item-label">Acessibilidade</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-pagamentos-section')}>
                <img src={payWhite} alt="" />
                <span className="config-item-label">Pagamentos</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-seguranca-section')}>
                <img src={profileIcon} alt="" />
                <span className="config-item-label">Segurança</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-sistema-section')}>
                <img src={configWhite} alt="" />
                <span className="config-item-label">Sistema</span>
              </div>
              <div className="config-item" onClick={() => ativarSecao('config-ajuda-section')}>
                <img src={supportWhite} alt="" />
                <span className="config-item-label">Ajuda</span>
              </div>
            </div>

            <div className="config-bloco">
              <div className="config-item perigo" onClick={() => ativarSecao('config-excluir-section')}>
                <img src={trashIcon} alt="" />
                <span className="config-item-label">Excluir a conta</span>
              </div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: EDITAR PERFIL ── */}
        {secaoAtiva === 'perfil-editar-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('perfil-section')}>Perfil</button>
            <h2 className="secao-titulo">Editar perfil</h2>
            <div className="perfil-topo" style={{marginBottom: '8px'}}>
              <div className="perfil-foto" style={{cursor:'pointer', position:'relative'}}>N</div>
              <div>
                <p style={{fontSize:'13px', color:'var(--cor-fonte-suave)'}}>Toque na foto para alterar</p>
              </div>
            </div>

            <p className="subtitulo">Informações</p>
            <div className="config-bloco">
              <div style={{padding: '14px 16px', borderBottom: '1px solid var(--cor-borda)'}}>
                <p style={{fontSize:'12px', color:'var(--cor-fonte-suave)', marginBottom:'6px'}}>Nome</p>
                <input type="text" defaultValue="Nome do usuário" style={{background:'none', border:'none', color:'var(--cor-fonte)', fontFamily:'var(--fonte-corpo)', fontSize:'14px', width:'100%', outline:'none'}} />
              </div>
              <div style={{padding: '14px 16px', borderBottom: '1px solid var(--cor-borda)'}}>
                <p style={{fontSize:'12px', color:'var(--cor-fonte-suave)', marginBottom:'6px'}}>Nome de usuário</p>
                <input type="text" defaultValue="@nomeuser" style={{background:'none', border:'none', color:'var(--cor-fonte)', fontFamily:'var(--fonte-corpo)', fontSize:'14px', width:'100%', outline:'none'}} />
              </div>
              <div style={{padding: '14px 16px'}}>
                <p style={{fontSize:'12px', color:'var(--cor-fonte-suave)', marginBottom:'6px'}}>Bio</p>
                <input type="text" placeholder="Fale um pouco sobre você…" style={{background:'none', border:'none', color:'var(--cor-fonte)', fontFamily:'var(--fonte-corpo)', fontSize:'14px', width:'100%', outline:'none'}} />
              </div>
            </div>
            <button className="btn-acao">Salvar alterações</button>
          </section>
        )}

        {/* ── SUBPÁGINA: COMPARTILHAR PERFIL ── */}
        {secaoAtiva === 'perfil-compartilhar-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('perfil-section')}>Perfil</button>
            <h2 className="secao-titulo">Compartilhar perfil</h2>
            <div className="config-bloco" style={{marginTop: '8px'}}>
              <div className="toggle-row" style={{justifyContent:'center', flexDirection:'column', alignItems:'center', gap:'12px', padding: '28px 16px'}}>
                <div style={{width:'110px', height:'110px', background:'rgba(214,169,122,0.08)', border:'1px solid var(--cor-borda)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', color:'var(--cor-fonte-suave)'}}>QR Code</div>
                <p style={{fontSize:'12px', color:'var(--cor-fonte-suave)', textAlign:'center'}}>booktage.app/@nomeuser</p>
              </div>
            </div>

            <p className="subtitulo">Compartilhar via</p>
            <div className="config-bloco">
              <div className="config-item"><span className="config-item-label">Copiar link</span></div>
              {/* ✅ CORRIGIDO: class → className */}
              <div className="config-item"><span className="config-item-label">WhatsApp</span></div>
              <div className="config-item"><span className="config-item-label">Instagram</span></div>
              <div className="config-item"><span className="config-item-label">Outras opções</span></div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: CONVIDAR AMIGO ── */}
        {secaoAtiva === 'perfil-convidar-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('perfil-section')}>Perfil</button>
            <h2 className="secao-titulo">Convidar amigo</h2>
            <div className="config-bloco" style={{marginTop: '8px'}}>
              <div className="config-desc">Convide alguém para o Booktage e ganhe <strong style={{color:'var(--cor-fonte)'}}>+10 XP</strong> quando ele criar a conta.</div>
            </div>

            <p className="subtitulo">Seu link de convite</p>
            <div className="config-bloco">
              <div style={{padding: '14px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px'}}>
                <span style={{fontSize:'13px', color:'var(--cor-fonte-suave)'}}>booktage.app/invite/abc123</span>
                <button className="btn-acao" style={{width:'auto', padding: '8px 14px', marginTop:0, fontSize:'13px'}}>Copiar</button>
              </div>
            </div>

            <p className="subtitulo">Enviar por</p>
            <div className="config-bloco">
              <div className="config-item"><span className="config-item-label">WhatsApp</span></div>
              {/* ✅ CORRIGIDO: class → className */}
              <div className="config-item"><span className="config-item-label">SMS</span></div>
              <div className="config-item"><span className="config-item-label">E-mail</span></div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: GERAL ── */}
        {secaoAtiva === 'config-geral-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('config-section')}>Configurações</button>
            {/* ✅ CORRIGIDO: class → className */}
            <h2 className="secao-titulo">Geral</h2>

            <p className="subtitulo">Aparência</p>
            <div className="config-bloco">
              <div className="select-row">
                <span>Tema</span>
                <select>
                  <option>Escuro</option>
                  <option>Claro</option>
                  <option>Sistema</option>
                </select>
              </div>
              <div className="select-row">
                <span>Idioma</span>
                <select>
                  <option>Português (BR)</option>
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
            </div>

            <p className="subtitulo">Leitura</p>
            <div className="config-bloco">
              <div className="range-row">
                <div className="range-label">
                  <span>Tamanho da fonte</span>
                  <span>{fontSize}px</span>
                </div>
                {/* ✅ CORRIGIDO: onChange agora converte para número */}
                <input 
                  type="range" 
                  min="12" 
                  max="22" 
                  value={fontSize} 
                  onChange={(e) => setFontSize(Number(e.target.value))}
                />
              </div>
              <div className="toggle-row">
                <div>
                  Modo noturno automático
                  <span>Ativa o tema escuro ao anoitecer</span>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>

            <p className="subtitulo">Dados</p>
            <div className="config-bloco">
              <div className="toggle-row">
                <div>
                  Sincronização automática
                  <span>Mantém seus dados atualizados</span>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="toggle-row">
                <div>
                  Uso apenas com Wi-Fi
                  <span>Evita consumo de dados móveis</span>
                </div>
                <label className="toggle">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: PRIVACIDADE ── */}
        {secaoAtiva === 'config-privacidade-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('config-section')}>Configurações</button>
            <h2 className="secao-titulo">Privacidade</h2>

            <p className="subtitulo">Visibilidade</p>
            <div className="config-bloco">
              <div className="select-row">
                <span>Quem vê meu perfil</span>
                <select>
                  <option>Todos</option>
                  <option>Amigos</option>
                  <option>Ninguém</option>
                </select>
              </div>
              <div className="select-row">
                <span>Quem vê minha biblioteca</span>
                <select>
                  <option>Amigos</option>
                  <option>Todos</option>
                  <option>Ninguém</option>
                </select>
              </div>
              <div className="toggle-row">
                <div>
                  Mostrar o que estou lendo
                  <span>Exibe o livro atual no seu perfil</span>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>

            <p className="subtitulo">Atividade</p>
            <div className="config-bloco">
              <div className="toggle-row">
                <div>
                  Status online
                  <span>Amigos veem quando você está ativo</span>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="toggle-row">
                <div>
                  Histórico de pesquisa
                  <span>Salva suas buscas recentes</span>
                </div>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            <button className="btn-acao" style={{marginTop:'24px'}}>Salvar preferências</button>
          </section>
        )}

        {/* ── SUBPÁGINA: NOTIFICAÇÕES ── */}
        {secaoAtiva === 'config-notificacoes-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('config-section')}>Configurações</button>
            <h2 className="secao-titulo">Notificações</h2>

            <p className="subtitulo">Atividade social</p>
            <div className="config-bloco">
              <div className="toggle-row">
                <div>
                  Novos seguidores
                  <span>Quando alguém começa a te seguir</span>
                </div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-slider"></span></label>
              </div>
              <div className="toggle-row">
                <div>
                  Comentários nos seus posts
                  <span>Respostas à sua atividade na comunidade</span>
                </div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-slider"></span></label>
              </div>
              <div className="toggle-row">
                <div>
                  Amigos leram um livro
                  <span>Atualizações de leitura dos seus amigos</span>
                </div>
                <label className="toggle"><input type="checkbox" /><span className="toggle-slider"></span></label>
              </div>
            </div>

            <p className="subtitulo">Metas e lembretes</p>
            <div className="config-bloco">
              <div className="toggle-row">
                <div>
                  Lembrete diário de leitura
                  <span>Um aviso para manter seu hábito</span>
                </div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-slider"></span></label>
              </div>
              <div className="select-row">
                <span>Horário do lembrete</span>
                <select>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                  <option>19:00</option>
                </select>
              </div>
              <div className="toggle-row">
                <div>
                  Progresso de metas mensais
                  <span>Resumo ao final do mês</span>
                </div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-slider"></span></label>
              </div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: ACESSIBILIDADE ── */}
        {secaoAtiva === 'config-acessibilidade-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('config-section')}>Configurações</button>
            <h2 className="secao-titulo">Acessibilidade</h2>

            <p className="subtitulo">Visual</p>
            <div className="config-bloco">
              <div className="toggle-row">
                <div>
                  Alto contraste
                  <span>Aumenta o contraste de cores</span>
                </div>
                <label className="toggle"><input type="checkbox" /><span className="toggle-slider"></span></label>
              </div>
              <div className="toggle-row">
                <div>
                  Reduzir animações
                  <span>Desativa transições e efeitos</span>
                </div>
                <label className="toggle"><input type="checkbox" /><span className="toggle-slider"></span></label>
              </div>
              <div className="range-row">
                <div className="range-label">
                  <span>Tamanho do texto</span>
                  <span>{labelsAcessibilidade[accessFont - 1]}</span>
                </div>
                {/* ✅ CORRIGIDO: onChange agora converte para número */}
                <input 
                  type="range" 
                  min="1" 
                  max="3" 
                  value={accessFont} 
                  onChange={(e) => setAccessFont(Number(e.target.value))}
                />
              </div>
            </div>

            <p className="subtitulo">Leitura</p>
            <div className="config-bloco">
              <div className="toggle-row">
                <div>
                  Fonte para dislexia
                  <span>Usa fonte com melhor legibilidade</span>
                </div>
                <label className="toggle"><input type="checkbox" /><span className="toggle-slider"></span></label>
              </div>
              <div className="toggle-row">
                <div>
                  Espaçamento entre linhas
                  <span>Aumenta o espaço para facilitar leitura</span>
                </div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-slider"></span></label>
              </div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: PAGAMENTOS ── */}
        {secaoAtiva === 'config-pagamentos-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('config-section')}>Configurações</button>
            <h2 className="secao-titulo">Pagamentos</h2>
            <div className="config-bloco">
              <div className="config-desc">
                <strong>Booktage Free</strong><br />
                Acesso à biblioteca básica e comunidade. Atualize para o Premium e desbloqueie recomendações avançadas, estatísticas detalhadas e muito mais.
              </div>
              <div style={{padding: '14px 16px'}}>
                <button className="btn-acao">Assinar Premium — R$ 12,90/mês</button>
              </div>
            </div>
          </section>
        )}

        {/* ── SUBPÁGINA: EXCLUIR CONTA ── */}
        {secaoAtiva === 'config-excluir-section' && (
          <section className="ativa">
            <button className="btn-voltar" onClick={() => ativarSecao('config-section')}>Configurações</button>
            <h2 className="secao-titulo" style={{color: 'var(--cor-deletar)'}}>Excluir conta</h2>

            <div className="config-bloco" style={{marginTop: '8px'}}>
              <div className="config-desc">
                Ao excluir sua conta, todos os seus dados serão permanentemente removidos — incluindo biblioteca, histórico, conquistas e posts na comunidade.<br /><br />
                <strong style={{color:'var(--cor-fonte)'}}>Essa ação não pode ser desfeita.</strong>
              </div>
            </div>
            <button className="btn-acao perigo" onClick={() => setModalAberto(true)}>
              Quero excluir minha conta
            </button>
          </section>
        )}

      </div>

      {/* MODAL CONFIRMAÇÃO EXCLUSÃO */}
      <div className={`modal-overlay ${modalAberto ? 'aberto' : ''}`}>
        <div className="modal-box">
          <p className="modal-titulo">Tem certeza absoluta?</p>
          <p className="modal-desc">Seus dados serão apagados permanentemente e não poderão ser recuperados.</p>
          <div className="modal-botoes">
            <button className="btn-acao perigo" onClick={() => { setModalAberto(false); alert('Conta excluída.'); }}>Sim, excluir minha conta</button>
            <button className="btn-acao" onClick={() => setModalAberto(false)}>Cancelar</button>
          </div>
        </div>
      </div>

      {/* FOOTER / NAV BAR */}
      <footer className="footer">
        <nav>
          <ul>
            <li className={secaoAtiva === 'inicial-section' ? 'ativo' : ''} onClick={() => ativarSecao('inicial-section')}>
              <img src={homeIcon} alt="Início" style={{width:'24px', height:'24px'}} /> Início
            </li>
            <li className={secaoAtiva === 'biblioteca-section' ? 'ativo' : ''} onClick={() => ativarSecao('biblioteca-section')}>
              <img src={libraryIcon} alt="Biblioteca" style={{width:'24px', height:'24px'}} /> Biblioteca
            </li>
            <li className={secaoAtiva === 'pesquisa-section' ? 'ativo' : ''} onClick={() => ativarSecao('pesquisa-section')}>
              <img src={searchIcon} alt="Pesquisa" style={{width:'24px', height:'24px'}} /> Pesquisa
            </li>
            <li className={secaoAtiva === 'comunidade-section' ? 'ativo' : ''} onClick={() => ativarSecao('comunidade-section')}>
              <img src={onlineIcon} alt="Comunidade" style={{width:'24px', height:'24px'}} /> Comunidade
            </li>
            <li className={secaoAtiva === 'perfil-section' ? 'ativo' : ''} onClick={() => ativarSecao('perfil-section')}>
              <img src={profileIcon} alt="Perfil" style={{width:'24px', height:'24px'}} /> Perfil
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Index;