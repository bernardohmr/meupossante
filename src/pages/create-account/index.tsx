import Form from '@/components/Form';
import DefaultHeader from '@/components/DefaultHeader';
import { useState } from 'react';

import { createUser } from '@/utils/endpoints';
import { useRouter } from 'next/router';
import { sleep } from '@/utils/sleep';

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedWithSuccess, setIsLoadedWithSuccess] = useState(false);
  const [isLoadedWithError, setIsLoadedWithError] = useState(false);
  const router = useRouter();

  const fields = [
    { key: "name", placeholder: "Nome completo" },
    { key: "cpf", placeholder: "CPF" },
    { key: "email", placeholder: "E-mail (usuário)" },
    { key: "phone", placeholder: "Whatsapp" },
    { key: "password", placeholder: "Senha" },
    { key: "passwordConfirmation", placeholder: "Confirmar senha" },
  ];

  function handleSubmit(data: any): void {
    setIsLoading(true)

    createUser(data)
      .then((res) => {
        setIsLoadedWithSuccess(true);
        setIsLoadedWithError(false);
        sleep(1000).then(() => router.push("/login"))
        // router.push("/login");
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
          title="Criar nova conta"
          subtitle="Crie sua conta para anunciar"
        />

      <div className='mt-6'>
        <Form
          submitButtonTitle="Criar conta"
          onSubmit={handleSubmit}
          fields={fields}
          isLoading={isLoading}
          isLoadedWithSuccess={isLoadedWithSuccess}
          isLoadedWithError={isLoadedWithError}
          submitSuccessMessage='Usuário criado!'
          submitErrorMessage='Erro ao criar usuário, tente novamente'
        />
      </div>

      </div>
    </div>
  )
}
