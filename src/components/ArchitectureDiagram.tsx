import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, GitBranch, Box, Network } from 'lucide-react';

export function ArchitectureDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-['Space_Grotesk']">
            System Architecture Overview
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A complete view of the automated provisioning flow from local control to distributed cluster
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-violet-600/10 rounded-3xl blur-3xl" />

          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-1"
              >
                <div className="bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl p-8 text-center">
                  <GitBranch className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Ansible</h3>
                  <p className="text-white/80 text-sm">Control Machine</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="hidden lg:block"
              >
                <div className="flex items-center justify-center">
                  <motion.div
                    className="h-1 w-full bg-gradient-to-r from-rose-500 to-teal-500"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                  <div className="w-3 h-3 bg-teal-500 rounded-full -ml-1" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="lg:col-span-1"
              >
                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-8 text-center">
                  <Server className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Master Node</h3>
                  <p className="text-white/80 text-sm">Control Plane + etcd</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="hidden lg:block"
              >
                <div className="flex items-center justify-center">
                  <motion.div
                    className="h-1 w-full bg-gradient-to-r from-cyan-500 to-violet-600"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  />
                  <div className="w-3 h-3 bg-violet-600 rounded-full -ml-1" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="lg:col-span-1"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-center">
                    <Box className="w-10 h-10 text-white mx-auto mb-2" />
                    <h3 className="text-white font-bold mb-1">Worker Node 1</h3>
                    <p className="text-white/80 text-xs">Container Runtime</p>
                  </div>
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-center">
                    <Box className="w-10 h-10 text-white mx-auto mb-2" />
                    <h3 className="text-white font-bold mb-1">Worker Node 2</h3>
                    <p className="text-white/80 text-xs">Container Runtime</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl mb-3">
                    <Network className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Load Balancer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ingress traffic distribution</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl mb-3">
                    <Server className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Certificate Manager</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automated TLS provisioning</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl mb-3">
                    <Box className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Container Registry</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Image storage & distribution</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
