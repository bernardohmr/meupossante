import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'

import { Inter } from 'next/font/google'

import logo from '../../public/images/logo.svg'
import taycan from '../../public/images/taycan 1.png'
import arrow from '../../public/images/arrow.svg'
import startFullfilled from '../../public/images/star-fullfilled.svg'
import SearchInput from '@/components/SearchInput'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white h-screen'>
      <div className='p-4 flex items-end'>
        <Image
          className=''
          src={logo}
          alt=""
          onClick={() => Router.push("/")}
        />
        <div className='border-[1px] border-gray-400 h-8 rounded-[3px] grow mx-3 mb-2'>
          <SearchInput
            onClick={() => {}}
            value="Porshe taycan"
          />
        </div>
      </div>
      <div className='flex items-center'>
        <Image
          className='w-1/2'
          src={taycan}
          alt=""
        />
        <div className='w-1/2 min-h-full'>
          <div className='text-neutral-950 p-3 grid grid-cols-10 grid-rows-3'>
            <div className='col-span-7'>
              <p className='text-sm font-semibold'>Porshe Taycan</p>
              <p className='text-xs font-sans'>Turbo S</p>
            </div>
            <div className='col-span-3'>
              <p className='text-xs'>2021/2022</p>
              <p className='text-xs'>11.950 km</p>
            </div>
            <div className='col-span-10'>
              <span className='text-sm'>R$ 559.000,00</span>
              <Image className='inline-block' src={startFullfilled} alt="" width={20}/>
            </div>
            <div className='col-span-7'>
              <span className='text-sm'>São Paulo - SP</span>
            </div>
            <div className='col-span-3'>
              <Button
                onClick={() => {}}
                title='Contato'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
