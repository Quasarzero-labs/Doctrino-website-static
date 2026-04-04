import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import Coverage from '@/components/Coverage'
import ForWho from '@/components/ForWho'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Coverage />
      <ForWho />
      <CTA />
      <Footer />
    </main>
  )
}
