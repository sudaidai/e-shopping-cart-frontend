'use client'
import Image from 'next/image'

const BrucePage = () => {
  return (
    <>
      <div className="wrap mx-auto max-w-screen-2xl min-w-[375px]">
        <header className="header flex flex-col pb-16 relative">
          <nav className="header-navigation flex items-center justify-between bg-[#AA0601] py-6 px-[4.58%] relative z-10 min-h-[108px]">
            <a href="./index.html" className="btnToggle absolute left-[4.58%] hidden">
              <Image
                src={`/demo/btn_toggle_24px.svg`}
                alt="btn toggle"
                width={24}
                height={24}
              />
            </a>
            <div className="header-logo">
              <a href="#">
                <Image
                  src={`/demo/logo.png`}
                  alt="Logo"
                  width={120}
                  height={40}
                />
              </a>
            </div>
            <ul className="header-navigation-container flex items-center justify-end w-full">
              <li className="ml-16"><a href="#" className="text-lg text-white">系列鏡框</a></li>
              <li className="ml-16"><a href="#" className="text-lg text-white">門市據點</a></li>
              <li className="ml-16"><a href="#" className="text-lg text-white">部落格</a></li>
              <li className="ml-16"><a href="./question.html" className="text-lg text-white">常見問題</a></li>
            </ul>
          </nav>

          <div className="header-container flex flex-col items-end justify-center pr-[18.75%] relative h-[840px]">
            <Image
              src="/demo/header_bg.png"
              alt="Header Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0"
            />
            <div className="z-10">
              <h2 className="header-subTitle text-[#650300] text-[2.25rem] leading-[3.125rem]">Promise-Desert 2020 早春系列</h2>
              <h1 className="header-mainTitle text-[#650300] text-[4rem] leading-[5.625rem] font-bold">看得清，才能看得遠</h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default BrucePage;
