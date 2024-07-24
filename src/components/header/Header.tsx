'use client'

import {UserRound, Settings, LogOut} from 'lucide-react'
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

const Header = () => {
  const router = useRouter()

  async function signInHandler() {
    router.push('/sign-in')
  }

  async function signOutHandler() {
    router.push('/sign-in')
  }

  return (
    <section className="w-full fixed z-50">
      <div className="bg-secondary">
        <div className="bg-primary w-fit py-1 px-2 text-white font-black rounded-tr-xl rounded-bl-xl">
          E-shopping
        </div>
      </div>
      <div className="h-12 flex justify-between items-center border-b-2 bg-white">
        {/* <Button variant="ghost" size="icon">
          <AlignJustify className="h-6 w-6 flex-shrink-0 text-primary" />
        </Button> */}
        <Navbar />
        <h1 className="text-primary font-black text-lg">E-Shopping</h1>
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
                <DropdownMenuItem onClick={signInHandler}>
                  Sign in
                  <DropdownMenuShortcut>
                    <LogOut
                      aria-hidden
                      className="h-5 w-5 flex-shrink-0 text-primary"
                    />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOutHandler}>
                  Log out
                  <DropdownMenuShortcut>
                    <LogOut
                      aria-hidden
                      className="h-5 w-5 flex-shrink-0 text-primary"
                    />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
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
