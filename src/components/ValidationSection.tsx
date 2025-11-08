import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Terminal, TrendingUp, Shield } from 'lucide-react';

export function ValidationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const terminalOutput = `PLAY RECAP *********************************************************
master-node        : ok=12   changed=0    unreachable=0    failed=0
worker-node-1      : ok=8    changed=0    unreachable=0    failed=0
worker-node-2      : ok=8    changed=0    unreachable=0    failed=0

Deployment completed successfully in 4m 32s`;

  const kubectlOutput = `NAME           STATUS   ROLES                  AGE   VERSION
master-node    Ready    control-plane,master   5d    v1.28.4+k3s1
worker-node-1  Ready    <none>                 5d    v1.28.4+k3s1
worker-node-2  Ready    <none>                 5d    v1.28.4+k3s1`;

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-['Space_Grotesk']">
            Successful Provisioning & Verification
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Zero-error deployments with comprehensive validation and monitoring
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-green-500" />
                Ansible Execution Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Idempotent playbook with zero changes on re-run
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-20" />

              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400 font-mono">ansible-playbook output</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>

                <div className="p-6">
                  <pre className="text-sm font-mono leading-relaxed text-green-400">
                    {terminalOutput}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-teal-500" />
                Cluster Health Status
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All nodes operational and accepting workloads
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl blur-xl opacity-20" />

              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span className="text-sm text-gray-400 font-mono">kubectl get nodes</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  </div>
                </div>

                <div className="p-6">
                  <pre className="text-sm font-mono leading-relaxed text-teal-400">
                    {kubectlOutput}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: TrendingUp,
              label: 'Time Savings',
              value: '90%',
              description: 'Reduced provisioning time',
              color: 'from-amber-500 to-rose-500',
            },
            {
              icon: CheckCircle2,
              label: 'Success Rate',
              value: '100%',
              description: 'Error-free deployments',
              color: 'from-green-500 to-emerald-600',
            },
            {
              icon: Shield,
              label: 'Reliability',
              value: '99.9%',
              description: 'Cluster uptime achieved',
              color: 'from-teal-500 to-cyan-600',
            },
            {
              icon: Terminal,
              label: 'Automation',
              value: '0',
              description: 'Manual configuration steps',
              color: 'from-violet-500 to-purple-600',
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${metric.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl mb-4`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-br from-teal-500 to-violet-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4 font-['Space_Grotesk']">
            Production-Ready Infrastructure
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            This automated deployment pipeline demonstrates enterprise-grade DevOps practices with zero-downtime deployments, comprehensive monitoring, and infrastructure that scales with business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ✓ Continuous Deployment
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ✓ Infrastructure as Code
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ✓ High Availability
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ✓ Auto-scaling Ready
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
