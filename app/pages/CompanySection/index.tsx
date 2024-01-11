import ComapanyText from '@/app/components/Company-Section-Text'
import './index.scss'
import CompanyLogo from '@/app/components/Company-Logo'

export default function Companies() {
    return (
      <>
      <div className="main-div">
        <ComapanyText/>
        <CompanyLogo/>
      </div>
      </>
    )
  }