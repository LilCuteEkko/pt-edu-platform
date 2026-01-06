import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AnatomyPage from './pages/AnatomyPage';
import PhysiologyPage from './pages/PhysiologyPage';
import PhysiologyDetail from './components/PhysiologyDetail';
import ModalitiesPage from './pages/ModalitiesPage';
import LabValuesPage from './components/LabValuesPage';
import QuizPage from './pages/QuizPage';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

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

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="anatomy" element={<PageWrapper><AnatomyPage /></PageWrapper>} />
          <Route path="physiology" element={<PageWrapper><PhysiologyPage /></PageWrapper>} />
          <Route path="physiology/:topicId" element={<PageWrapper><PhysiologyDetail /></PageWrapper>} />
          <Route path="modalities" element={<PageWrapper><ModalitiesPage /></PageWrapper>} />
          <Route path="labs" element={<PageWrapper><LabValuesPage /></PageWrapper>} />
          <Route path="quiz" element={<PageWrapper><QuizPage /></PageWrapper>} />
        </Route>
      </Routes>
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
