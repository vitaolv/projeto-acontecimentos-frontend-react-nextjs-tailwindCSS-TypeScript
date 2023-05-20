export function Hero () {
    return (
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
    )
}