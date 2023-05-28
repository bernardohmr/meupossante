import Form from '@/components/Form';
import DefaultHeader from '@/components/DefaultHeader';

export default function CreateAccount() {
  const fields = [
    { key: "model", placeholder: "Nome completo" },
    { key: "version", placeholder: "CPF" },
    { key: "year", placeholder: "E-mail (usuário)" },
    { key: "km", placeholder: "Whatsapp" },
    { key: "motor", placeholder: "Senha" },
    { key: "color", placeholder: "Confirmar senha" },
  ];

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
          onSubmit={() => {}}
          fields={fields}
        />
      </div>

      </div>
    </div>
  )
}
