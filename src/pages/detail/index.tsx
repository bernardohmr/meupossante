import Image from 'next/image'
import Router from 'next/router'

import logo from '@/../public/images/logo.svg'
import taycanDetail from '@/../public/images/taycan-detail-1.png'
import taycan1 from '../../../public/images/taycan1.webp'
import taycan2 from '../../../public/images/taycan2.jpeg'
import taycan3 from '../../../public/images/taycan3.webp'
import taycan4 from '../../../public/images/taycan4.webp'
import star from '@/../public/images/star.svg'
import starFullfilled from '../../../public/images/star-fullfilled.svg'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import CarFeaturesItem from './components/CarFeaturesItem'
import { useState } from 'react'
import PhotoChooser from './components/PhotoChooser'

export default function Details() {
  const [isFavorited, setIsFavorited] = useState(true);

  const carFeatures = [
    { key: "title", feature: "Porshe Taycan", description: "Modelo" },
    { key: "description", feature: "Turbo S", description: "Versão" },
    { key: "value", feature: "R$ 559.000,00", description: "Valor" },
    { key: "city", feature: "São Paulo - SP", description: "Cidade" },
    { key: "year", feature: "2021/2022", description: "Ano" },
    { key: "kilometers", feature: "11.950", description: "Km" },
    { key: "motorization", feature: "761cv elétrico", description: "Motorização" },
    { key: "color", feature: "Branco", description: "Cor" },
    { key: "uniqueOwner", feature: "Sim", description: "Único dono?" },
  ];

  function findFeatureName(key: string) {
    const feature = carFeatures.find(f => f.key === key);

    return feature?.feature || "N/D";
  }

  const images = [
    taycanDetail,
    taycan1,
    taycan2,
    taycan3,
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
      <div className='mx-auto max-w-5xl'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-end'>
            <Image
              className='inline-block'
              src={logo}
              alt=""
              onClick={() => Router.push("/cars")}
            />
            <div className='text-neutral-950 font-sans inline-block ml-3'>
              <p className='font-semibold xs:text-xl sm:text-3xl sm:mb-2 lg:text-4xl lg:font-normal sm:inline-block'>{findFeatureName("title")}</p>
              <p className='font-light sm:inline-block sm:text-xl sm:ml-2'>{findFeatureName("description")}</p>
            </div>
          </div>
          <Image
            className='inline-block sm:scale-150'
            src={isFavorited ? starFullfilled : star}
            alt=""
            onClick={() => setIsFavorited(!isFavorited)}
          />
        </div>

        <div className='w-full'>
          <PhotoChooser
            currentImage={currentImage}
            onClickNext={() => selectCurrentImage("asc")}
            onClickPrev={() => selectCurrentImage("desc")}
          />
        </div>

        <div className='pt-6 pl-8 flex items-center justify-between'>
          <div className='text-black inline-block grow'>
            <p className='text-2xl italic sm:text-3xl lg:text-4xl'>{findFeatureName("value")}</p>
            <p className='text-sm sm:text-lg lg:text-2xl tracking-tighter'>{findFeatureName("city")}</p>
          </div>
          <div className='m-3 h-8 inline-block w-1/3 max-w-[300px]'>
            <Button
              title="Contato"
              onClick={() => {}}
              className="text-xl sm:text-lg lg:text-xl"
            />
          </div>
        </div>

        <Divider width={80} />

        <div className='pt-2 pl-8 sm:flex sm:flex-wrap sm:justify-between'>
          {carFeatures.map(cf => <CarFeaturesItem feature={cf.feature} description={cf.description} />)}
        </div>

        <div className='mb-10 sm:mb-20'></div>
      </div>
    </div>
  )
}
