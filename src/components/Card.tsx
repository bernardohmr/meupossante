import Image, { StaticImageData } from 'next/image'
import Router from 'next/router'

import startFullfilled from '../../public/images/star-fullfilled.svg'
import Button from '@/components/Button'

interface IRequest {
  image: StaticImageData;
  redirect: string;
  title: string;
  description: string;
  value: string;
  year: string;
  kilometers: string;
  city: string;
  isFavorited?: boolean;
}

export default function Card({
  image,
  redirect,
  title,
  description,
  value,
  year,
  kilometers,
  city,
  isFavorited,
}: IRequest) {
  return (
    <div className='mb-6 lg:mb-12 flex shadow-[0_5px_5px_rgba(0,0,0,0.25)]' onClick={() => Router.push(redirect)}>
      <Image
        className='w-1/2'
        src={image}
        alt={title}
      />
      <div className='w-1/2'>
        <div className='text-neutral-950 font-sans flex justify-between h-full p-3 pt-2 sm:p-6 lg:p-10'>
          <div className='flex flex-col justify-between'>
            <div className=''>
              <p className='text-sm sm:text-xl lg:text-2xl font-semibold'>{title}</p>
              <p className='text-xs sm:text-lg lg:text-xl font-light'>{description}</p>
            </div>
            <div className=''>
              <span className='text-sm sm:text-xl lg:text-3xl italic'>{value}</span>
            </div>
            <div className=''>
              <span className='text-xs sm:text-lg lg:text-xl font-light tracking-tighter'>{city}</span>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className=''>
              <p className='text-xs sm:text-lg lg:text-xl font-light tracking-tighter float-right'>{year}</p>
              <p className='text-xs sm:text-lg lg:text-xl font-light tracking-tighter ml-4 clear-right float-right'>{kilometers}</p>
            </div>
            <div className=''>
              {isFavorited && <Image className='inline-block float-right sm:scale-150' src={startFullfilled} alt="" width={20} />}
            </div>
            <div className=''>
              <Button
                title="Contato"
                onClick={() => { }}
                className='sm:text-lg lg:text-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
