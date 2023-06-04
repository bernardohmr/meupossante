import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'

import { useState } from 'react'

import logoComplete from '@/../public/images/logo-complete.svg'
import backgroundFerrari from '@/../public/images/ferrari-background.png'
import SearchInput from '@/components/SearchInput'
import LastSearchItem from './components/LastSearchItem'

export default function Home() {
  const [search, setSearch] = useState("");

  const lastSearchs = [
    { searchText: "Porshe Taycan", isFavorited: true },
    { searchText: "Lamborghini", isFavorited: false },
    { searchText: "Ferrari", isFavorited: false },
    { searchText: "Volvo", isFavorited: false },
  ];

  function handleSearch() {
    Router.push(`/cars?search=${search}`);
  }

  return (
    <div className='bg-white'>
      <div className='bg-white flex flex-col max-w-5xl min-h-screen mx-auto'>
        <div className='flex w-full items-center justify-center md:justify-between'>
          <div className='m-12'>
            <Image
              className='w-full md:scale-125'
              src={logoComplete}
              alt=""
            />
          </div>
          <div className='text-red-900 font-semibold text-center text-xl m-12 hidden md:block'>
            <Link href={"/login"}>Anunciar um veículo</Link>
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
              onClick={handleSearch}
              placeholder='Pesquisar veículos em oferta'
              onChange={(event) => setSearch(event.target.value)}
              onSubmit={handleSearch}
            />
          </div>
        </div>
        <div className='grow'>
          <div className='text-gray-700 pt-8 pl-8 text-lg mb-4'>Últimas pesquisas</div>
          <div className='px-5 pb-5'>
            {lastSearchs.map(({ searchText, isFavorited }, index) => <LastSearchItem searchText={searchText} isFavorited={isFavorited} key={index} />)}
          </div>
        </div>
        <div className='text-red-900 font-semibold text-center m-8 md:hidden'>
          <Link href={"/login"}>Anunciar um veículo</Link>
        </div>
      </div>
    </div>
  )
}
