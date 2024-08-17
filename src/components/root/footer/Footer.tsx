import Link from 'next/link'

const Footer = () => {
  return (
    <section className="flex w-full justify-center items-center space-x-4 h-20 border border-[#35708f] bg-[#35708f]">
      <p className="text-main-300">Email : dongtony1@gmail.com</p>
      <Link
        href="https://www.instagram.com/dongtony0523"
        target="_blank"
        rel="noopener noreferrer"
        className="text-main-300 hover:text-main-400 w-fit"
      >
        Instagram
      </Link>
    </section>
  )
}

export default Footer
