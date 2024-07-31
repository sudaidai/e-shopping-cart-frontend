'use client'

import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button, Label, Input, buttonVariants} from '@/components/ui'
import {cn} from '@/lib/utils'
import {
  TAuthCredentialsValidator,
  AuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'
import {ArrowRight, Squirrel} from 'lucide-react'
import Link from 'next/link'
import {apiMember} from '@/services/api'
import {useRouter} from 'next/navigation'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const router = useRouter()

  const isResponseSuccessful = (status: number) => status >= 200 && status < 300

  function directToHomePageHandler() {
    router.push('/')
  }

  const onSubmit: SubmitHandler<TAuthCredentialsValidator> = async data => {
    try {
      const response = await apiMember({...data})
      if (!isResponseSuccessful(response.status)) {
        console.log('response : ', response)
        throw new Error('Failed to register')
      }

      directToHomePageHandler
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  const renderInput = (
    name: keyof TAuthCredentialsValidator,
    type: React.HTMLInputTypeAttribute = 'text'
  ) => (
    <div className="grid gap-1 py-2">
      <Label htmlFor={name}>{name}</Label>
      <Input
        type={type}
        className={cn({'focus-visible:ring-red-500': errors[name]?.message})}
        placeholder={name}
        {...register(name)}
      />

      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  )

  return (
    <div className="container relative flex pt-6 md:pt-12 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-full h-28 w-28 bg-secondary flex items-center justify-center">
            <Squirrel className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-primary">
            Create an account
          </h1>

          <div className="flex items-center gap-2">
            <div className="text-xs">Already have an account?</div>
            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1 text-xs',
                size: 'noBorder',
              })}
              href="/sign-in"
            >
              Sign In
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          {renderInput('account', 'account')}
          {renderInput('password', 'password')}
          <Button>Sign up</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
