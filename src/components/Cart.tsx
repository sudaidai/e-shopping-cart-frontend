'use client'

import {ShoppingCart, Squirrel} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import {Button, buttonVariants} from './ui/button'
import Link from 'next/link'
import {cn, formatPrice} from '@/lib/utils'
import {Separator} from './ui/separator'
import {ReactNode, useEffect, useState} from 'react'
import {getJwtTokenHandler} from '@/lib/auth'
import {useRouter} from 'next/navigation'

const Cart = () => {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const token = getJwtTokenHandler()
    setIsLogin(!token ? false : true)
  }, [])

  const itemCount = 0
  const fee = 12

  function cartContent(): ReactNode {
    return (
      <>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">cart items</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
            </div>

            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  href="/cart"
                  className={buttonVariants({
                    className: 'w-full',
                  })}
                >
                  Continue to Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-28 w-28 text-muted-foreground"
            >
              <div className="rounded-full h-28 w-28 bg-secondary flex items-center justify-center">
                <Squirrel className="h-20 w-20 text-primary" />
              </div>
            </div>
            <div className="text-base md:text-xl font-semibold">
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href="/product"
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground',
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </>
    )
  }

  function handleDirectToLogin() {
    router.push('/sign-in')
  }

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({
            variant: 'ghost',
            size: 'icon',
            className: 'group',
          })
        )}
      >
        <div className="relative mr-2">
          <ShoppingCart
            aria-hidden
            className="h-6 w-6 flex-shrink-0 text-primary"
          />
          {isLogin && (
            <div className="absolute rounded-full w-4 h-4 text-center p-1 -top-1 -right-2  bg-primary flex items-center justify-center">
              <span className="text-xs font-black text-white">{itemCount}</span>
            </div>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="text-primary font-black flex items-center gap-2">
            <div className="bg-primary w-fit py-1 px-2 text-white font-normal md:font-black text-sm md:text-base rounded-tr-xl rounded-bl-xl text-nowrap">
              E-shopping
            </div>
            <div className="flex w-full justify-between items-center">
              <ShoppingCart
                aria-hidden
                className="h-6 md:h-8 w-6 md:w-8 flex-shrink-0 text-primary"
              />

              {isLogin && (
                <span className="self-end text-base">Total : {itemCount}</span>
              )}
            </div>
          </SheetTitle>
        </SheetHeader>

        {isLogin ? (
          cartContent()
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1 gap-2">
            <div
              aria-hidden="true"
              className="relative mb-4 h-28 w-28 text-muted-foreground"
            >
              <div className="rounded-full h-28 w-28 bg-secondary flex items-center justify-center">
                <Squirrel className="h-20 w-20 text-primary" />
              </div>
            </div>
            <div className="text-base md:text-xl font-semibold">
              You need to login.
            </div>
            <Button
              className={buttonVariants({
                className: 'w-60 h-12',
              })}
              onClick={handleDirectToLogin}
            >
              Go Sign in
            </Button>
          </div>
        )}

        {/* {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              cart items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
            </div>

            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  href="/cart"
                  className={buttonVariants({
                    className: 'w-full',
                  })}
                >
                  Continue to Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-28 w-28 text-muted-foreground"
            >
              <div className="rounded-full h-28 w-28 bg-secondary flex items-center justify-center">
                <Squirrel className="h-20 w-20 text-primary" />
              </div>
            </div>
            <div className="text-base md:text-xl font-semibold">
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground',
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )} */}

        {isLogin && (
          <SheetFooter>
            <SheetTrigger asChild>
              <Link
                href="/cart"
                className={buttonVariants({
                  className: 'w-full',
                })}
              >
                Continue to Checkout
              </Link>
            </SheetTrigger>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
