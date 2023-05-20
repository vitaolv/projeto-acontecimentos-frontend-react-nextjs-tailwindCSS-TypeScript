import { User } from 'lucide-react'

export default function Home() {
  return (
  <div className=" bg-zinc-900 text-zinc-200">
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start overflow-hidden
      justify-between px-28 py-16 border-r border-white/10 pr-2">
  
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] 
         -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full">
        construída com 
            React, Next.js, TailwindCSS e TypeScript
        </div>

        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>

        <a href='' className='flex items-center gap-4 text-left'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className='text-sm leading-snug max-w-[140px] hover:text-gray-50 transition-colors'>
            <span className='underline'>Crie sua conta</span> e salve seus acontecimentos!
          </p>
        </a>

        <div className='space-y-2 max-w-[400px]'>
          <h1 className='text-5xl font-bold leading-tight text-gray-50'>
            Uma cápsula do tempo
          </h1>
          <hr />
          <p className='mt-1 text-lg leading-relaxed'>
            Colecione seus momentos marcantes do seu aprendizado 
            e compartilhe (se quiser) com o mundo!
          </p>

          <a href='' className='inline-block leading-none text-black font-bold uppercase rounded-full bg-green-500 px-5 py-3 font-alt text-sm hover:bg-green-600 transition-colors'>
             CADASTRAR LEMBRANÇA 
          </a>
        </div>

        <div className='space-y-5 text-gray-250 hover:text-gray-400 transition-colors'>
            <p>Desenvolvido por Victor Veleda com 💜</p>
        </div>


      </div>
      {/* Right */}
      <div className="flex flex-col p-16 bg-zinc-900 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
        <p className="w-[360px] text-center leading-relaxed">
          Opsss! Você ainda não possui nenhuma lembrança, começe a {' '}
          <a href="" className="underline hover:text-gray-50 transition-colors">criar agora</a>
          !
        </p>
        </div>
      </div>
    </main>
  </div>
  )
}