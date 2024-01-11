import Navbar from "@/app/components/Navbar";
import './index.scss'
import HeroSectionBody from "@/app/components/Hero-Section-body";

export default function Hero() {
    return (
      <>
      <div className="header">
        <Navbar/>
        <HeroSectionBody/>
      </div>
      </>
    )
  }