import { useState } from 'react'
import styled from 'styled-components'
import { StyledButton, StyledInput } from '@/components'
import type { FormComponentProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
`

// T agora é qualquer objeto (solução correta)
export default function FormComponent<T extends object>({
  inputs,
  buttons,
  message,
  onSubmit,
}: FormComponentProps<T>) {

  const [internalMsg, setInternalMsg] = useState<string | null>(null)
  const [internalType, setInternalType] = useState<'error' | 'success'>('error')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!onSubmit) return

    const formData = new FormData(e.currentTarget)
    const data = {} as T

    formData.forEach((value, key) => {
      // atribuição segura sem erro de tipo
      (data as Record<string, unknown>)[key] = value.toString()
    })

    try {
      await Promise.resolve(onSubmit(data))
      setInternalMsg('Cadastro realizado com sucesso!')
      setInternalType('success')
    } catch {
      setInternalMsg('Erro ao enviar dados.')
      setInternalType('error')
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}

      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}

      {(internalMsg || message) && (
        <div
          style={{
            color:
              internalType === 'error' || message?.type === 'error'
                ? 'red'
                : 'green',
          }}
        >
          {internalMsg ?? message?.msg}
        </div>
      )}
    </StyledForm>
  )
}