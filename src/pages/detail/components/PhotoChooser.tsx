import Image from 'next/image'

import arrowRight from '@/../public/images/arrow-right.svg'
import arrowLeft from '@/../public/images/arrow-left.svg'

interface IRequest {
  currentImage: any;
  onClickNext(): any;
  onClickPrev(): any;
}

export default function PhotoChooser({ currentImage, onClickNext, onClickPrev }: IRequest) {
  return (
    <div className='mx-auto w-full relative bg-black'>
      <div className='max-h-[488px] overflow-hidden'>
        <Image
          className='max-h-[488px] mx-auto object-cover sm:object-scale-down' //object-scale-down ou object-contain
          alt="Taycan"
          src={currentImage}
        />
      </div>
      <Image
        className='absolute top-1/2 -translate-y-1/2 scale-150 left-3'
        alt=""
        src={arrowLeft}
        onClick={onClickNext}
      />
      <Image
        className='absolute top-1/2 -translate-y-1/2 scale-150 right-3'
        alt=""
        src={arrowRight}
        onClick={onClickPrev}
      />
    </div>
  )
}
