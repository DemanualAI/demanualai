import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import About from '../components/About'
import Contact from '../components/Contact.tsx'
import Footer from '../components/Footer'




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

