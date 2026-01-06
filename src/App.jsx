import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Lazy Load Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AnatomyPage = lazy(() => import('./pages/AnatomyPage'));
const PhysiologyPage = lazy(() => import('./pages/PhysiologyPage'));
const PhysiologyDetail = lazy(() => import('./components/PhysiologyDetail'));
const ModalitiesPage = lazy(() => import('./pages/ModalitiesPage'));
const LabValuesPage = lazy(() => import('./components/LabValuesPage'));
const OrthoticsProstheticsPage = lazy(() => import('./pages/OrthoticsProstheticsPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'var(--color-primary)' }}>
    Loading...
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="anatomy" element={<PageWrapper><AnatomyPage /></PageWrapper>} />
            <Route path="physiology" element={<PageWrapper><PhysiologyPage /></PageWrapper>} />
            <Route path="physiology/:topicId" element={<PageWrapper><PhysiologyDetail /></PageWrapper>} />
            <Route path="modalities" element={<PageWrapper><ModalitiesPage /></PageWrapper>} />
            <Route path="labs" element={<PageWrapper><LabValuesPage /></PageWrapper>} />
            <Route path="orthotics-prosthetics" element={<PageWrapper><OrthoticsProstheticsPage /></PageWrapper>} />
            <Route path="exercises" element={<PageWrapper><ExercisesPage /></PageWrapper>} />
            <Route path="quiz" element={<PageWrapper><QuizPage /></PageWrapper>} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
