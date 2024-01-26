import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'RGPV Notes',
    template: '%s - RGPV Notes',
  },
  description: 'Notes for B.Tech students of RGPV University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <head>
      <meta name="google-site-verification" content="wMdJb0mvxm0BP9-Eieo7JNvLZpJHzkJKWrHY-uiNWpM" />
      <meta name="robots" content="all" />
      <link rel="sitemap" href="/sitemap-index.xml"></link>
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Analytics/>
        </Providers>
      </body>
    </html>
  )
}
