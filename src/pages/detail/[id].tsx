import Image from 'next/image'
import Router from 'next/router'

import logo from '@/../public/images/logo.svg'
import star from '@/../public/images/star.svg'
import starFullfilled from '../../../public/images/star-fullfilled.svg'
import starFullfilledWhite from '../../../public/images/star-fullfilled-white.svg'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import CarFeaturesItem from './components/CarFeaturesItem'
import { useState } from 'react'
import PhotoChooser from './components/PhotoChooser'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import * as repository from '@/../prisma/repository'
import formatToCurrency from '@/utils/formatToCurrency'

export default function Detail({ car }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isFavorite, setIsFavorite] = useState(car.isFavorite);
  const [showModal, setShowModal] = useState(false);

  function handleFavoriteStarClicked() {
    if (!isFavorite) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    }

    setIsFavorite(!isFavorite);
  }

  const carFeatures = [
    { key: "model", feature: "Porshe Taycan", description: "Modelo" },
    { key: "version", feature: "Turbo S", description: "Versão" },
    { key: "value", feature: "R$ 559.000,00", description: "Valor" },
    { key: "city", feature: "São Paulo - SP", description: "Cidade" },
    { key: "year", feature: "2021/2022", description: "Ano" },
    { key: "kilometers", feature: "11.950", description: "Km" },
    { key: "motorization", feature: "761cv elétrico", description: "Motorização" },
    { key: "color", feature: "Branco", description: "Cor" },
    { key: "uniqueOwner", feature: "Sim", description: "Único dono?" },
  ];

  carFeatures.forEach(f => {
    if (f.key === "value") {
      f.feature = "R$ " + formatToCurrency(car[f.key] || 0)
    } else if(f.key === "kilometers") {
      f.feature = formatToCurrency(car[f.key] || 0, 0)
    } else if(f.key === "uniqueOwner") {
      f.feature = car[f.key] ? "Sim" : "Não"
    } else {
      f.feature = car[f.key]
    }
  })

  function findFeatureName(key: string) {
    const feature = carFeatures.find(f => f.key === key);

    return feature?.feature || "N/D";
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
              onClick={() => Router.back()}
            />
            <div className='text-neutral-950 font-sans inline-block ml-3'>
              <p className='font-semibold xs:text-xl sm:text-3xl sm:mb-2 sm:font-normal sm:inline-block'>{findFeatureName("model")}</p>
              <p className='font-light sm:inline-block sm:text-xl sm:ml-2'>{findFeatureName("version")}</p>
            </div>
          </div>
          <Image
            className='inline-block sm:scale-150'
            src={isFavorite ? starFullfilled : star}
            alt=""
            onClick={handleFavoriteStarClicked}
          />
        </div>

        <div className='w-full relative'>
          <PhotoChooser
            images={car.images}
          />

          <div
            className={'w-full h-full bg-red-900/30 absolute top-0 flex flex-col items-center justify-center transition-opacity ease-out duration-700' + (showModal ? "" : " opacity-0")}
            onClick={() => setShowModal(false)}
          >
            <Image
              className='inline-block sm:scale-150 h-12'
              src={starFullfilledWhite}
              alt="Adicionado como favorito!"
            />
            <p className='text-2xl font-semibold'>Adicionado como favorito!</p>
          </div>
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
          {carFeatures.map(cf => <CarFeaturesItem feature={cf.feature} description={cf.description} key={cf.key} />)}
        </div>

        <div className='mb-10 sm:mb-20'></div>
      </div>
    </div>
  )
}

interface ICar {
  id: string;
  main_image: string;
  model: string;
  version: string;
  value: number;
  year: string;
  kilometers: number;
  city: string;
  isFavorited?: boolean;
}

export const getStaticPaths = async () => {
  const cars = await repository.listAnnouncements() as ICar[];

  const paths = cars.map(car => ({
    params: { id: car.id }
  }));

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const car = await repository.getAnnouncement(id as string)

  const parsedCar = JSON.parse(JSON.stringify(car))

  return { props: { car: parsedCar } };
};
