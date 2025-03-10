'use client'

import {Label, Input} from '@/components/ui'
import {
  TAuthCredentialsValidator,
  AuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'
import {FieldErrors, useForm, UseFormRegister} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {cn} from '@/lib/utils'

const RenderInput = (
  name: keyof TAuthCredentialsValidator,
  type: React.HTMLInputTypeAttribute = 'text',
  register: UseFormRegister<TAuthCredentialsValidator>,
  errors: FieldErrors<TAuthCredentialsValidator>
) => {
  return (
    <div className="grid gap-1 py-2">
      <Label htmlFor={name} className="mb-1">
        {name}
      </Label>
      <Input
        type={type}
        className={cn({'focus-visible:ring-red-500': errors[name]?.message})}
        placeholder={name}
        {...register(name)}
      />

      {errors[name] && (
        <p className="text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  )
}

export default RenderInput
