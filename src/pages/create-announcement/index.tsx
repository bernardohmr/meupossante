import arrowNext from '@/../public/images/arrow-next.svg'
import Form from '@/components/Form';
import DefaultHeader from '@/components/DefaultHeader';

export default function CreateAnnountcement() {
  const fields = [
    { key: "model", placeholder: "Modelo" },
    { key: "version", placeholder: "Versão" },
    { key: "year", placeholder: "Ano" },
    { key: "km", placeholder: "Kilometragem" },
    { key: "motor", placeholder: "Motorização" },
    { key: "color", placeholder: "Cor" },
    { key: "uniqueOwner", placeholder: "Único dono?" },
  ];

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
            onSubmit={(data) => console.log(JSON.stringify(data))}
            fields={fields}
            submitButtonIcon={arrowNext}
          />
        </div>
        </div>
    </div>
  )
}
