'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
}

const writings = [
  {
    title: 'When should a company adopt open models?',
    href: '/open-models/index.html',
  },
]

export default function WritingsPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 max-w-7xl mx-auto">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        aria-label="Back"
        className="mb-10 md:mb-12 text-sm text-gray-400"
      >
        <Link href="/" className="relative inline-flex items-center gap-2 group hover:text-white transition-colors">
          <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:-translate-x-1">←</span>
          <span className="relative">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </span>
        </Link>
      </motion.nav>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-24 md:space-y-32"
      >
        {/* Header */}
        <motion.header
          variants={item}
          className="flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="text-white font-medium hover:text-gray-300 transition-colors"
            >
              Ruggles Bohannon
            </Link>
            <span>Engineer</span>
          </div>

          <div className="flex flex-col gap-1 md:text-right">
            <span>San Francisco · San Diego · Colorado Springs · Washington, D.C.</span>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <a
              href="mailto:rugglesbohannon@gmail.com"
              className="relative inline-block group hover:text-white transition-colors"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          </div>
        </motion.header>

        {/* Writings & Guides List */}
        <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h1 className="text-sm font-medium text-gray-500">
              Writings & Guides
            </h1>
          </div>
          <div className="md:col-span-9 w-full space-y-6">
            {writings.map((entry) => (
              <div key={entry.href}>
                <a
                  href={entry.href}
                  className="relative inline-block group text-xl text-white font-medium"
                >
                  <span className="relative z-10">{entry.title}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}
