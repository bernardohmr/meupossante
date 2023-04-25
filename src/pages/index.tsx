import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import logoComplete from '../../public/images/logo-complete.svg'
import backgroundFerrari from '../../public/images/ferrari-background.png'
import arrow from '../../public/images/arrow.svg'
import startFullfilled from '../../public/images/star-fullfilled.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
      <div>
        <Image
          src={logoComplete}
          alt=""
        />
      </div>
      <div className='opacity-30'>
        <Image
          src={backgroundFerrari}
          alt=""
        />
      </div>
      <div>
        <div className=''>Últimas pesquisas</div>
        <div className=''>
          <div className='flex'>
            <Image src={arrow} alt=""/>
            <div className=''>Porshe Taycan</div>
            <Image src={startFullfilled} alt=""/>
          </div>
        </div>
      </div>
      <div className='text-justify text-red-800 font-bold'>
        <Link href={"/announce"}>Anunciar um veículo</Link>
      </div>
    </div>
  )
}
