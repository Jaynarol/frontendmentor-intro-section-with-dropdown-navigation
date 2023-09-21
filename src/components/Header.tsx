import { RxHamburgerMenu } from 'react-icons/rx'
import TopMenu from '@/components/TopMenu'

const Header = () => (
  <header className="drawer-content flex items-center justify-between p-5 md:mx-5">
    <nav className="flex grow items-center gap-4">
      <a href="./">
        <picture>
          <img src="./images/logo.svg" alt="logo" className="h-fit" />
        </picture>
      </a>
      <TopMenu />
    </nav>
    <label htmlFor="my-drawer" className="drawer-button md:hidden">
      <RxHamburgerMenu className="-mt-1 h-6 w-10 duration-150 hover:scale-110 hover:cursor-pointer " />
    </label>
    <div className="hidden space-x-4 text-xs text-secondary md:flex">
      <button type="button" className="h-fit rounded-xl px-5 py-2 hover:text-primary">Login</button>
      <button type="button" className="h-fit rounded-xl border-2 border-secondary px-5 py-2 hover:border-primary hover:text-primary">Register</button>
    </div>
  </header>
)

export default Header
