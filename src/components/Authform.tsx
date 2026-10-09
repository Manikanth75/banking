import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Authform = ({type}: {type: string}) => {
  return (
    <section className="auth-form"> 
    <header className="flex flex-col gap-5">
    </header>
    <Link href= "/"
        className=" 
         cursor-pointer
         flex-items-center gap-1 px-4
        ">
          <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="Horizon logo"
           
          />
          <h1 className=" text-24 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
      


    </section>
  )
}

export default Authform