import Link from 'next/link'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'

import logoComplete from '@/../public/images/logo-complete.svg'
import Form from '@/components/Form';
import { useState } from 'react';
import { auth } from '@/controllers';
import { sleep } from '@/utils/sleep';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedWithSuccess, setIsLoadedWithSuccess] = useState(false);
  const [isLoadedWithError, setIsLoadedWithError] = useState(false);
  const router = useRouter();

  const fields = [
    { key: "email", placeholder: "Usuário/E-mail" },
    { key: "password", placeholder: "Senha" },
  ];

  function handleSubmit(data: any): void {
    setIsLoading(true)

    auth(data)
      .then((res) => {
        setIsLoadedWithSuccess(true);
        setIsLoadedWithError(false);
        sleep(1000).then(() => router.push("/create-announcement"))
      })
      .catch(err => {
        console.log(err)
        setIsLoadedWithSuccess(false);
        setIsLoadedWithError(true);
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='bg-white h-screen'>
      <div className='h-[90%] flex flex-col justify-between'>
        <div className='mx-auto pt-14'>
          <Image
            className=''
            src={logoComplete}
            alt=""
            onClick={() => Router.push("/")}
          />
        </div>

        <div className='flex flex-col items-center'>
          <Form
            submitButtonTitle="Entrar"
            onSubmit={handleSubmit}
            fields={fields}
            isLoading={isLoading}
            isLoadedWithSuccess={isLoadedWithSuccess}
            isLoadedWithError={isLoadedWithError}
            submitSuccessMessage='Login feito! Redirecionando...'
            submitErrorMessage='Credenciais inválidas!'
          />
        </div>

        <div className='mx-auto my-10'>
          <Link
            className='text-red-900 font-bold'
            href='/create-account'
          >Criar nova conta</Link>
        </div>
      </div>
    </div>
  )
}
