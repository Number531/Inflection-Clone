import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Inflection AI
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Enterprise
            </Link>
            <Link 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Company
            </Link>
            <Button>Contact Sales</Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}