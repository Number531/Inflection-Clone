import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}