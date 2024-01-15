// import styles from './page.module.css'
import './styles/_common.scss'
import Companies from './pages/CompanySection'
import LawSection from './pages/LawSection'
import Footer from './pages/FooterSection'
import NumberSection from './pages/NumberSection'
import Help from './components/HelpSection'
import HeaderSection from './pages/HeaderSection'
import Hero from './pages/HeaderSection'
import OffenedSection from './pages/OffenedSection'
import TestimonialSection from './pages/TestimonialSection'
import DownloadSection from './pages/DownloadSection'

export default function Home() {
  return (
    <main >
      <HeaderSection/>    

      <Companies/>
      <NumberSection/>
      <Help/>
      <LawSection/> 
      <OffenedSection/>
      <TestimonialSection/>
      <DownloadSection/>
      <Footer/>
    </main>
  )
}
