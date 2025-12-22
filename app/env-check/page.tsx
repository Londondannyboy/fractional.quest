'use client'

import { useEffect, useState } from 'react'

export default function EnvCheckPage() {
  const [envVars, setEnvVars] = useState<any>({})

  useEffect(() => {
    setEnvVars({
      NEXT_PUBLIC_STACK_PROJECT_ID: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
      NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
      NEXT_PUBLIC_HUME_API_KEY: process.env.NEXT_PUBLIC_HUME_API_KEY,
      NEXT_PUBLIC_HUME_CONFIG_ID: process.env.NEXT_PUBLIC_HUME_CONFIG_ID,
    })
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Check</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(envVars, null, 2)}
      </pre>
    </div>
  )
}
