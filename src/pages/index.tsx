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
    <div className='bg-white flex content-center flex-col items-center min-h-full'>
      <div className='my-14'>
        <Image
          src={logoComplete}
          alt=""
        />
      </div>
      <div className='relative min-w-full'>
        <Image
          className='opacity-30 max-w-lg'
          src={backgroundFerrari}
          alt="Ferrari"
        />
        <div className='absolute top-[44%] left-[17%] w-[68.46%] h-1/6 max-h-9 '>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            placeholder='Pesquisar veículos em oferta'
            className='bg-white w-full h-full rounded-sm'
            title='search'>
          </input>
        </div>
      </div>
      <div className='bg-red-600 min-w-full min-h-[35vh]'>
        <div className='text-gray-700 mx-8 my-6 text-lg'>Últimas pesquisas</div>
        <div className='mx-8'>
          <div className='flex space-x-6'>
            <Image src={arrow} alt=""/>
            <p className='text-gray-700'>Porshe Taycan</p>
            <Image src={startFullfilled} alt="" width={20}/>
            <div className='h-1 bg-black'></div>
          </div>
        </div>
      </div>
      <div className='text-red-900 font-semibold text-center m-8'>
        <Link href={"/announce"}>Anunciar um veículo</Link>
      </div>
    </div>
  )
}
