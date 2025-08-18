import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

const signInForm = z.object({
  email: z.email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn () {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    resolver: zodResolver(signInForm)
  })

  async function handleSignIn (data: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)

    toast.success('Enviamos um link de autenticação para seu e-mail.', {
      action: {
        label: 'Reenviar',
        onClick: () => {}
      }
    })
  }

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='p-8'>
        <Button variant='ghost' asChild className='absolute right-8 top-8'>
          <Link to='/auth/sign-up'>
            Novo estabelecimento
          </Link>
        </Button>
        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Acessar painel</h1>
            <p className='text-sm text-muted-foreground'>
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input type='email' id='email' {...register('email')} />
            </div>
            <Button type='submit' className='w-full' disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
