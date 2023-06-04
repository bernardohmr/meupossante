import Image from 'next/image'

import checkIcon from '@/../public/images/check.svg'
import plusIcon from '@/../public/images/plusIcon.svg'
import taycan1 from '@/../public/images/uploads/taycan1.webp'
import taycan2 from '@/../public/images/uploads/taycan2.jpeg'
import taycan3 from '@/../public/images/uploads/taycan3.webp'
import taycan4 from '@/../public/images/uploads/taycan4.webp'
import DefaultHeader from '@/components/DefaultHeader';
import Button from '@/components/Button';

export default function UploadAnnouncementImages() {
  const imagesUploaded = [
    taycan1,
    taycan2,
    taycan3,
    taycan4,
  ]

  return (
    <div className="h-screen bg-white">
      <div className='h-full max-w-5xl mx-auto'>
        <DefaultHeader
          title="Criar novo anúncio"
          subtitle="2 de 2"
        />

        <div className='mx-auto'>
          <div className='mx-auto flex flex-wrap px-3 sm:m-12'>
            <div className='w-[95px] h-[95px] rounded-lg m-3 border-[1px] border-zinc-900 sm:w-[150px] sm:h-[150px]'>
              <Image
                className='m-auto h-full'
                src={plusIcon}
                alt="Adicionar foto"
              />
            </div>
            {imagesUploaded.map((image, index) => (
              <div className='w-[95px] h-[95px] rounded-lg m-3 sm:w-[150px] sm:h-[150px]' key={index}>
                <Image
                  className='rounded-lg m-auto h-full object-cover'
                  src={image}
                  alt="Foto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className='w-2/5 mx-auto mt-8 h-10'>
          <Button
            title="Criar anúncio"
            onClick={() => {}}
            icon={checkIcon}
          />
        </div>
      </div>
    </div>
  )
}
