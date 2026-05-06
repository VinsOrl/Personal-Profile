import React from 'react';
import Introduction from './components/Introduction';
import Profile from './components/Profile';
import MiniGame from './components/MiniGame';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">林新興.</div>
        <div className="nav-links">
          <a href="#intro">Home</a>
          <a href="#profile">Profile</a>
          <a href="#minigame">Mini Game</a>
        </div>
      </nav>

      <main>
        <Introduction />
        <Profile />
        <MiniGame />
      </main>

      <footer>
        <p>© 2026 林新興. Built with intention.</p>
      </footer>
    </div>
  );
};

export default App;
