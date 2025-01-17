'use client'

import { Button } from '@cartridge/ui-next'
import { useTelegramAccount } from '@/app/context/TelegramAccountProvider'

export function TelegramConnectWallet({
  children,
}: {
  children: React.ReactNode
}) {
  const { openConnectionPage } = useTelegramAccount()

  const handleConnect = () => {
    console.log('connecting')
    openConnectionPage()
  }

  return <Button onClick={handleConnect}>{children}</Button>
}
