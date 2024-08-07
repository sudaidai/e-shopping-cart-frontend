'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import {Button, buttonVariants} from '@/components/ui/button'
import {fetchFilms, fetchHello} from '@/graphql/test/test.services'
import {cn} from '@/lib/utils'
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter()

  async function getFilms() {
    try {
      const res = await fetchHello()
      console.log('data : ', res)
    } catch (error) {
      console.log('error : ', error)
    }
  }

  function directToHProductPageHandler() {
    router.push('/product')
  }

  return (
    <>
      {/* <div className="flex justify-center my-6">
        <Link
          href={'/playground'}
          className={buttonVariants({
            className: 'w-60 h-12',
          })}
        >
          Go to Playground
        </Link>
      </div> */}

      <div className="flex justify-center my-6">
        <Button
          className={buttonVariants({
            className: 'w-60 h-12',
          })}
          onClick={getFilms}
        >
          Get GraphQL Api Data
        </Button>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="max-w-[990px] w-full mx-auto lg:mt-9"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="h-[240px] xxs:h-[360px] sm:h-[520px]">
          {Array.from({length: 3}).map((_, index: number) => (
            <CarouselItem className="relative" key={index}>
              <div className="w-full">
                <Image
                  src={`/carousel/product-${index + 1}.jpg`}
                  alt="product images"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-8">
        <div className="text-primary font-black text-lg text-center mb-3">
          Product Information
        </div>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-[360px] sm:w-[calc(100%_-_80px)] max-w-[990px] mx-auto"
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //   }),
          // ]}
        >
          <CarouselContent className="">
            {Array.from({length: 6}).map((_, index: number) => (
              <CarouselItem
                className="relative w-[360px] h-[360px] sm:h-[215px] sm:w-[215px] lg:h-[354px] lg:w-[354px] md:basis-1/3 cursor-pointer"
                key={index}
                onClick={directToHProductPageHandler}
              >
                <div className="w-full flex justify-center">
                  <Image
                    src={`/product/${index + 1}.jpg`}
                    alt="product images"
                    className="w-[354px] h-[354px] sm:w-[215px] sm:h-[215px] lg:w-[354px] lg:h-[354px]"
                    width={354}
                    height={354}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:-left-8 lg:-left-10" />
          <CarouselNext className="sm:-right-8 lg:-right-10" />
        </Carousel>
      </div>
    </>
  )
}

