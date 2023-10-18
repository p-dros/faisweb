import { AbsoluteCenter, Box } from '@chakra-ui/react'

type Variant = 'linear' | 'radial'

interface Props {
  variant: Variant
  opacity?: number
}

type Variants = {
  [key in Variant]: string
}

const variants: Variants = {
  linear: 'linear-gradient(43deg, orange.200 0%, red.600 46%, purple.500 100%)',
  radial:
    'radial-gradient(at 27% 37%, white 0px, transparent 0%), radial-gradient(at 97% 21%, orange.200 0px, transparent 50%), radial-gradient(at 52% 99%, red.600 0px, transparent 50%), radial-gradient(at 10% 29%, purple.500 0px, transparent 50%), radial-gradient(at 97% 96%, yellow.100 0px, transparent 50%), radial-gradient(at 33% 50%, teal.400 0px, transparent 50%), radial-gradient(at 79% 53%, cyan.200 0px, transparent 50%)',
}

export default function GridBackground({ variant, opacity }: Props) {
  return (
    <AbsoluteCenter bgImage={'/grid.svg'} bgSize={'cover'} zIndex={-1} h={'full'} w='full'>
      <Box
        sx={{
          backgroundColor: 'purple.200',
          backgroundImage: variants[variant],
        }}
        h={'full'}
        w={'full'}
        opacity={opacity ?? 0.15}
      />
    </AbsoluteCenter>
  )
}
