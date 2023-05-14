import Image from 'next/image'
import Router from 'next/router'

import startFullfilled from '../../public/images/star-fullfilled.svg'
import Button from '@/components/Button'

interface IRequest {
  image: any;
  redirect: string;
  title: string;
  description: string;
  value: string;
  year: string;
  kilometers: number;
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
    <div className='mb-6 flex items-center shadow-[0_5px_5px_rgba(0,0,0,0.25)]' onClick={() => Router.push(redirect)}>
      <Image
        className='w-1/2'
        src={image}
        alt={title}
      />
      <div className='w-1/2 min-h-[156px]'>
        <div className=' text-neutral-950 grid grid-cols-10 grid-rows-3 h-full'>
          <div className='col-span-7'>
            <p className='text-sm font-semibold'>{title}</p>
            <p className='text-xs font-sans'>{description}</p>
          </div>
          <div className='col-span-3'>
            <p className='text-xs'>{year}</p>
            <p className='text-xs'>{kilometers} km</p>
          </div>
          <div className='col-span-8'>
            <span className='text-sm'>{value}</span>
          </div>
          <div className='col-span-2'>
            {isFavorited && <Image className='inline-block' src={startFullfilled} alt="" width={20} />}
          </div>
          <div className='col-span-7'>
            <span className='text-sm'>{city}</span>
          </div>
          <div className='col-span-3'>
            <Button
              onClick={() => { }}
              title='Contato'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
