import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, GitBranch, CheckCircle2 } from 'lucide-react';

export function AutomationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const ansibleCode = `---
- name: Install K3s on master node
  hosts: master
  become: true
  tasks:
    - name: Download K3s installation script
      get_url:
        url: https://get.k3s.io
        dest: /tmp/k3s-install.sh
        mode: '0755'

    - name: Install K3s server
      shell: |
        INSTALL_K3S_EXEC="server --cluster-init" \\
        sh /tmp/k3s-install.sh
      args:
        creates: /usr/local/bin/k3s

    - name: Wait for K3s to be ready
      wait_for:
        path: /etc/rancher/k3s/k3s.yaml
        state: present
        timeout: 120

    - name: Fetch kubeconfig
      fetch:
        src: /etc/rancher/k3s/k3s.yaml
        dest: ./kubeconfig
        flat: yes`;

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full mb-6"
              >
                <GitBranch className="w-4 h-4" />
                <span className="text-sm font-semibold">Infrastructure as Code</span>
              </motion.div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 font-['Space_Grotesk']">
                Idempotent Automation with Ansible
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-rose-500 mb-8" />

              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Ansible was chosen for its declarative, agentless architecture and idempotent execution model. This ensures that running the playbook multiple times produces the same result without side effects or configuration drift.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The automation handles complete cluster provisioning: K3s installation, certificate generation and distribution, network configuration, node registration, and initial application deployment—all through version-controlled playbooks.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Zero-touch K3s server and agent installation',
                'Automated certificate management and distribution',
                'Network policy and firewall configuration',
                'Kubeconfig generation and secure storage',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl blur-2xl opacity-20" />

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-6 py-4 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 font-mono">install-k3s.yml</span>
                  </div>
                </div>

                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm leading-relaxed">
                    <code className="font-mono">
                      {ansibleCode.split('\n').map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                        >
                          <span className="text-gray-500 select-none mr-6 inline-block w-6 text-right">
                            {index + 1}
                          </span>
                          <span className={
                            line.includes('name:') ? 'text-teal-400' :
                            line.includes('hosts:') || line.includes('become:') ? 'text-violet-400' :
                            line.includes('tasks:') ? 'text-amber-400' :
                            line.includes('get_url:') || line.includes('shell:') || line.includes('wait_for:') || line.includes('fetch:') ? 'text-rose-400' :
                            line.trim().startsWith('-') ? 'text-cyan-400' :
                            line.includes(':') && !line.trim().startsWith('#') ? 'text-blue-400' :
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
        </div>
      </div>
    </section>
  );
}
