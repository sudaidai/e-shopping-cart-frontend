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

        <div className="mb-12">
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold">學歷</p>
            <p className="text-xl font-bold text-red-700 ml-4">EDUCATION</p>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center pt-2">
              <div className="h-4 w-4 bg-gray-400 rounded-full my-2"></div>
              <div className="w-px h-12 bg-gray-400"></div>
              <div className="h-4 w-4 bg-gray-400 rounded-full my-2"></div>
            </div>
            <div className="ml-4 text-xl">
              <div className="mb-8">
                國立六角師範大學 視覺設計學系 學士學位 | 2016－2020
              </div>
              <div className="mb-6">國立六腳高級中學 美術班 | 2013－2016</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white py-12 mb-18">
          <div className="flex justify-center items-center border-b border-white mb-8">
            <p className="text-2xl font-bold">技能</p>
            <p className="text-xl font-bold ml-4">SKILLS</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-52 h-80 border-l border-gray-400 pl-6">
              <div className="mb-4">Adobe Photoshop</div>
              <div className="mb-4">Adobe Illustrator</div>
              <div className="mb-4">Adobe XD</div>
              <div className="mb-4">Adobe Indesign</div>
              <div className="mb-4">C4D</div>
              <div className="mb-4">Adobe Premiere</div>
              <div>語言：中文、英文</div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold">工作經驗</p>
            <p className="text-xl font-bold text-red-700 ml-4">WORK EXPERIENCE</p>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center pt-2">
              <div className="h-4 w-4 bg-gray-400 rounded-full my-2"></div>
              <div className="w-px h-12 bg-gray-400"></div>
              <div className="h-4 w-4 bg-gray-400 rounded-full my-2"></div>
            </div>
            <div className="ml-4 text-xl">
              <div className="mb-6">
                <div className="font-bold mb-2">
                  六角學院 視覺設計實習生 | 2019/07－2020/06
                </div>

                <div className="text-lg leading-7">
                  在六角學院長達一年的實習中，前期藉由公司課程掌握 HTML, CSS, Adobe XD，設計給學員使用的名片設計教材，並參與六角週年活動，設計各式周邊商品及活動網路宣傳圖。後期進入 UI 設計範疇，設計六角共筆部落格 - W3HexSchool、六角發案服務網介面設計、供給學員的教案- RWD官方網站設計，並設計各式網頁活動宣傳圖。
                </div>
              </div>
              <div className="mb-6">
                <div className="font-bold mb-2">獨立接案 Hao Jun 酒標設計 | 2019</div>
              </div>
              <div className="mb-6">
                <div className="font-bold mb-2">獨立接案 Exulans 酒標設計 | 2019</div>
              </div>
              <div className="mb-6">
                <div className="font-bold mb-2">
                  獨立接案 桃園平鎮市民健走活動提案 | 2019
                </div>
              </div>
              <div className="mb-6">
                <div className="font-bold mb-2">Simtree 興趣咖啡 工讀生 | 2018－2019</div>

                <div className="text-lg leading-7">
                  擔任外場及吧台服務生，學習咖啡相關知識。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 text-white py-12">
          <div className="flex justify-center items-center border-b border-white mb-8">
            <p className="text-2xl font-bold">聯絡方式</p>
            <p className="text-xl font-bold ml-4">CONTACT METHOD</p>
          </div>
          <div className="flex flex-col items-center text-xl">
            <div className="mb-4">Mail：xxxd@hexschool.com</div>
            <div className="mb-4">Phone：0910123456</div>
            <div className="mb-4">Kaohsiung, Taiwan</div>
            <div className="mb-4">作品連結：https://www.behance.net/xxxdddddd</div>

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
