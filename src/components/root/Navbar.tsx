import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar: React.FC = () => {
  return (
    <nav className={`${styles.starryBackground} p-4`}>
      <ul className="flex space-x-4 justify-center">
        <li className="text-white hover:text-gray-200">
          <Link href="/">홈으로 가기</Link>
        </li>
        <li className="text-white hover:text-gray-200">
          <Link href="/chord-practice">코드 연습</Link>
        </li>
        <li className="text-white hover:text-gray-200">
          <Link href="/scale-practice">스케일 연습</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
