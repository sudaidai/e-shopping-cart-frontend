import {Twitter, Facebook, Instagram} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary h-[180px] flex flex-col items-center">
      <div className="mx-auto flex items-center gap-6 mt-8 mb-4">
        <Facebook
          size={32}
          absoluteStrokeWidth={true}
          color="white"
          className="cursor-pointer hover:scale-125"
        />
        <Instagram
          size={32}
          absoluteStrokeWidth={true}
          color="white"
          className="cursor-pointer hover:scale-125"
        />
        <Twitter
          size={32}
          absoluteStrokeWidth={true}
          color="white"
          className="cursor-pointer hover:scale-125"
        />
      </div>
      {/* <div className="text-white font-normal text-xs mb-2">
        E-shopping國際企業股份有限公司 ｜ 統一編號 59167670
      </div> */}
      <div className="text-white font-normal text-xs mt-2">
        E-SHOPPING INTERNATIONAL ENTERPRISE CORP. 2025
      </div>
    </footer>
  )
}

export default Footer
