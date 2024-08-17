import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={`${styles.starryBackground} py-4 px-10`}>
      <ul className="flex space-x-8 ">
        <li className="text-white hover:text-gray-400 cursor-pointer">
          <Link href="/">홈</Link>
        </li>
        <li className="text-white hover:text-gray-400 cursor-pointer">
          <Link href="/chord-practice">코드 연습</Link>
        </li>
        <li className="text-white hover:text-gray-400 cursor-pointer">
          <Link href="/scale-practice">스케일 연습</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
