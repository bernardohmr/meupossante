import Image from 'next/image'

import checkIcon from '@/../public/images/check.svg'
import plusIcon from '@/../public/images/plusIcon.svg'
import taycan1 from '@/../public/images/taycan1.webp'
import taycan2 from '@/../public/images/taycan2.jpeg'
import taycan3 from '@/../public/images/taycan3.webp'
import taycan4 from '@/../public/images/taycan4.webp'
import DefaultHeader from '@/components/DefaultHeader';
import Button from '@/components/Button';
import { useRouter } from 'next/router'
import { useState } from 'react'
import Loader from '@/components/Loader'
import { createAnnouncement } from '@/controllers';

export default function UploadAnnouncementImages() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedWithSuccess, setIsLoadedWithSuccess] = useState(false);
  const [isLoadedWithError, setIsLoadedWithError] = useState(false);

  const router = useRouter();
  const queryData = router.query;

  const imagesUploaded = [
    taycan1,
    taycan2,
    taycan3,
    taycan4,
  ]

  function handleSubmit(data: any): void {
    setIsLoading(true)

    createAnnouncement(queryData)
      .then((res) => {
        setIsLoadedWithSuccess(true);
        setIsLoadedWithError(false);
        router.push("/");
      })
      .catch(err => {
        console.log(err)
        setIsLoadedWithSuccess(false);
        setIsLoadedWithError(true);
      })
      .finally(() => setIsLoading(false))
  }

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

        <div className='mx-auto w-2/5 h-10 max-w-xs flex mt-6'>
          {!isLoading && <div className='ml-4 grow'>
            <Button
              title="Criar anúncio"
              onClick={handleSubmit}
              icon={checkIcon}
            />
          </div>}
          {isLoading && <Loader />}
        </div>

        {isLoadedWithSuccess && !isLoading && <div className='mx-auto my-6 text-black text-center'>Anúncio criado!</div>}
        {isLoadedWithError && !isLoading && <div className='mx-auto my-6 text-black text-center'>Ocorreu um erro, tente novamente.</div>}
      </div>
    </div>
  )
}
