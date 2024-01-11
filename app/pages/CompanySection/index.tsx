import ComapanyText from '@/app/components/CompanySectionText'
import './index.scss'
import CompanyLogo from '@/app/components/CompanyLogo'

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