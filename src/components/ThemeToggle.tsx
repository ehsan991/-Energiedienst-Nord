'use client'

import { Button } from '@heroui/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Button isIconOnly variant="ghost" className="icon-button" aria-label="Theme" />
  }

  const dark = resolvedTheme === 'dark'

  return (
    <Button
      isIconOnly
      variant="ghost"
      className="icon-button"
      onPress={() => setTheme(dark ? 'light' : 'dark')}
      aria-label="Toggle color theme"
    >
      {dark ? <Sun size={18} strokeWidth={1.6} /> : <Moon size={18} strokeWidth={1.6} />}
    </Button>
  )
}
