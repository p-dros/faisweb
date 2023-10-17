import { ComponentProps } from 'react'
import Link from '@ui/Link'

type Props = Omit<ComponentProps<typeof Link>, 'to'>

export function SignInLink({ ...rest }: Props) {
  return <Link {...rest} to={'/sign-in'} />
}

export function SignUpLink({ ...rest }: Props) {
  return <Link {...rest} to={'/sign-up'} />
}
