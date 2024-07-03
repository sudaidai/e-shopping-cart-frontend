'use client'
import Image from 'next/image'

const BrucePage = () => {
  return (
    <>
      <div className="mx-4 max-w-screen-2xl justify-between">
        {/* Container with maximum width of 2XL screens and minimum width of 375px */}
        <header className="header flex flex-col pb-16 relative">
          {/* Header element using flexbox, arranged in a column, with padding-bottom of 16, and positioned relatively */}
          <nav className="header-navigation flex items-center justify-between bg-[#AA0601] py-6 relative z-10 min-h-[108px] px-12">
            {/* Navigation bar using flexbox, items centered, space between items, background color #AA0601,
                 padding-y of 6, positioned relatively, z-index of 10, minimum height of 108px, and padding-x of 12 */}
            <a href="./index.html" className="btnToggle absolute left-[4.58%] hidden">
              {/* Anchor tag positioned absolutely, 4.58% from the left, and hidden */}
              <Image
                src={`/demo/btn_toggle_24px.svg`}
                alt="btn toggle"
                width={24}
                height={24}
                className="w-6 h-6 lg:w-10 lg:h-10"
                />
            </a>
            <div className="header-logo">
              <a href="#">
                <Image
                  src={`/demo/logo.png`}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="w-6 h-6 lg:w-10 lg:h-10"
                />
              </a>
            </div>
            <ul className="header-navigation-container flex items-center justify-end w-full">
              {/* Unordered list using flexbox, items centered, space at the end, and full width */}
              <li className="ml-auto">
                <a href="#" className="text-lg text-white">系列鏡框</a>
              </li>
              {/* List item with margin-left of 16, anchor tag with large text size and white text color */}
              <li className="ml-auto">
                <a href="#" className="text-lg text-white">門市據點</a>
              </li>
              <li className="ml-auto">
                <a href="#" className="text-lg text-white">部落格</a>
              </li>
              <li className="ml-auto">
                <a href="./question.html" className="text-lg text-white">常見問題</a>
              </li>
            </ul>
          </nav>

          <div className="header-container flex flex-col items-end justify-center pr-[9.75%] relative h-[840px]">
            {/* Container using flexbox, arranged in a column, items aligned at the end, centered, padding-right of 18.75%, 
                 positioned relatively, and fixed height of 840px */}
            <Image
              src="/demo/header_bg.png"
              alt="Header Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0"
            />
            {/* Image filling the container, covering it, with quality 100, and z-index 0 */}
            <div className="z-10 text-right">
              {/* Div with z-index 10 to place it above the image */}
              <h2 className="header-subTitle text-[#650300] text-[2.25rem] leading-[3.125rem]">
                Promise-Desert 2020 早春系列
              </h2>
              {/* Subtitle with color #650300, text size of 2.25rem, and line height of 3.125rem */}
              <h1 className="header-mainTitle text-[#650300] text-[4rem] leading-[5.625rem] font-bold">
                看得清，才能看得遠
              </h1>
              {/* Main title with color #650300, text size of 4rem, line height of 5.625rem, and bold font */}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default BrucePage;
