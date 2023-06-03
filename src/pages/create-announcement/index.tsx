import arrowNext from '@/../public/images/arrow-next.svg'
import Form from '@/components/Form';
import DefaultHeader from '@/components/DefaultHeader';
import { useState } from 'react';
import { createAnnouncement } from '@/utils/endpoints';

export default function CreateAnnouncement() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedWithSuccess, setIsLoadedWithSuccess] = useState(false);
  const [isLoadedWithError, setIsLoadedWithError] = useState(false);

  const fields = [
    { key: "model", placeholder: "Modelo" },
    { key: "version", placeholder: "Versão" },
    { key: "value", placeholder: "Valor", type: "number" },
    { key: "year", placeholder: "Ano" },
    { key: "kilometers", placeholder: "Kilometragem", type: "number" },
    { key: "motorization", placeholder: "Motorização" },
    { key: "color", placeholder: "Cor" },
    { key: "uniqueOwner", placeholder: "Único dono?", type: "select", options: [{ name: "Sim", value: true }, { name: "Não", value: false }] },
    { key: "city", placeholder: "Cidade" },
  ];

  function handleSubmit(data) {
    setIsLoading(true)

    createAnnouncement(data)
    .then((res) => {
      setIsLoadedWithSuccess(true);
      setIsLoadedWithError(false);
    })
    .catch(err => {
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
          subtitle="1 de 2"
        />

        <div className='mt-6'>
          <Form
            submitButtonTitle="Subir fotos"
            onSubmit={handleSubmit}
            fields={fields}
            submitButtonIcon={arrowNext}
            isLoading={isLoading}
            isLoadedWithSuccess={isLoadedWithSuccess}
            isLoadedWithError={isLoadedWithError}
            submitSuccessMessage='Anúncio criado!'
            submitErrorMessage='Ocorreu um erro, tente novamente.'
          />
        </div>
      </div>
    </div>
  )
}
