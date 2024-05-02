import {AlignJustify, Search, ShoppingCart, UserRound} from 'lucide-react'
import {Button} from '../ui/button'
import Cart from '../Cart'
import Navbar from '../Navbar'

const Header = () => {
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
          <Button variant="ghost" size="icon">
            <UserRound
              aria-hidden
              className="h-6 w-6 flex-shrink-0 text-primary"
            />
          </Button>
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default Header
