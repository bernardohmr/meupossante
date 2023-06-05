import Image from 'next/image'
import Router from 'next/router'

import startFullfilled from '../../public/images/star-fullfilled.svg'
import Button from '@/components/Button'
import formatToCurrency from '@/utils/formatToCurrency';

interface IRequest {
  image: string;
  redirect: string;
  model: string;
  version: string;
  value: number;
  year: string;
  kilometers: number;
  city: string;
  isFavorite?: boolean;
}

export default function Card({
  image,
  redirect,
  model,
  version,
  value,
  year,
  kilometers,
  city,
  isFavorite,
}: IRequest) {
  return (
    <div className='mb-6 lg:mb-12 flex shadow-[0_5px_5px_rgba(0,0,0,0.25)]' onClick={() => Router.push(`/detail/${redirect}`)}>
      <Image
        className='w-1/2'
        src={`/../public/images/${image}`}
        alt={model}
        width={800}
        height={624}
        priority
      />
      <div className='w-1/2'>
        <div className='text-neutral-950 font-sans flex justify-between h-full p-3 pt-2 sm:p-6 lg:p-10'>
          <div className='flex flex-col justify-between'>
            <div className=''>
              <p className='text-sm sm:text-xl lg:text-2xl font-semibold'>{model}</p>
              <p className='text-xs sm:text-lg lg:text-xl font-light'>{version}</p>
            </div>
            <div className=''>
              <span className='text-sm sm:text-xl lg:text-3xl italic'>{`R$ ${formatToCurrency(value)}`}</span>
            </div>
            <div className=''>
              <span className='text-xs sm:text-lg lg:text-xl font-light tracking-tighter'>{city}</span>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className=''>
              <p className='text-xs sm:text-lg lg:text-xl font-light tracking-tighter float-right'>{year}</p>
              <p className='text-xs sm:text-lg lg:text-xl font-light tracking-tighter ml-4 clear-right float-right'>{`${formatToCurrency(kilometers, 0)} km`}</p>
            </div>
            <div className=''>
              {isFavorite && <Image className='inline-block float-right sm:scale-150' src={startFullfilled} alt="" width={20} />}
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
