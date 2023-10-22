import Logo from '@components/Logo'
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
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { authStore } from '@stores/authStore'
import Link from '@components/Link'
import { useRef } from 'react'
import links from '@/common/links'
import { SignOutButton } from '@components/buttons'
import Pair from './Pair'

import type { NavLink } from '.'

interface Props {
  navLinks: NavLink[]
  userLinks: NavLink[]
}

function Mobile({ navLinks, userLinks }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const user = authStore((state) => state.currentUser)

  return (
    <Flex align={'center'} justify={'space-between'} w={'full'} px={2}>
      <Logo />
      <Box as='nav' px={4}>
        <Button aria-label='Menu' ref={triggerRef} variant={'ghost'} onClick={onOpen}>
          <HamburgerIcon boxSize={8} />
        </Button>
        <Drawer isOpen={isOpen} placement='right' size={'full'} onClose={onClose} finalFocusRef={triggerRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader as={Flex} direction={'row'} gap={3} align={'center'} fontSize={'xl'}>
              {user !== null ? (
                <>
                  <Avatar name={user.name} src={user.avatar} />
                  <Text>{user.name}</Text>
                </>
              ) : (
                <Heading>
                  <Logo />
                </Heading>
              )}
            </DrawerHeader>
            <DrawerBody fontSize={'lg'}>
              <Stack divider={<StackDivider />}>
                <Stack>
                  {navLinks.map(({ path, title, icon }) => (
                    <Pair key={path} to={path} icon={icon}>
                      <Text>{title}</Text>
                    </Pair>
                  ))}
                </Stack>

                {user ? (
                  <>
                    <Stack>
                      {userLinks.map(({ path, title, icon }) => (
                        <Pair key={path} to={path} icon={icon}>
                          <Text>{title}</Text>
                        </Pair>
                      ))}
                    </Stack>
                    <SignOutButton mt={4} />
                  </>
                ) : (
                  <>
                    {[
                      { path: links.login, title: 'Sign In' },
                      { path: links.register, title: 'Sign Up' },
                    ].map(({ path, title }) => (
                      <Button key={path} as={Link} to={path} my={2}>
                        {title}
                      </Button>
                    ))}
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
