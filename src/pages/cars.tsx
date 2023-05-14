import Image from 'next/image'
import Router from 'next/router'

import { Inter } from 'next/font/google'

import logo from '../../public/images/logo.svg'
import taycan from '../../public/images/taycan.png'
import ferrari from '../../public/images/ferrari.png'
import mclaren from '../../public/images/mclaren.png'
import SearchInput from '@/components/SearchInput'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white h-screen'>
      <div className='p-4 flex items-end'>
        <Image
          className=''
          src={logo}
          alt=""
          onClick={() => Router.push("/")}
        />
        <div className='border-[1px] border-gray-400 h-8 rounded-[3px] grow mx-3 mb-2'>
          <SearchInput
            onClick={() => {}}
            value="Porshe taycan"
          />
        </div>
      </div>
      <div>
        <Card
          image={taycan}
          redirect='/'
          title="Porshe Taycan"
          description="Turbo S"
          value="R$ 559.000,00"
          year="2021/2022"
          kilometers={11950}
          city="São Paulo - SP"
          isFavorited={true}
        />
        <Card
          image={ferrari}
          redirect='/'
          title="Ferrari F8"
          description="Spider 3.9 V8 Turbo"
          value="R$ 4.199.900,00"
          year="2021/2022"
          kilometers={770}
          city="Florianópolis - SC"
          isFavorited={false}
        />
        <Card
          image={mclaren}
          redirect='/'
          title="McLaren P1"
          description="3.8 V8 Híbrido"
          value="R$ 5.559.000,00"
          year="2021/2022"
          kilometers={1250}
          city="São Paulo - SP"
          isFavorited={false}
        />
      </div>
    </div>
  )
}
