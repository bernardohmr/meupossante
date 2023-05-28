import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

import logoComplete from '@/../public/images/logo-complete.svg'
import Form from '@/components/Form';

export default function Login() {
  const fields = [
    { key: "user", placeholder: "Usuário/E-mail" },
    { key: "password", placeholder: "Senha" },
  ];

  return (
    <div className='bg-white h-screen'>
      <div className='h-full flex flex-col justify-between'>
        <div className='mx-auto pt-14'>
          <Image
            className=''
            src={logoComplete}
            alt=""
            onClick={() => Router.back()}
          />
        </div>

        <div className='flex flex-col items-center'>
          <Form
            submitButtonTitle="Entrar"
            onSubmit={() => Router.push("/create-announcement")}
            fields={fields}
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
