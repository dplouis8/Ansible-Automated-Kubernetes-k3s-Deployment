import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
              DANIEL PIERRE-LOUIS
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              DevOps Engineer specializing in infrastructure automation, container orchestration, and cloud-native solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/dplouis8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 hover:scale-110 transition-transform"
                whileHover={{ y: -2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 hover:scale-110 transition-transform"
                whileHover={{ y: -2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 hover:scale-110 transition-transform"
                whileHover={{ y: -2 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technical Stack
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Kubernetes (K3s) & Docker</li>
              <li>• Ansible & Terraform</li>
              <li>• Linux Administration</li>
              <li>• CI/CD Pipelines</li>
              <li>• Cloud Platforms (AWS, Azure, GCP)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/dplouis8/Ansible-Automated-Kubernetes-Deployment-k3s-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Repository
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Daniel Pierre-Louis. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
