import Navbar from "@/app/components/Navbar";
import './index.scss'
import HeroSectionBody from "@/app/components/HeroSectionbody";

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