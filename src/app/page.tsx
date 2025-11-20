'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaBriefcase, FaDatabase, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const links = [
    {
      href: "https://www.linkedin.com/in/ruggles-bohannon-a2775717b/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "blue"
    },
    {
      href: "https://github.com/rugglesbohannon",
      icon: FaGithub,
      label: "GitHub",
      color: "slate"
    },
    {
      href: "https://www.openamlab.com/",
      icon: FaDatabase,
      label: "AM Lab",
      color: "cyan"
    },
    {
      href: "https://www.rugglesbohannondesigns.com/",
      icon: FaBriefcase,
      label: "Portfolio",
      color: "white"
    }
  ]

    return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Minimal grid background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-transparent"></div>
      </div>

      {/* Fixed Contact Card - Right Side - 50px from main frame */}
      <motion.div 
        className="hidden xl:block fixed left-[calc(50%+448px+50px)] top-32 z-40 w-72"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-zinc-950/50 backdrop-blur-sm rounded-sm border border-white/5 p-6 hover:border-cyan-500/20 transition-all duration-300">
          <h3 className="text-sm font-medium mb-3 text-white uppercase tracking-wider">Contact</h3>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            Direct communication via email
          </p>
          <a 
            href="mailto:rugglesbohannon@gmail.com" 
            className="group flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black rounded-sm hover:bg-cyan-400 transition-all duration-200 text-sm font-medium"
          >
            <FaEnvelope className="text-sm" />
            <span>Send Email</span>
          </a>
          <p className="mt-4 text-[10px] text-zinc-500 text-center uppercase tracking-wider">
            Response: 24-48h
          </p>
        </div>
      </motion.div>

      {/* Expandable Link Stack - Left Side - 50px from main frame */}
      <div className="hidden xl:block fixed left-[calc(50%-448px-50px-180px)] top-32 z-40">
        <div className="flex flex-col gap-2">
          {links.map((link, index) => {
            const Icon = link.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative h-14"
              >
                {/* Fixed Icon - Never moves */}
                <div className="absolute left-[124px] top-0 z-20 w-14 h-14 flex items-center justify-center pointer-events-none">
                  <Icon className={`text-xl ${
                    link.color === 'blue' ? 'text-blue-400' :
                    link.color === 'slate' ? 'text-zinc-300' :
                    link.color === 'cyan' ? 'text-cyan-400' :
                    'text-white'
                  }`} />
          </div>
          
                {/* Expanding background with text */}
                <motion.div
                  animate={{
                    width: isHovered ? 180 : 56,
                    x: isHovered ? 0 : 124,
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                  className="absolute left-0 top-0 overflow-hidden"
                >
                  <Link 
                    href={link.href}
                    className={`group bg-zinc-950/50 backdrop-blur-sm rounded-sm px-4 py-3.5 transition-all duration-200 flex items-center justify-end gap-3 border h-14 ${
                      link.color === 'blue' ? 'border-white/5 hover:border-blue-500/30 hover:bg-blue-950/20' :
                      link.color === 'slate' ? 'border-white/5 hover:border-white/20 hover:bg-zinc-900/50' :
                      link.color === 'cyan' ? 'border-white/5 hover:border-cyan-500/30 hover:bg-cyan-950/20' :
                      'border-white/5 hover:border-white/20 hover:bg-zinc-900/50'
                    }`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ width: isHovered ? '180px' : '56px' }}
                  >
                    <motion.span 
                      className="text-sm font-medium text-white whitespace-nowrap mr-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
              </div>
          </div>
          
      {/* Main Content */}
      <div className="container mx-auto px-6">
        {/* Combined Hero and About Section */}
        <section className="min-h-screen flex flex-col items-center pt-32 pb-20">
          <motion.div 
            className="bg-zinc-950/30 backdrop-blur-sm rounded-sm border border-white/5 p-16 w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Content */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-12">
              {/* Profile Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative w-44 h-44 rounded-sm overflow-hidden border border-white/10">
                        <Image 
                          src="/linkedinheadshot.jpeg" 
                          alt="Ruggles Bohannon"
                    width={176}
                    height={176}
                          className="object-cover w-full h-full"
                          style={{ objectPosition: '50% 30%' }}
                          priority
                        />
                      </div>
              </motion.div>

              {/* Name and Title */}
              <motion.div 
                className="text-center md:text-left flex-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-white mb-4">
                      Ruggles Bohannon
                    </h1>
                <p className="text-lg text-zinc-400 font-light mb-6 tracking-wide">
                  Engineer · AI/ML Systems · Automations · Space Systems
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-sm text-xs text-zinc-300 border border-white/10 bg-zinc-950/30 uppercase tracking-wider">San Francisco & San Diego, CA</span>
                  <span className="px-3 py-1.5 rounded-sm text-xs text-zinc-300 border border-white/10 bg-zinc-950/30 uppercase tracking-wider">Defense Tech</span>
                  <span className="px-3 py-1.5 rounded-sm text-xs text-zinc-300 border border-white/10 bg-zinc-950/30 uppercase tracking-wider">DoD Fellow</span>
                </div>
              </motion.div>
          </div>
          
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-6 text-zinc-300 leading-relaxed text-[15px]">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Most systems generate more data than they use. I've spent my career building the infrastructure that closes that gap, particularly in areas where it matters: critical infrastructure, supply chains, manufacturing, and space systems. I build automations, data pipelines, and evaluation systems that help organizations act on information they already have.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Today I lead a deep tech space company building data infrastructure for commercial space systems. The space industry is democratizing rapidly. More companies are launching sensors, tracking objects, and bidding on government contracts than ever before. But the systems we use to evaluate and trust that technology haven't kept pace. I'm building the infrastructure that lets buyers and operators know what actually works. As commercial space becomes critical infrastructure, getting this right matters.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Before this, I founded AM LAB, a research platform that tracks additive manufacturing adoption across the defense industrial base. Advanced manufacturing will reshape how we build everything from aircraft components to medical devices, but adoption is uneven and hard to see. I built the data pipelines that make it visible, so companies and program offices can understand where new methods are taking hold and where they aren't. I've also worked with technology companies to increase factory throughput using custom printed tooling, helped water treatment firms digitize legacy hardware, and built data pipelines for a generative design company. I was selected as an undergraduate invitee to OpenAI's 2024 Developer Day.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  I work in Python, SQL, and modern ML frameworks for data engineering and evaluation. I use N8n for workflow automation, Google Cloud and AWS for production deployments, and Tableau and Plotly for turning results into decisions. I also have eight years of CAD, design for additive manufacturing, and generative design experience in Fusion 360, plus a background in metalsmithing and fabrication. I'm comfortable writing benchmark specifications, welding fixtures, tuning data pipelines, and briefing leadership.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  I compete in prone board races, run long distance, surf, and play guitar.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  I'm a techno-optimist who believes frontier technology should move fast, get tested hard, and ship into the real world. If you're building systems at the intersection of AI, hardware, and national security, let's talk.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Mobile Links - Shown only on mobile */}
          <div className="lg:hidden mt-8 flex flex-wrap gap-3 justify-center">
            {links.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                >
            <Link 
                    href={link.href}
                    className={`bg-zinc-950/50 backdrop-blur-sm rounded-sm px-4 py-3 transition-all duration-200 flex items-center gap-2.5 border ${
                      link.color === 'blue' ? 'border-white/5 hover:border-blue-500/30' :
                      link.color === 'slate' ? 'border-white/5 hover:border-white/20' :
                      link.color === 'cyan' ? 'border-white/5 hover:border-cyan-500/30' :
                      'border-white/5 hover:border-white/20'
                    }`}
              target="_blank" 
              rel="noopener noreferrer"
            >
                    <Icon className={`text-base ${
                      link.color === 'blue' ? 'text-blue-400' :
                      link.color === 'slate' ? 'text-zinc-300' :
                      link.color === 'cyan' ? 'text-cyan-400' :
                      'text-white'
                    }`} />
                    <span className="text-sm font-medium text-white">{link.label}</span>
            </Link>
                </motion.div>
              )
            })}
        </div>
      </section>

        {/* Mobile Contact Section */}
        <motion.section 
          className="lg:hidden py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-zinc-950/30 backdrop-blur-sm rounded-sm border border-white/5 p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-normal text-white mb-6 text-center tracking-tight">Contact</h2>
            <p className="text-zinc-300 mb-6 text-center text-sm">
              Direct communication via email
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:rugglesbohannon@gmail.com" 
                className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-sm hover:bg-cyan-400 transition-all duration-200 font-medium"
              >
                <FaEnvelope className="text-lg" />
                <span>Send me an email</span>
              </a>
            </div>
            <p className="mt-6 text-xs text-zinc-500 text-center uppercase tracking-wider">
              Response: 24-48 hours
            </p>
          </div>
        </motion.section>

      {/* Footer */}
        <footer className="py-16 text-center border-t border-white/5">
          <p className="text-zinc-500 text-xs uppercase tracking-wider">© {new Date().getFullYear()} Ruggles Bohannon</p>
          <p className="mt-2 text-[10px] text-zinc-600 uppercase tracking-wider">rugglesbohannon.com</p>
        </footer>
        </div>

    </main>
  )
}
