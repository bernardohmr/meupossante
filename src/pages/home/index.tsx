import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'

import logoComplete from '@/../public/images/logo-complete.svg'
import backgroundFerrari from '@/../public/images/ferrari-background.png'
import SearchInput from '@/components/SearchInput'
import LastSearchItem from './components/LastSearchItem'

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
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/6 h-1/6'>
            <SearchInput
              onClick={() => Router.push("/cars")}
              placeholder='Pesquisar veículos em oferta'
            />
          </div>
        </div>
        <div className='grow'>
          <div className='text-gray-700 pt-8 pl-8 text-lg mb-4'>Últimas pesquisas</div>
          <div className='px-5 pb-5'>
            <LastSearchItem searchText='Porshe Taycan' isFavorited/>
            <LastSearchItem searchText='Lamborghini'/>
            <LastSearchItem searchText='Ferrari'/>
            <LastSearchItem searchText='Volvo'/>
          </div>
        </div>
        <div className='text-red-900 font-semibold text-center m-8 md:hidden'>
          <Link href={"/announce"}>Anunciar um veículo</Link>
        </div>
      </div>
    </div>
  )
}
