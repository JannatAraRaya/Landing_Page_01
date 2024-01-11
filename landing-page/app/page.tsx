import Image from 'next/image'
// import styles from './page.module.css'
import './styles/_common.scss'
import Hero from './pages/HeroSection'
import Companies from './pages/CompanySection'
import LawSection from './pages/LawSection'
import Footer from './pages/FooterSection'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Companies/>
      <LawSection/>
      <Footer/>
    </main>
  )
}
