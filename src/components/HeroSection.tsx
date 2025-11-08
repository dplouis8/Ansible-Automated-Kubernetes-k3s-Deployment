import { motion, MotionValue } from 'framer-motion';
import { Github, Download, Play } from 'lucide-react';

interface HeroSectionProps {
  backgroundOpacity: MotionValue<number>;
}

export function HeroSection({ backgroundOpacity }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-violet-600 dark:from-teal-600 dark:via-cyan-700 dark:to-violet-800"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <span className="text-white text-sm font-medium">Infrastructure Specialist / DevOps Engineer</span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] font-['Space_Grotesk']">
              DANIEL
              <br />
              PIERRE-LOUIS
            </h1>

            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-rose-500" />

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
              Ansible-Automated Kubernetes (k3s) Deployment
              <span className="block mt-2 text-white/70 text-lg">
                Infrastructure as Code · Container Orchestration · 90% Time Savings
              </span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://github.com/dplouis8/Ansible-Automated-Kubernetes-Deployment-k3s-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                View Source Code
              </motion.a>

              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-400 to-rose-500 rounded-3xl blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="bg-gray-900/50 backdrop-blur-sm px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Demo Video</div>
                    <div className="text-white/60 text-sm">Live Deployment Walkthrough</div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-gray-900">
                <iframe
                  src="https://player.vimeo.com/video/1134780154?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Ansible-Automated Kubernetes Deployment Demo"
                />
              </div>

              <div className="p-6 bg-gray-900/30 backdrop-blur-sm">
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-white/60 text-xs">Nodes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">90%</div>
                    <div className="text-white/60 text-xs">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-white/60 text-xs">Auto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-white/60 text-xs">Errors</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
