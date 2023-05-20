import { getUser } from "@/lib/auth"
import { User } from "lucide-react"
import Image from "next/image"

export function Profile () {
    const { name, avatarUrl } = getUser()
    return (
        <div className='flex items-center gap-4 text-left'>
            <Image src={avatarUrl} 
            width={40} 
            height={40} 
            alt="avatar" 
            className="w-10 h-10 rounded-full"/>

            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
                <User className="h-5 w-5 text-gray-500" />
            </div>
            <p className='text-sm leading-snug max-w-[140px]'>
                {name}
                <a href="" className="block text-red-400 hover:text-red-300">Sair da conta</a>
            </p>
       </div>
    )
}