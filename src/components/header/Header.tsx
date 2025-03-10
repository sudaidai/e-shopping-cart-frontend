'use client'

import {UserRound, Settings, LogOut, ShieldCheck} from 'lucide-react'
import {Button} from '../ui/button'
import Cart from '../Cart'
import Navbar from '../Navbar'
import {
  DropdownMenuShortcut,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {getJwtTokenHandler, removeJwtTokenHandler} from '@/lib/auth'
import {toast} from 'sonner'
import {useEffect, useState} from 'react'

const Header = () => {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const token = getJwtTokenHandler()
    setIsLogin(!token ? false : true)
  }, [])

  async function signInHandler() {
    router.push('/sign-in')
  }

  async function signOutHandler() {
    removeJwtTokenHandler()
    // TODO: call sign out api
    setTimeout(() => {
      toast('', {
        description: (
          <div className="flex items-center justify-start gap-2 text-green-400">
            <ShieldCheck />
            Welcome to E-Shopping.
          </div>
        ),
      })
    }, 800)
    // router.push('/sign-in')
  }

  return (
    <section className="w-full fixed z-50">
      {/* <div className="bg-secondary">
        <div className="bg-primary w-fit py-1 px-2 text-white font-black rounded-tr-xl rounded-bl-xl">
          E-shopping
        </div>
      </div> */}
      <div className="h-12 flex justify-between items-center border-b-2 bg-white">
        {/* <Button variant="ghost" size="icon">
          <AlignJustify className="h-6 w-6 flex-shrink-0 text-primary" />
        </Button> */}
        {/* <Navbar /> */}

        <div className="bg-secondary">
          <div className="bg-primary w-fit py-1 px-2 text-white font-black rounded-tr-xl rounded-bl-xl">
            E-shopping
          </div>
        </div>

        <h1 className="text-primary font-black hidden md:block md:text-lg">
          Find Something Special for Special One
        </h1>
        <div className="flex justify-between items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserRound
                  aria-hidden
                  className="h-6 w-6 flex-shrink-0 text-primary"
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <div className="flex items-center justify-start gap-2">
                  <UserRound
                    aria-hidden
                    className="h-6 w-6 flex-shrink-0 text-primary"
                  />
                  User Name
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                {/* <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>
                    <Settings
                      aria-hidden
                      className="h-5 w-5 flex-shrink-0 text-primary"
                    />
                  </DropdownMenuShortcut>
                </DropdownMenuItem> */}
                {!isLogin && (
                  <DropdownMenuItem onClick={signInHandler}>
                    Sign in
                    <DropdownMenuShortcut>
                      <LogOut
                        aria-hidden
                        className="h-5 w-5 flex-shrink-0 text-primary"
                      />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                )}

                {isLogin && (
                  <DropdownMenuItem onClick={signOutHandler}>
                    Log out
                    <DropdownMenuShortcut>
                      <LogOut
                        aria-hidden
                        className="h-5 w-5 flex-shrink-0 text-primary"
                      />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default Header
