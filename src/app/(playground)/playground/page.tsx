'use client'

import {buttonVariants} from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import '../../globals.css'

const PlaygroundRootPage = () => {
  return (
    <section className="w-full xl:max-w-[1200px] xl:mx-auto p-6 sm:p-9">
      <h1 className="text-primary text-xl md:text-2xl text-center font-black mb-4">
        Playground for practice tailwindcss
      </h1>
      <p className="text-secondary-foreground text-xs sm:text-base mb-6 md:text-center">
        Switch the triditional css to modern tailwindcss in the repository.
      </p>
      <Link
        href={
          'https://github.com/BenjaminChinChuang/HexSchool_Class1/tree/master'
        }
        className={buttonVariants({
          className: 'w-full h-14 mb-6',
          variant: 'outline',
        })}
        target="_blank"
      >
        Click to Go to Repo
      </Link>
      <Link
        href={'https://tailwindcss.com/docs/width'}
        className={buttonVariants({
          className: 'w-full h-14 mb-6',
          variant: 'outline',
        })}
        target="_blank"
      >
        Tailwind Css Official Website
      </Link>
      <Link
        href={'https://nerdcave.com/tailwind-cheat-sheet'}
        className={buttonVariants({
          className: 'w-full h-14 mb-16',
          variant: 'outline',
        })}
        target="_blank"
      >
        Tailwind Css cheat sheet
      </Link>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href={'/playground/bruce'}
          className={buttonVariants({
            className: 'w-full h-14',
          })}
        >
          Bruce Page
        </Link>
        <Link
          href={'/playground/sophia'}
          className={buttonVariants({
            className: 'w-full h-14',
          })}
        >
          Sophia Page
        </Link>
      </div>
    </section>
  )
}

export default PlaygroundRootPage
