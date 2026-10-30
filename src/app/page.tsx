'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
}

const LinkWithUnderline = ({ href, children, target }: { href: string, children: React.ReactNode, target?: string }) => {
  return (
    <Link href={href} target={target} className="relative inline-block group">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  )
}

const AnchorWithUnderline = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
  return (
    <a href={href} className={`relative inline-block group ${className || ''}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-24 md:space-y-32"
      >
        {/* Header */}
        <motion.header variants={item} className="flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-medium">Ruggles Bohannon</h1>
            <span>Engineer</span>
          </div>
          
          <div className="flex flex-col gap-1 md:text-right">
            <span>San Francisco · San Diego · Colorado Springs · Washington, D.C.</span>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <AnchorWithUnderline href="mailto:rugglesbohannon@gmail.com" className="hover:text-white transition-colors">Contact</AnchorWithUnderline>
            <LinkWithUnderline href="/writings">
              <span className="hover:text-white transition-colors">Writings & Guides</span>
            </LinkWithUnderline>
          </div>
        </motion.header>

        {/* Hero */}
        <motion.section variants={item} className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-white">
            Ruggles Bohannon is an engineer rebuilding American federal acquisition.
          </h2>
        </motion.section>

        {/* About */}
        <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-gray-500">About</h3>
          </div>
          <div className="md:col-span-9 max-w-2xl text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              I build data infrastructure, automations, and evaluation systems to rebuild the American federal acquisition system. Currently leading Kharros and a stealth company. Based in San Francisco, San Diego, Colorado Springs, and Washington, D.C.
            </p>
            <p>
              Government procurement and defense programs generate more data than they use. I build the infrastructure that closes that gap across federal contracting, defense supply chains, manufacturing, and space systems.
            </p>
          </div>
        </motion.section>

        {/* Work */}
        <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-gray-500">Work</h3>
          </div>
          <div className="md:col-span-9 w-full space-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline">
                <span className="text-xl text-white font-medium">Kharros</span>
                <span className="text-sm text-gray-500">2025 → Present</span>
              </div>
              <p className="mt-2 text-gray-400">Federal acquisition at the speed of innovation</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline">
                <span className="text-xl text-white font-medium">Stealth Space Co.</span>
                <span className="text-sm text-gray-500">2024 → Present</span>
              </div>
              <p className="mt-2 text-gray-400">Co-Founder & President • Data Infrastructure for Commercial Space Systems</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline">
                <span className="text-xl text-white font-medium">Department of Defense</span>
                <span className="text-sm text-gray-500">2025</span>
              </div>
              <p className="mt-2 text-gray-400">DIU x USSF Special Project</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline">
                <span className="text-xl text-white font-medium">Additive Manufacturing Lab (AM LAB)</span>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="mt-2 text-gray-400">Research platform tracking additive manufacturing adoption</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline">
                <span className="text-xl text-white font-medium">OpenAI Developer Day</span>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="mt-2 text-gray-400">Undergraduate Invitee</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline">
                <span className="text-xl text-white font-medium">nTop Backend Engineer</span>
                <span className="text-sm text-gray-500">2022</span>
              </div>
              <p className="mt-2 text-gray-400">Data Pipelines • Cloud Infrastructure</p>
            </div>
          </div>
        </motion.section>

        {/* Concepts / Skills */}
        <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-gray-500">Concepts</h3>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-white">Engineering</h4>
              <p className="text-gray-400 text-sm">Python, SQL, Modern ML Frameworks, Data Engineering</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white">Systems</h4>
              <p className="text-gray-400 text-sm">N8n, Google Cloud, AWS, Tableau, Plotly</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white">Manufacturing</h4>
              <p className="text-gray-400 text-sm">CAD (Fusion 360), Additive Manufacturing, Generative Design</p>
            </div>
          </div>
        </motion.section>

        {/* Investments / Interests */}
        <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-gray-500">Interests</h3>
          </div>
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
             <div>
                <span className="block text-white mb-1">1</span>
                <span>Deep Tech</span>
             </div>
             <div>
                <span className="block text-white mb-1">2</span>
                <span>Space Systems</span>
             </div>
             <div>
                <span className="block text-white mb-1">3</span>
                <span>National Security</span>
             </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section variants={item} className="grid md:grid-cols-12 gap-8 pb-12">
           <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-gray-500">Contact</h3>
          </div>
          <div className="md:col-span-9 flex flex-col gap-4 items-start">
            <AnchorWithUnderline href="mailto:rugglesbohannon@gmail.com" className="text-white hover:text-gray-300 transition-colors">Email</AnchorWithUnderline>
            <LinkWithUnderline href="https://www.linkedin.com/in/ruggles-bohannon-a2775717b/" target="_blank">
              <span className="text-white hover:text-gray-300 transition-colors">LinkedIn</span>
            </LinkWithUnderline>
            <LinkWithUnderline href="https://github.com/rugglesbohannon" target="_blank">
              <span className="text-white hover:text-gray-300 transition-colors">GitHub</span>
            </LinkWithUnderline>
            <LinkWithUnderline href="https://www.openamlab.com/" target="_blank">
              <span className="text-white hover:text-gray-300 transition-colors">AM Lab</span>
            </LinkWithUnderline>
          </div>
        </motion.section>

      </motion.div>
    </main>
  )
}
