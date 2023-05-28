import Image from 'next/image'
import Router from 'next/router'
import { useSearchParams } from 'next/navigation';

import { Inter } from 'next/font/google'

import logo from '@/../public/images/logo.svg'
import taycan from '@/../public/images/taycan.png'
import ferrari from '@/../public/images/ferrari.png'
import mclaren from '@/../public/images/mclaren.png'
import SearchInput from '@/components/SearchInput'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Cars() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const cars = [
    {
      image: taycan,
      redirect: "/detail",
      title: "Porshe Taycan",
      description: "Turbo S",
      value: "R$ 559.000,00",
      year: "2021/2022",
      kilometers: "11.950 km",
      city: "São Paulo - SP",
      isFavorited: true,
    },
    {
      image: ferrari,
      redirect: "/",
      title: "Ferrari F8",
      description: "Spider 3.9 V8 Turbo",
      value: "R$ 4.199.900,00",
      year: "2021/2022",
      kilometers: "770 km",
      city: "Florianópolis - SC",
      isFavorited: false,
    },
    {
      image: mclaren,
      redirect: "/",
      title: "McLaren P1",
      description: "3.8 V8 Híbrido",
      value: "R$ 5.559.000,00",
      year: "2021/2022",
      kilometers: "1.250 km",
      city: "São Paulo - SP",
      isFavorited: false,
    },
  ]

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
            image={car.image}
            redirect={car.redirect}
            title={car.title}
            description={car.description}
            value={car.value}
            year={car.year}
            kilometers={car.kilometers}
            city={car.city}
            isFavorited={car.isFavorited}
          />))}
        </div>
      </div>
    </div>
  )
}
