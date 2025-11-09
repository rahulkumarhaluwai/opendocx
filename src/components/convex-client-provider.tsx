'use client'

import { ReactNode } from 'react'
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import {ClerkProvider, SignIn, useAuth } from '@clerk/nextjs'
import { FullScreenLoader } from './fullscreen-loader'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <Unauthenticated>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <SignIn routing='hash'/>
        </div>
        </Unauthenticated>
        <Authenticated>
      {children}
      </Authenticated>
      <AuthLoading>
        <FullScreenLoader label='Auth Loading...'/>
      </AuthLoading>
    </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}