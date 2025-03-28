'use client'

import { FaEnvelope } from 'react-icons/fa'

export default function ContactForm() {
  return (
    <div className="text-center space-y-6 p-8 bg-background/40 rounded-lg border border-muted/30">
      <p className="text-lg text-muted">
        The best way to reach me is directly through email:
      </p>
      
      <div className="flex justify-center mt-4">
        <a 
          href="mailto:rugglesbohannon@gmail.com" 
          className="flex items-center gap-3 px-5 py-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors border-2 border-primary/40 shadow-md"
        >
          <FaEnvelope className="text-2xl" />
          <span className="font-medium">Send me an email</span>
        </a>
      </div>
      
      <p className="mt-6 text-muted/80">
        I typically respond to all inquiries within 24-48 hours.
      </p>
    </div>
  )
} 