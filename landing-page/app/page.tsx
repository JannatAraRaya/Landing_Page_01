import Image from 'next/image'
// import styles from './page.module.css'
import './styles/_common.scss'
import Hero from './pages/Hero'
import Companies from './pages/Companies'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Companies/>
    </main>
  )
}
