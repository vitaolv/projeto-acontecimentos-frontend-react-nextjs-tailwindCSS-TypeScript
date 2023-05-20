export function EmptyMemories () {
    return (
        <div className="flex flex-col p-16 bg-zinc-900 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
        <p className="w-[360px] text-center leading-relaxed">
          Opsss! Você ainda não possui nenhuma lembrança, começe a {' '}
          <a href="" className="underline hover:text-gray-50 transition-colors">criar agora</a>
          !
        </p>
        </div>
      </div>
    )
}