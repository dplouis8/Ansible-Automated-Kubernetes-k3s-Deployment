import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  Download,
  Sun,
  Moon,
  Server,
  GitBranch,
  Box,
  CheckCircle2,
  ExternalLink,
  Play
} from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ProjectSummary } from './components/ProjectSummary';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { AutomationSection } from './components/AutomationSection';
import { DeploymentSection } from './components/DeploymentSection';
import { ValidationSection } from './components/ValidationSection';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-amber-500" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </motion.button>

      <HeroSection backgroundOpacity={backgroundOpacity} />
      <ProjectSummary />
      <ArchitectureDiagram />
      <AutomationSection />
      <DeploymentSection />
      <ValidationSection />
      <Footer />
    </div>
  );
}

export default App;
