import Image from 'next/image'
import styles from './page.module.css'
import About from './pages/About'
import Hero from './pages/Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
   <About/>
    </main>
  )
}
