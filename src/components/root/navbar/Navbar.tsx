import Link from 'next/link'
import styles from './NavBar.module.css'
import ShootingStars from './ShootingStars'

const NavBar = () => {
  return (
    <nav className={`${styles.starryBackground} py-4 px-10 relative`}>
      <ShootingStars />
      <ul className="flex space-x-8 relative z-10">
        <li className="text-white hover:text-blue-200 transition-colors duration-300">
          <Link href="/">홈</Link>
        </li>
        <li className="text-white hover:text-blue-200 transition-colors duration-300">
          <Link href="/chord-practice">코드 연습</Link>
        </li>
        <li className="text-white hover:text-blue-200 transition-colors duration-300">
          <Link href="/scale-practice">스케일 연습</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
