import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { SignIn } from '@/components/SignIn'
import { Hero } from '@/components/hero'
import { cookies } from 'next/dist/client/components/headers'
import { Profile } from '@/components/profile'

export default function Home() {
  const IsAuthenticate = cookies().has('token')
  return (
  <div className=" bg-zinc-900 text-zinc-200">
    <main className="grid min-h-screen grid-cols-2">
      
      {/* Left */}
      <div className="relative flex flex-col items-start overflow-hidden
      justify-between px-28 py-16 border-r border-white/10 pr-2">
  
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] 
         -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full">
        construída com 
            React, Next.js, TailwindCSS e TypeScript
        </div>
      
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>

        {/* SignIn */}
        {IsAuthenticate ? <Profile/> : <SignIn/>}

        {/* Text */}
        <Hero/>

        {/* Text footer */}
        <Copyright/>
      </div>

      {/* Right */}
      <EmptyMemories/>

    </main>
  </div>
  )
}