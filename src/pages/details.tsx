import Image from 'next/image'
import Router from 'next/router'

import { Inter } from 'next/font/google'

import logo from '../../public/images/logo.svg'
import taycanDetail from '../../public/images/taycan-detail-1.png'
import star from '../../public/images/star.svg'
import arrowRight from '../../public/images/arrow-right.svg'
import arrowLeft from '../../public/images/arrow-left.svg'

export default function Details() {
  return (
    <div className='bg-white h-screen'>
      <div className='p-4 flex items-center justify-between'>
        <Image
          className=''
          src={logo}
          alt=""
          onClick={() => Router.push("/")}
        />
        <div className='text-neutral-950 font-sans -ml-20'>
          <p className='font-semibold text-xl'>Porshe Taycan</p>
          <p className='font-light'>Turbo S</p>
        </div>
        <Image
          className='inline-block float-right'
          src={star}
          alt=""
        />
      </div>

      <div className='w-full relative'>
        <Image
          className=''
          alt="Taycan"
          src={taycanDetail}
        />
        <Image
          className='absolute top-1/2 -translate-y-1/2 scale-150 left-3'
          alt=""
          src={arrowLeft}
          onClick={() => {}}
        />
        <Image
          className='absolute top-1/2 -translate-y-1/2 scale-150 right-3'
          alt=""
          src={arrowRight}
          onClick={() => {}}
        />
      </div>

      <div>
        Lista
      </div>
    </div>
  )
}
