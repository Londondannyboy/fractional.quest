'use client'

import Link from 'next/link'
import { UserButton, useUser } from '@stackframe/stack'
import { Button } from './Button'

export function AuthButtons({ scrolled }: { scrolled: boolean }) {
  const user = useUser()

  if (user) {
    return <UserButton />
  }

  return (
    <Link href="/handler/sign-in">
      <Button
        variant="ghost"
        size="sm"
        className={!scrolled ? '!text-white hover:bg-white/20' : ''}
      >
        Sign In
      </Button>
    </Link>
  )
}
