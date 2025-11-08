import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Box, Layers, Activity } from 'lucide-react';

export function DeploymentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const k8sDeployment = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: nginx:alpine
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: web-app-service
spec:
  type: LoadBalancer
  selector:
    app: web-app
  ports:
  - port: 80
    targetPort: 80`;

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-500 to-violet-600 rounded-3xl blur-2xl opacity-20" />

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-6 py-4 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <Box className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 font-mono">deployment.yaml</span>
                  </div>
                </div>

                <div className="p-6 overflow-x-auto max-h-[600px] overflow-y-auto">
                  <pre className="text-sm leading-relaxed">
                    <code className="font-mono">
                      {k8sDeployment.split('\n').map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                        >
                          <span className="text-gray-500 select-none mr-6 inline-block w-6 text-right">
                            {index + 1}
                          </span>
                          <span className={
                            line.includes('apiVersion:') || line.includes('kind:') ? 'text-rose-400' :
                            line.includes('name:') || line.includes('namespace:') ? 'text-teal-400' :
                            line.includes('replicas:') || line.includes('port:') ? 'text-amber-400' :
                            line.includes('image:') ? 'text-violet-400' :
                            line.includes('metadata:') || line.includes('spec:') || line.includes('selector:') ? 'text-cyan-400' :
                            line.includes('app:') || line.includes('type:') ? 'text-blue-400' :
                            'text-gray-300'
                          }>
                            {line}
                          </span>
                        </motion.div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-violet-600 text-white rounded-full mb-6"
              >
                <Layers className="w-4 h-4" />
                <span className="text-sm font-semibold">Container Orchestration</span>
              </motion.div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 font-['Space_Grotesk']">
                Service Definition & Deployment
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-violet-600 mb-8" />

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Once the cluster is provisioned, Ansible automatically deploys containerized applications using Kubernetes manifests. The deployment configuration defines pods, replicas, and services with production-grade resource management.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                This example shows a three-replica web application with load balancing, resource limits, and high availability configuration—all deployed and managed through declarative YAML specifications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pod Replicas</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-teal-500 to-violet-600 rounded-2xl p-6 text-white"
            >
              <h3 className="font-semibold mb-3 text-lg">Key Features</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Rolling updates with zero downtime</li>
                <li>• Automatic pod rescheduling on node failure</li>
                <li>• Resource quotas and limit enforcement</li>
                <li>• Integrated service discovery and load balancing</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
