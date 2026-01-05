import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import MuscleCard from '../components/MuscleCard';
import { muscles } from '../data/muscles';

const AnatomyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(muscles.map(m => m.category))];

  const filteredMuscles = useMemo(() => {
    return muscles.filter(muscle => {
      const matchesSearch = muscle.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || muscle.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="anatomy-page container">
      <div className="page-header">
        <h1>Anatomy Dashboard</h1>
        <p>Explore detailed breakdown of muscles, nerves, and actions.</p>
      </div>

      <div className="controls">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search muscles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-wrapper">
          <label htmlFor="category-select">Region:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="muscles-grid">
        {filteredMuscles.length > 0 ? (
          filteredMuscles.map(muscle => (
            <MuscleCard key={muscle.id} muscle={muscle} />
          ))
        ) : (
          <div className="no-results">
            <p>No muscles found matching your criteria.</p>
          </div>
        )}
      </div>

      <style>{`
        .anatomy-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .page-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .page-header p {
          color: var(--color-text-muted);
          margin-top: 0.5rem;
        }
        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          background: var(--color-surface);
          padding: 1rem;
          border-radius: var(--radius-lg);
          border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
        }
        .search-wrapper {
          position: relative;
          flex: 1;
          min-width: 280px;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }
        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-family: inherit;
          color: var(--color-text);
          background: color-mix(in srgb, var(--color-surface), var(--color-text) 3%);
          transition: border-color 0.2s, background-color 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: var(--color-primary);
          background: var(--color-surface);
          box-shadow: 0 0 0 3px var(--color-primary-light);
        }
        .filter-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .category-select {
          padding: 0.5rem 2rem 0.5rem 1rem;
          border: 1px solid color-mix(in srgb, var(--color-text), transparent 90%);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--color-text);
          background-color: var(--color-surface);
          cursor: pointer;
        }
        .muscles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  );
};

export default AnatomyPage;
