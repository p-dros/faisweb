import { Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import Link from '@ui/Link'
import { SubmitHandler, useFormContext } from 'react-hook-form'
import Form from '../../../components/ui/Form'
import { RegisterInputs } from '../../../config/validations/RegisterValidations'
import links from '@/config/links'

interface RegisterFormProps {
  onSubmit: SubmitHandler<RegisterInputs>
}

function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<RegisterInputs>()

  return (
    <Form.Wrapper>
      <Form
        title='Create a free account'
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        errorMessage={errors.root?.message}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register('name')} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <Flex gap={4} wrap={{ base: 'wrap', md: 'nowrap' }}>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type='password' {...register('password')} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.passwordConfirm}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' {...register('passwordConfirm')} />
            <FormErrorMessage>{errors.passwordConfirm?.message}</FormErrorMessage>
          </FormControl>
        </Flex>
        <FormControl isInvalid={!!errors.regulaminAccept} mt={6}>
          <Checkbox {...register('regulaminAccept')}>I agree to the regulamin</Checkbox>
          <FormErrorMessage>{errors.regulaminAccept?.message}</FormErrorMessage>
        </FormControl>
      </Form>
      <Form.Footer>
        <Text>
          Already have an account?{' '}
          <Link fontWeight={'bold'} color={'black'} to={links.login}>
            Login Now
          </Link>
        </Text>
      </Form.Footer>
    </Form.Wrapper>
  )
}

export default RegisterForm
