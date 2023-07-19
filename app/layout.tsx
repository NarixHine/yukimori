import './globals.css'
import type { Metadata } from 'next'
import { Kiwi_Maru } from 'next/font/google'

const kiwi = Kiwi_Maru({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'ゆきもり',
  description: 'Misskey Haiku Bot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={kiwi.className}>{children}</body>
    </html>
  )
}
