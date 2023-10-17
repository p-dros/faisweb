import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Button,
  Avatar,
  Flex,
  Show,
  Text,
  Stack,
  StackDivider,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react'
import { ReactNode, useRef } from 'react'
import Link from './NavLink'

interface NavLink {
  content: ReactNode
  path: string
}

const links: NavLink[] = [
  {
    content: 'Your Profile',
    path: '/profile',
  },
  {
    content: 'Favorite Courses',
    path: '/favorite ',
  },
]

function Mobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <Box as='nav' px={4}>
      <Button aria-label='Menu' ref={triggerRef} variant={'ghost'} onClick={onOpen}>
        <HamburgerIcon boxSize={8} />
      </Button>
      <Drawer isOpen={isOpen} placement='right' size={'md'} onClose={onClose} finalFocusRef={triggerRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader as={Flex} direction={'row'} gap={3} align={'center'}>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <Flex direction={'column'} justify={'space-around'} h={'full'}>
              <Text fontSize={'sm'}>p-dros</Text>
              <Text fontSize={'xs'} opacity={'0.7'}>
                Piotr Dros
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Stack divider={<StackDivider />}>
              {links.map((link) => (
                <Box key={link.path}>
                  <Link to={link.path}>{link.content}</Link>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

function Desktop() {
  return (
    <Flex as='nav' gap={8} align={'center'}>
      <Flex gap={4}>
        {links.map((link) => (
          <Box key={link.path}>
            <Link to={link.path}>{link.content}</Link>
          </Box>
        ))}
      </Flex>
      <Menu>
        <MenuButton>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </MenuButton>
        <MenuList>
          <Stack divider={<StackDivider />}>
            <Box px={4} py={2}>
              Log in
            </Box>
            <Box px={4} py={2}>
              Sign up
            </Box>
          </Stack>
        </MenuList>
      </Menu>
    </Flex>
  )
}

function Navigation() {
  return (
    <>
      <Show below={'md'}>
        <Mobile />
      </Show>
      <Show above={'md'}>
        <Desktop />
      </Show>
    </>
  )
}

export default Navigation
