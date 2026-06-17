import React from 'react';
import Introduction from './components/Introduction';
import Profile from './components/Profile';
import Work from './components/Work';
import MiniGame from './components/MiniGame';
import { useLanguage } from './i18n/LanguageContext';
import { useTheme } from './theme/ThemeContext';

const App: React.FC = () => {
  const { t, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">林新興.</div>
        <div className="nav-links">
          <a href="#intro">{t.nav.home}</a>
          <a href="#profile">{t.nav.profile}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#minigame">{t.nav.minigame}</a>
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t.langToggle.aria}
          >
            {t.langToggle.label}
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.themeToggle.toLight : t.themeToggle.toDark}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </nav>

      <main>
        <Introduction />
        <Profile />
        <Work />
        <MiniGame />
      </main>

      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;
