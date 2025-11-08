import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Download } from 'lucide-react';

export function ProjectSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight font-['Space_Grotesk']">
                The Hook
              </h2>
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-teal-500 to-violet-600" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-['Space_Grotesk']">
                Automated Kubernetes Provisioning at Scale
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  This project showcases a complete Infrastructure-as-Code solution that automates the deployment of a production-ready Kubernetes (k3s) cluster using Ansible. The system eliminates manual configuration steps, reduces deployment time by 90%, and ensures idempotent, repeatable infrastructure provisioning across multiple nodes.
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                  Built with enterprise-grade DevOps practices, the automation handles everything from initial server setup and K3s installation to certificate management, network configuration, and containerized application deployment. The result is a resilient, scalable cluster that can be provisioned in minutes instead of hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid sm:grid-cols-3 gap-4 pt-8"
            >
              <motion.a
                href="https://github.com/dplouis8/Ansible-Automated-Kubernetes-Deployment-k3s-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                GitHub Repo
              </motion.a>

              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.button>

              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-2xl font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12"
            >
              {[
                { label: 'Deployment Time', value: '~5 min', highlight: true },
                { label: 'Error Rate', value: '0%', highlight: false },
                { label: 'Nodes Managed', value: '3+', highlight: false },
                { label: 'Automation', value: '100%', highlight: true },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className={`p-6 rounded-2xl ${
                    stat.highlight
                      ? 'bg-gradient-to-br from-teal-500 to-violet-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white'
                  }`}
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className={`text-sm ${stat.highlight ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
