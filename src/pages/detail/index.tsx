import Image from 'next/image'
import Router from 'next/router'

import logo from '@/../public/images/logo.svg'
import taycanDetail from '@/../public/images/taycan-detail-1.png'
import taycan1 from '../../../public/images/taycan1.webp'
import taycan2 from '../../../public/images/taycan2.jpeg'
import taycan3 from '../../../public/images/taycan3.webp'
import taycan4 from '../../../public/images/taycan4.webp'
import star from '@/../public/images/star.svg'
import arrowRight from '@/../public/images/arrow-right.svg'
import arrowLeft from '@/../public/images/arrow-left.svg'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import CarFeaturesItem from './components/CarFeaturesItem'
import { useState } from 'react'

export default function Details() {
  const carFeatures = [
    { feature: "Porshe Taycan", description: "Modelo" },
    { feature: "Turbo S", description: "Versão" },
    { feature: "2021/2022", description: "Ano" },
    { feature: "11.950", description: "Km" },
    { feature: "761cv elétrico", description: "Motorização" },
    { feature: "Branco", description: "Cor" },
    { feature: "Sim", description: "Único dono?" },
  ];

  const images = [
    taycanDetail,
    taycan1,
    // taycan2,
    taycan3,
    taycan4,
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[currentImageIndex]);

  function selectCurrentImage(direction: "asc" | "desc") {
    const maxIndex = images.length - 1;

    if (direction === "asc") {
      if (currentImageIndex === maxIndex) setCurrentImageIndex(0);
      else setCurrentImageIndex(currentImageIndex + 1);
    } else {
      if (currentImageIndex === 0) setCurrentImageIndex(maxIndex);
      else setCurrentImageIndex(currentImageIndex - 1);
    }

    setCurrentImage(images[currentImageIndex]);
  }

  return (
    <div className='bg-white h-screen overflow-auto'>
      <div className='p-4 flex items-center justify-between'>
        <Image
          className=''
          src={logo}
          alt=""
          onClick={() => Router.push("/cars")}
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
          src={currentImage}
        />
        <Image
          className='absolute top-1/2 -translate-y-1/2 scale-150 left-3'
          alt=""
          src={arrowLeft}
          onClick={() => selectCurrentImage("desc")}
        />
        <Image
          className='absolute top-1/2 -translate-y-1/2 scale-150 right-3'
          alt=""
          src={arrowRight}
          onClick={() => selectCurrentImage("asc")}
        />
      </div>

      <div className='pt-6 pl-8 flex items-center'>
        <div className='text-black inline-block w-1/2'>
          <p className='text-2xl italic'>R$ 559.000,00</p>
          <p className='text-sm tracking-tighter'>São Paulo - SP</p>
        </div>
        <div className='m-3 h-8 inline-block w-1/2'>
          <Button
            title="Contato"
            onClick={() => {}}
            className="text-xl"
          />
        </div>
      </div>

      <Divider width={90} />

      <div className='pt-2 pl-8'>
        {carFeatures.map(cf => <CarFeaturesItem feature={cf.feature} description={cf.description} />)}
      </div>

      <div className='mb-10'></div>
    </div>
  )
}
