import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaPalette, FaDatabase } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-20 border-b border-muted/20">
        <div className="container mx-auto px-4">
          {/* Mobile Layout - only shows on small screens */}
          <div className="flex md:hidden flex-col items-center gap-4 mb-6">
            <div className="flex justify-center">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary shadow-md">
                <Image 
                  src="/linkedinheadshot.jpeg" 
                  alt="Ruggles Bohannon"
                  width={112}
                  height={112}
                  className="object-cover"
                  style={{ objectPosition: '50% 30%' }}
                  priority
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-display text-2xl font-light tracking-medium uppercase text-foreground">
                Ruggles Bohannon
              </h1>
            </div>
          </div>

          {/* Desktop Layout - hidden on mobile */}
          <div className="hidden md:flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image 
                  src="/linkedinheadshot.jpeg" 
                  alt="Ruggles Bohannon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="font-display text-5xl md:text-6xl font-light tracking-medium uppercase mb-4 text-foreground">
                Ruggles Bohannon
              </h1>
              <p className="text-xl max-w-2xl text-muted mb-6">
                Welcome to my personal website
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <Link 
                  href="https://www.linkedin.com/in/ruggles-bohannon-a2775717b/" 
                  className="flex items-center gap-3 px-5 py-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors border-2 border-primary/40 shadow-md min-w-[120px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                  <span className="font-medium">LinkedIn</span>
                </Link>
                <Link 
                  href="https://github.com/rugglesbohannon" 
                  className="flex items-center gap-3 px-5 py-3 bg-foreground/20 hover:bg-foreground/30 text-foreground rounded-lg transition-colors border-2 border-foreground/40 shadow-md min-w-[120px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" />
                  <span className="font-medium">GitHub</span>
                </Link>
                <Link 
                  href="https://www.openamlab.com/" 
                  className="flex items-center gap-3 px-5 py-3 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-colors border-2 border-accent/40 shadow-md min-w-[120px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaDatabase className="text-2xl" />
                  <span className="font-medium">AM Lab</span>
                </Link>
                <Link 
                  href="https://www.rugglesbohannondesigns.com/" 
                  className="flex items-center gap-3 px-5 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors border-2 border-secondary/40 shadow-md min-w-[120px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaPalette className="text-2xl" />
                  <span className="font-medium">Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Welcome Text - Mobile Only */}
          <p className="md:hidden text-center text-lg text-muted mb-6">
            Welcome to my personal website
          </p>
          
          {/* Mobile Buttons - 2x2 Grid - Only visible on mobile */}
          <div className="grid md:hidden grid-cols-2 gap-3 max-w-xs mx-auto">
            <Link 
              href="https://www.linkedin.com/in/ruggles-bohannon-a2775717b/" 
              className="flex items-center gap-2 px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors border-2 border-primary/40 shadow-md" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg" />
              <span className="font-medium text-sm">LinkedIn</span>
            </Link>
            <Link 
              href="https://github.com/rugglesbohannon" 
              className="flex items-center gap-2 px-3 py-2 bg-foreground/20 hover:bg-foreground/30 text-foreground rounded-lg transition-colors border-2 border-foreground/40 shadow-md" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg" />
              <span className="font-medium text-sm">GitHub</span>
            </Link>
            <Link 
              href="https://www.openamlab.com/" 
              className="flex items-center gap-2 px-3 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-colors border-2 border-accent/40 shadow-md" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaDatabase className="text-lg" />
              <span className="font-medium text-sm">AM Lab</span>
            </Link>
            <Link 
              href="https://www.rugglesbohannondesigns.com/" 
              className="flex items-center gap-2 px-3 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors border-2 border-secondary/40 shadow-md" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaPalette className="text-lg" />
              <span className="font-medium text-sm">Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 border-b border-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-medium uppercase mb-8 text-center text-foreground">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 text-muted">
              I am interested in the intersection of agentic AI, defense tech, and additive manufacturing. I aim to operate at the frontier of technology and manufacturing research - an arena long fueled by defense innovation and now supercharged by AI. I believe this intersection is redefining how we design and build nearly everything, and I'm excited to contribute to that revolution.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-muted">
              Over the past five years I founded a cloud‑based research platform that tracks additive‑manufacturing adoption within the military contracting sector. I have worked with technology companies, doubling factory throughput with custom 3‑D‑printed tooling. I have digitized legacy hardware for water‑treatment companies. I have delivered custom data pipelines for a leading generative‑design company, and was selected as a undergraduate invitee to OpenAI's 2024 Developer Day. I am currently serving as a DoD fellow supporting the Space Force at the SDA TAP Lab.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-muted">
              My toolkit spans Python, SQL, Machine Learning, N8n, Cursor, Scikit-learn, and modern AI/LLM frameworks for data engineering and RAG applications; Google Cloud and AWS for scalable deployments; Tableau, Plotly, and Excel for insight visualization; and eight years of CAD, DFAM, and generative‑design experience in Fusion 360. I'm equally comfortable coding, welding fixtures, or briefing on the impact of emerging tech.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              I'm a techno‑optimist who believes frontier technology should move fast - and ship. If you're building systems that demand both technical rigor and hands‑on manufacturing savvy, let's talk about how we can push the edge together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 border-b border-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-medium uppercase mb-8 text-center text-foreground">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted">© {new Date().getFullYear()} Ruggles Bohannon. All rights reserved.</p>
          <p className="mt-2 text-sm text-muted/70">Website connected to rugglesbohannon.com</p>
        </div>
      </footer>
    </main>
  )
} 