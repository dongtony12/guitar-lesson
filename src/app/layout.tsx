import { Footer, Header } from '@/components'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import './globals.css'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guitar String Training',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />

        <main className="px-8 md:px-20 lg:px-32 xl:px-48 py-8 text-center h-screen overflow-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
