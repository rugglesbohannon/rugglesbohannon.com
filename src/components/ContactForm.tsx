'use client'

import { FaEnvelope } from 'react-icons/fa'

export default function ContactForm() {
  return (
    <div className="text-center space-y-6 p-8 bg-background/40 rounded-lg border border-muted/30">
      <p className="text-lg text-muted">
        The best way to reach me is directly through email:
      </p>
      
      <a 
        href="mailto:rugglesbohannon@gmail.com" 
        className="inline-flex items-center gap-2 text-xl font-medium text-primary hover:text-primary/80 transition-colors font-display tracking-medium"
      >
        <FaEnvelope className="text-2xl" />
        Send me an email
      </a>
      
      <p className="mt-6 text-muted/80">
        I typically respond to all inquiries within 24-48 hours.
      </p>
    </div>
  )
} 