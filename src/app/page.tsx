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
          <div className="flex flex-col md:flex-row items-center gap-10">
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
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="https://www.linkedin.com/in/ruggles-bohannon-a2775717b/" 
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors border border-primary/30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-medium">LinkedIn</span>
                </Link>
                <Link 
                  href="https://github.com/rugglesbohannon" 
                  className="flex items-center gap-2 px-4 py-2 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-lg transition-colors border border-foreground/30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium">GitHub</span>
                </Link>
                <Link 
                  href="https://www.openamlab.com/" 
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors border border-accent/30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaDatabase className="text-xl" />
                  <span className="font-medium">AM Lab</span>
                </Link>
                <Link 
                  href="https://www.rugglesbohannondesigns.com/" 
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors border border-secondary/30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaPalette className="text-xl" />
                  <span className="font-medium">Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 border-b border-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-medium uppercase mb-8 text-center text-foreground">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 text-muted">
              I'm excited about the possibilities of using data science and artificial intelligence (AI) to totally transform manufacturing—making it smarter, more sustainable, and accessible to everyone. As a techno-optimist, I believe technology, especially additive manufacturing (AM), can solve real-world problems by decentralizing production, reducing waste, and sparking rapid innovation. Over the last few years, I've dived deep into building practical tools and frameworks that bring AI directly into manufacturing processes, making them not just efficient but genuinely intelligent.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              To help drive this vision, I created AM LAB, a cloud-based platform that tracks and analyzes the latest trends and innovations in additive manufacturing. It uses cutting-edge analytics, synthetic data, and AI-driven insights to empower people in the industry to make smarter, faster decisions. Outside of tech, I keep myself inspired and balanced by surfing, running, fly fishing, painting, and playing guitar—always staying curious and working hard.
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