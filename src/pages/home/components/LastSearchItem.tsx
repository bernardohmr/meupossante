import Image from 'next/image'

import arrow from '@/../public/images/arrow.svg'
import startFullfilled from '@/../public/images/star-fullfilled.svg'
import Divider from '@/components/Divider';

interface IRequest {
  searchText: string;
  isFavorited?: boolean;
}

export default function LastSearchItem({ searchText, isFavorited }: IRequest) {
  return (
    <>
      <div className='py-2 pl-4'>
        <div className='flex space-x-4'>
          <Image src={arrow} alt=""/>
          <p className='text-gray-800'>{searchText}</p>
          {isFavorited && <Image src={startFullfilled} alt="" width={20}/>}
          <div className='h-1 bg-black'></div>
        </div>
      </div>

      <Divider width={90} />
    </>
  )
}
