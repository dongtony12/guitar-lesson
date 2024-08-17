import Image from 'next/image'
import { Navbar } from '..'

const Header = () => {
  return (
    <header className="w-full">
      <div className="relative w-full h-60">
        <Image
          src="/guitar-cover.jpg"
          alt="Guitar Cover"
          object-fit="cover"
          fill={true}
          className="w-full h-60 object-cover"
        />
      </div>
      <Navbar />
    </header>
  )
}

export default Header
