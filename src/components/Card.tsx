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
    <div className='mb-6 flex shadow-[0_5px_5px_rgba(0,0,0,0.25)]' onClick={() => Router.push(redirect)}>
      <Image
        className='w-1/2'
        src={image}
        alt={title}
      />
      <div className='w-1/2'>
        <div className='text-neutral-950 font-sans flex justify-between h-full p-3 pt-2'>
          <div className='flex flex-col justify-between'>
            <div className=''>
              <p className='text-sm font-semibold'>{title}</p>
              <p className='text-xs font-light'>{description}</p>
            </div>
            <div className=''>
              <span className='text-sm italic'>{value}</span>
            </div>
            <div className=''>
              <span className='text-xs font-light tracking-tighter'>{city}</span>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className=''>
              <p className='text-xs font-light tracking-tighter float-right'>{year}</p>
              <p className='text-xs font-light tracking-tighter ml-4'>{kilometers}</p>
            </div>
            <div className=''>
              {isFavorited && <Image className='inline-block float-right' src={startFullfilled} alt="" width={20} />}
            </div>
            <div className=''>
              <Button
                title="Contato"
                onClick={() => { }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
