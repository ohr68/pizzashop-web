import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Link, useSearchParams } from 'react-router-dom'
import { Seo } from '@/components/seo'
import { signIn } from '@/api/sign-in'
import { useMutation } from '@tanstack/react-query'

const signInForm = z.object({
  email: z.email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn () {
  const [searchParams] = useSearchParams()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn (data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => {}
        }
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <div>
      <Seo
        title='Login'
        description='SignIn to see all the app resources'
        name='pizza.shop'
        type='manager'
      />
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
