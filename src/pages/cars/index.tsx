import Image from 'next/image'
import Router from 'next/router'
import { useSearchParams } from 'next/navigation';

import logo from '@/../public/images/logo.svg'
import SearchInput from '@/components/SearchInput'
import Card from '@/components/Card'
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import * as repository from '@/../prisma/repository'

export default function Cars({ cars }: InferGetStaticPropsType<typeof getStaticProps>) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  return (
    <div className='bg-white h-screen overflow-auto'>
      <div className='mx-auto max-w-5xl'>
        <div className='p-4 flex items-end'>
          <Image
            className='md:scale-125 md:mx-4 lg:mx-8'
            src={logo}
            alt=""
            onClick={() => Router.back()}
          />
          <div className='border-[1px] border-gray-400 h-8 md:h-10 lg:h-12 rounded-[3px] grow mx-3 mb-2'>
            <SearchInput
              onClick={() => {}}
              onChange={() => {}}
              defaultValue={search || ""}
            />
          </div>
        </div>
        <div>
          {cars.map(car => (<Card
            key={car.id}
            image={car.main_image}
            redirect={car.id}
            model={car.model}
            version={car.version}
            value={car.value}
            year={car.year}
            kilometers={car.kilometers}
            city={car.city}
            isFavorite={car.isFavorite}
          />))}
        </div>
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
  isFavorite?: boolean;
}

export const getStaticProps: GetStaticProps<{ cars: ICar[] }> = async () => {
  const cars = await repository.listAnnouncements() as ICar[];
  const parsedCars = JSON.parse(JSON.stringify(cars));
  return { props: { cars: parsedCars } };
};
