import { RxCross1 } from 'react-icons/rx'
import DrawerMenu from './DrawerMenu'

const Drawer = () => (
  <div className="drawer-side z-50  text-secondary">
    <label htmlFor="my-drawer" className="drawer-overlay" />
    <nav className="menu min-h-full w-60 space-y-2 bg-base-100 p-4 font-medium">
      <div className="self-end">
        <label htmlFor="my-drawer" className="drawer-button">
          <RxCross1 className="h-8 w-8 text-secondary duration-150 hover:scale-110 hover:cursor-pointer hover:text-primary" />
        </label>
      </div>
      <DrawerMenu />
      <button type="button" className="mt-5 w-full rounded-xl py-2 duration-150 active:bg-accent-focus">Login</button>
      <button type="button" className="w-full rounded-xl border-2 border-secondary py-2 duration-150 active:bg-accent-focus">Register</button>
    </nav>
  </div>
)

export default Drawer
