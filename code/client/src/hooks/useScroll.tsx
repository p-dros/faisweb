import { useEffect, useRef, useState } from 'react'

export default function useScroll() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window

      if (scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }

      if (scrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else if (scrollY < lastScrollY.current) {
        setScrollDirection('up')
      }
      lastScrollY.current = scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    hasScrolled,
    scrollDirection,
  }
}
