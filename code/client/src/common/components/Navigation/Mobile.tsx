import links from '@/common/links'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Link from '@components/Link'
import Logo from '@components/Logo'
import { authStore } from '@stores/authStore'
import { useEffect, useRef } from 'react'

import { navLinks } from './navLinks'

import { signOut } from '@/common/lib/auth'
import { useLocation } from 'react-router-dom'

function Mobile() {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const user = authStore((state) => state.currentUser)

  const location = useLocation()

  useEffect(() => onClose(), [location, onClose])

  return (
    <Flex align={'center'} justify={'space-between'} w={'full'} px={2}>
      <Logo />
      <Box as='nav'>
        <Button aria-label='Menu' ref={triggerRef} variant={'ghost'} onClick={onToggle} p={0} m={0}>
          <HamburgerIcon boxSize={8} />
        </Button>
        <Drawer isOpen={isOpen} placement='right' size={'full'} onClose={onClose} finalFocusRef={triggerRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader as={Flex} direction={'row'} gap={3} align={'center'} fontSize={'xl'}>
              {user !== null ? (
                <Flex as={Link} align={'center'} gap={2} to={links.profile}>
                  <Avatar name={user.name} src={user.avatar} />
                  <Text>{user.name}</Text>
                </Flex>
              ) : (
                <Heading>
                  <Logo />
                </Heading>
              )}
            </DrawerHeader>
            <DrawerBody fontSize={'lg'}>
              <Stack align={'center'} fontSize={'xl'} gap={4}>
                {navLinks.map(({ path, title, icon }) => (
                  <Flex as={Link} key={path} to={path} align={'center'} justify={'center'} gap={2} w='full'>
                    {icon}
                    <Text>{title}</Text>
                  </Flex>
                ))}

                {user ? (
                  <Button onClick={() => signOut()} w='full'>
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button key={links.login} as={Link} to={links.login} w='full' variant={'outline'}>
                      Sign In
                    </Button>
                    <Button key={links.register} as={Link} to={links.register} w='full' variant={'solid'}>
                      Sign In
                    </Button>
                  </>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  )
}

export default Mobile
