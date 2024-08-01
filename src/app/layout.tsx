import { Header } from '@/components'
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

        <main className="p-5">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
