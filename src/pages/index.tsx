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
      <div className='bg-white flex flex-col max-w-5xl min-h-screen mx-auto'>
        <div className='flex w-full items-center justify-center md:justify-between'>
          <div className='m-12'>
            <Image
              className='w-full'
              src={logoComplete}
              alt=""
            />
          </div>
          <div className='text-red-900 font-semibold text-center m-12 hidden md:block'>
            <Link href={"/announce"}>Anunciar um veículo</Link>
          </div>
        </div>
        <div className='relative w-full'>
          <Image
            className='opacity-30 w-full mx-auto object-cover max-h-72'
            src={backgroundFerrari}
            alt="Ferrari"
          />
          <div className='absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/6 h-1/6 max-h-12 bg-white rounded-md'>
            <svg
              className="w-6 h-6 mx-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              placeholder='Pesquisar veículos em oferta'
              className='bg-white w-full h-full rounded-md text-gray-700 focus:outline-none'
              title='search'>
            </input>
          </div>
        </div>
        <div className='grow'>
          <div className='text-gray-700 pt-8 pl-8 text-lg'>Últimas pesquisas</div>
          <div className='px-5 pb-5'>
            <div className='py-4 pl-4 border-b-[1px] border-b-zinc-400'>
              <div className='flex space-x-4'>
                <Image src={arrow} alt=""/>
                <p className='text-gray-700'>Porshe Taycan</p>
                <Image src={startFullfilled} alt="" width={20}/>
                <div className='h-1 bg-black'></div>
              </div>
            </div>
            <div className='py-4 pl-4 border-b-[1px] border-b-zinc-400'>
              <div className='flex space-x-4'>
                <Image src={arrow} alt=""/>
                <p className='text-gray-700'>Lamborghini</p>
                <div className='h-1 bg-black'></div>
              </div>
            </div>
            <div className='py-4 pl-4 border-b-[1px] border-b-zinc-400'>
              <div className='flex space-x-4'>
                <Image src={arrow} alt=""/>
                <p className='text-gray-700'>Ferrari</p>
                <div className='h-1 bg-black'></div>
              </div>
            </div>
            <div className='py-4 pl-4 border-b-[1px] border-b-zinc-400'>
              <div className='flex space-x-4'>
                <Image src={arrow} alt=""/>
                <p className='text-gray-700'>Volvo</p>
                <div className='h-1 bg-black'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-red-900 font-semibold text-center m-8 md:hidden'>
          <Link href={"/announce"}>Anunciar um veículo</Link>
        </div>
      </div>
    </div>
  )
}
