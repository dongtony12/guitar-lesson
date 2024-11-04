'use client'

import { useEffect, useRef } from 'react'

const ShootingStars = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createShootingStar = () => {
      if (!containerRef.current) return

      const star = document.createElement('span')
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.className = 'shooting-star'
      containerRef.current.appendChild(star)

      setTimeout(() => {
        if (star && star.parentNode) {
          star.parentNode.removeChild(star)
        }
      }, 3000)
    }

    const interval = setInterval(createShootingStar, 4000)

    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />
}

export default ShootingStars
