import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Home Page - RGPV latest grading CBCS CBGS AICTE scheme PDF downloadable notes all unit free superfast server.Computer Science Mechanical Civil Information Technology Electronic - www.rgpvnotes.in',
    template: '%s - RGPV Notes',
  },
  description: 'RGPV latest grading CBCS CBGS AICTE scheme PDF downloadable notes all unit free superfast server.Computer Science Mechanical Civil Information Technology Electronic',
  author: "Anurag Mishra",
  keywords: "RGPV Notes, RGPV Notes in pdf, RGPV Notes in docx, RGPV Notes in google docs, RGPV Notes in word, RGPV Notes in pdf free download, RGPV Notes in pdf download, RGPV Notes in pdf format, RGPV Notes in pdf for mechanical, RGPV Notes in pdf for civil, RGPV Notes in pdf for computer science, RGPV Notes in pdf for electronics and communication, RGPV Notes in pdf for electrical, RGPV Notes in pdf for information technology, RGPV Notes in pdf for chemical, RGPV Notes in pdf for automobile, RGPV Notes in pdf for electrical and electronics, RGPV Notes in pdf for civil engineering, RGPV Notes in pdf for mechanical engineering, RGPV Notes in pdf for computer science engineering, RGPV Notes in pdf for electronics and communication engineering, RGPV Notes in pdf for information technology engineering, RGPV Notes in pdf for chemical engineering, RGPV Notes in pdf for automobile engineering, RGPV Notes in pdf for electrical and electronics engineering, RGPV, latest notes, grading, CBCS, CBGS, AICTE, PDF notes, Computer Science, Mechanical, Civil, Information Technology, Electronic",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <head>
      <meta name="google-site-verification" content="KwNwTI_eXS7WUtYrJdF6qCUMT_lRdu2cbFCGsOTyOww" />
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
