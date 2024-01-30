// app/providers.tsx
'use client'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}) {
  return (
    // <ThemeProvider>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    // </ThemeProvider>
  )
}