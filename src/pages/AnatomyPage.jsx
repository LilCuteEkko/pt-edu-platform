import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import MuscleCard from '../components/MuscleCard';
import OrganCard from '../components/OrganCard';
import { muscles } from '../data/muscles';
import { organs } from '../data/organs';

const AnatomyPage = () => {
  const [activeTab, setActiveTab] = useState('muscles'); // 'muscles' or 'organs'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Determine which dataset to use
  const currentData = activeTab === 'muscles' ? muscles : organs;

  // Get unique categories (Region for muscles, System for organs)
  const categories = useMemo(() => {
    const key = activeTab === 'muscles' ? 'category' : 'system';
    return ['All', ...new Set(currentData.map(item => item[key]))];
  }, [currentData, activeTab]);

  // Reset category when tab changes
  // We handle this effect to ensure we don't get stuck on a category that doesn't exist in the new tab
  if (selectedCategory !== 'All' && !categories.includes(selectedCategory)) {
    setSelectedCategory('All');
  }

  const filteredItems = useMemo(() => {
    return currentData.filter(item => {
      const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryKey = activeTab === 'muscles' ? 'category' : 'system';
      const matchCategory = selectedCategory === 'All' || item[categoryKey] === selectedCategory;
      return matchName && matchCategory;
    });
  }, [searchTerm, selectedCategory, currentData, activeTab]);

  return (
    <div className="anatomy-page container">
      <div className="page-header">
        <h1>Anatomy Dashboard</h1>
        <p>Explore detailed breakdown of human anatomy.</p>

        <div className="tab-switcher">
          <button
            className={`tab-btn ${activeTab === 'muscles' ? 'active' : ''}`}
            onClick={() => setActiveTab('muscles')}
          >
            Muscles & Bones
          </button>
          <button
            className={`tab-btn ${activeTab === 'organs' ? 'active' : ''}`}
            onClick={() => setActiveTab('organs')}
          >
            Organs
          </button>
        </div>
      </div>

      <div className="controls">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-wrapper">
          <label htmlFor="category-select">{activeTab === 'muscles' ? 'Region' : 'System'}:</label>
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

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            activeTab === 'muscles' ? (
              <MuscleCard key={item.id} muscle={item} />
            ) : (
              <OrganCard key={item.id} organ={item} />
            )
          ))
        ) : (
          <div className="no-results">
            <p>No {activeTab} found matching your criteria.</p>
          </div>
        )}
      </div>

      <style>{`
        .anatomy-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .page-header {
          margin-bottom: 2rem;
          text-align: center;
        }
        .page-header p {
          color: var(--color-text-muted);
          margin-top: 0.5rem;
          margin-bottom: 2rem;
        }
        .tab-switcher {
          display: inline-flex;
          background: var(--color-surface);
          padding: 0.25rem;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .tab-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 999px;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tab-btn:hover {
          color: var(--color-text);
        }
        .tab-btn.active {
          background: var(--color-primary);
          color: white;
          box-shadow: var(--shadow-sm);
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
        .items-grid {
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
