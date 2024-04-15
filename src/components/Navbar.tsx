import {AlignJustify} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'
import {cn} from '@/lib/utils'
import {buttonVariants} from './ui/button'
import Link from 'next/link'

const Navbar = () => {
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
        <AlignJustify className="h-6 w-6 flex-shrink-0 text-primary" />
      </SheetTrigger>

      <SheetContent side="left" className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader></SheetHeader>

        <SheetFooter>
          <SheetTrigger asChild>
            <Link
              href="/sign-up"
              className={buttonVariants({
                className: 'w-full',
              })}
            >
              Sign Up
            </Link>
          </SheetTrigger>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default Navbar
