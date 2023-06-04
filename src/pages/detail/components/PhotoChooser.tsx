import Image from 'next/image'

import arrowRight from '@/../public/images/arrow-right.svg'
import arrowLeft from '@/../public/images/arrow-left.svg'

import { useState } from 'react'

interface IRequest {
  images: Array<string>;
}

export default function PhotoChooser({ images }: IRequest) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images?.length ? images[currentImageIndex] : "");

  function selectCurrentImage(direction: "asc" | "desc") {
    const maxIndex = images.length - 1;

    let changeTo = 0;
    if (direction === "asc") {
      if (currentImageIndex === maxIndex) changeTo = 0;
      else changeTo = currentImageIndex + 1;
    } else {
      if (currentImageIndex === 0) changeTo = maxIndex;
      else changeTo = currentImageIndex - 1;
    }

    setCurrentImageIndex(changeTo);
    setCurrentImage(images[changeTo]);
  }

  return (
    <div className='mx-auto w-full relative bg-black'>
      <div className='max-h-[488px] overflow-hidden'>
        <Image
          className='max-h-[488px] mx-auto object-cover sm:object-scale-down'
          alt="Taycan"
          src={`/../public/images/${currentImage}`}
          width={800}
          height={624}
        />
      </div>
      <Image
        className='absolute top-1/2 -translate-y-1/2 scale-150 left-3 z-50'
        alt=""
        src={arrowLeft}
        onClick={() => selectCurrentImage("desc")}
      />
      <Image
        className='absolute top-1/2 -translate-y-1/2 scale-150 right-3 z-50'
        alt=""
        src={arrowRight}
        onClick={() => selectCurrentImage("asc")}
      />
    </div>
  )
}
