'use client'
import Image from 'next/image'

const BrucePage = () => {
  return (
    <>
      <div className="ml-44 w-[1920px] h-[2646px] bg-transparent z-[100]">
        <div className="h-[252px] border-b-2 border-black bg-white box-border mb-12">
          <div className="leading-none w-[288px] h-0 text-black text-[80px] pt-[48px] pb-6">SpongeBob SquarePants</div>
        </div>

        <Image
          width={300}
          height={300}
          src={`/square_pants/full_rounded_image.png`}
          alt="product images"
        />

        <div className="mb-12 mt-12">
          <div className="flex items-center mb-4">
            <p className="text-4xl font-bold">個人資料</p>
            <p className="text-2xl font-bold text-red-700 ml-4">PROFILE</p>
          </div>
          <div className="h-[0.5px] border-b-2 border-black bg-white box-border mb-3"></div>
          <div className="flex">
            <div className="flex flex-col items-center pt-2">
              <div className="h-4 w-4 bg-gray-400 rounded-full my-2"></div>
            </div>
            <div className="ml-4 text-xl">
              <div className="mb-6">
                海綿寶寶 SpongeBob SquarePants
                <br />
                1999-
                <br />
                遊民／自High／廚師
              </div>
              <div className="mb-6">
                在蟹堡王餐廳努力奮鬥／當個海綿
                <br />
                成為獨立的海綿，內容涵蓋：
                <br />
                良好の吸水能力、蓄水能力、躺平
              </div>
            </div>
          </div>
        </div>

      </div>

      <h1 className="text-2xl font-semibold tracking-tight text-primary">
        Create an account
      </h1>
      <h1>Bruce Playground</h1>
      <p>Do something insteresting ...</p>

      <h1>Hello World!</h1>
    </>
  )
}

export default BrucePage
