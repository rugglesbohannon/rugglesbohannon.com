import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaPalette } from 'react-icons/fa'
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
              <div className="flex space-x-6 mb-2">
                <Link href="https://www.linkedin.com/in/yourlinkedin" className="text-3xl text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </Link>
                <Link href="https://github.com/yourgithub" className="text-3xl text-foreground hover:text-muted transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
                <Link href="https://yourartgallery.com" className="text-3xl text-secondary hover:text-secondary/80 transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaPalette />
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
              Hello! I'm Ruggles Bohannon. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla facilisi. Sed eget metus vel nisl tincidunt efficitur. 
              Proin euismod, nunc eget luctus blandit, libero velit fermentum risus, 
              eu posuere magna nunc vel mi.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              When I'm not working, you can find me creating art, exploring new technologies, 
              or enjoying the outdoors. Feel free to connect with me through the social links above 
              or using the contact information below.
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