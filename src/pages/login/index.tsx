import Link from 'next/link'
import Image from 'next/image'

import logoComplete from '@/../public/images/logo-complete.svg'
import Button from '@/components/Button'
import InputText from './components/InputText'

export default function Login() {
  return (
    <div className='bg-white'>
      <div className='h-screen flex flex-col justify-between'>
        <div className='mx-auto pt-14'>
          <Image
            className=''
            src={logoComplete}
            alt=""
          />
        </div>

        <div className='-mt-28'>
          <p className='text-black text-center mb-4'>Faça seu login para anunciar</p>
          <InputText
            placeholder='Usuário/E-mail'
          />
          <InputText
            placeholder='Senha'
          />
          <div className='w-1/3 mx-auto h-8 max-w-[200px] mt-4'>
            <Button
              className='text-[1rem]'
              title='Entrar'
              onClick={() => {}}
            />
          </div>
        </div>

        <div className='mx-auto mb-10'>
          <Link
            className='text-red-900 font-bold'
            href='/signup'
          >Criar nova conta</Link>
        </div>
      </div>
    </div>
  )
}
