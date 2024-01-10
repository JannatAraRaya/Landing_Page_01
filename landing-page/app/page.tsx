import Image from 'next/image'
// import styles from './page.module.css'
import './styles/_common.scss'
import Hero from './pages/Hero'
import Companies from './pages/Companies'
import LawSection from './pages/Law_Section'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Companies/>
      <LawSection/>
    </main>
  )
}
