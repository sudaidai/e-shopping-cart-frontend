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

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const onSubmit: SubmitHandler<TAuthCredentialsValidator> = async data => {
    try {
      const response = await apiMember({...data, account: data.email})
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/member`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...data, account: data.email }),
      // });

      if (response.status !== 200) {
        throw new Error('Failed to register')
      }

      alert('Registration successful')
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

          <Link
            className={buttonVariants({
              variant: 'link',
              className: 'gap-1.5',
            })}
            href="/sign-in"
          >
            Already have an account? Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          {renderInput('email', 'email')}
          {renderInput('password', 'password')}
          <Button>Sign up</Button>
        </form>
      </div>
    </div>
  )
}

export default Page
