import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'

const Home = () => (
  <div className="drawer drawer-end flex min-h-screen flex-col">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <Header />
    <Drawer />
    <Main />
    <Footer />
  </div>
)

export default Home
