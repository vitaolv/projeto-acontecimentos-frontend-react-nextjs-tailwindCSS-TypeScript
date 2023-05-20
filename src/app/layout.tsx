import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Reboto, Bai_Jamjuree as bai_jamjuree} from 'next/font/google'


const reboto = Reboto({ subsets: ['latin'], variable:'--font-reboto' })
const baiJamjuree = bai_jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-baiJamjuree'})

export const metadata = {
  title: 'Exploração espacial 🚀',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript.',
}
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${reboto.variable} ${baiJamjuree.variable} font-sans text-gray-100`}>{children}</body>
    </html>
  )
}
