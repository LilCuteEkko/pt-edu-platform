import { Link } from 'react-router-dom';
import { Activity, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <Activity size={24} />
          <span>PT Edu</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/anatomy">Anatomy</Link>
          <Link to="/physiology">Physiology</Link>
          <Link to="/modalities">Modalities</Link>
          <Link to="/exercises">Exercises</Link>
          <Link to="/labs">Lab Values</Link>
          <Link to="/orthotics-prosthetics">Orthotics & Prosthetics</Link>
          <Link to="/quiz">Quiz Mode</Link>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
      <style>{`
        .navbar {
          background: rgba(var(--color-surface-rgb), 0.85); /* Need to ensure this works or fallback */
          background: var(--color-surface); /* Fallback */
          /* Better backdrop support needed later for dark mode transparency */
          background: color-mix(in srgb, var(--color-surface), transparent 15%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-secondary); /* Adjusted */
          border-bottom: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-primary);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links a {
          font-weight: 500;
          color: var(--color-text-muted);
        }
        .nav-links a:hover {
          color: var(--color-primary);
        }
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-muted);
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, color 0.2s;
        }
        .theme-toggle:hover {
          color: var(--color-primary);
          background-color: color-mix(in srgb, var(--color-primary), transparent 90%);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
