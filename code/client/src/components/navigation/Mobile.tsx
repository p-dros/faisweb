import Logo from '@/components/Logo'
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
import Link from '@ui/Link'
import { useRef } from 'react'
import { authLinks, navLinks, userLinks } from '../../config/links'
import { SignOutButton } from '../auth/buttons'
import IconLink from './IconLink'

function Mobile() {
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
                    <IconLink key={path} to={path} icon={icon}>
                      <Text>{title}</Text>
                    </IconLink>
                  ))}
                </Stack>

                {user ? (
                  <>
                    <Stack>
                      {userLinks.map(({ path, title, icon }) => (
                        <IconLink key={path} to={path} icon={icon}>
                          <Text>{title}</Text>
                        </IconLink>
                      ))}
                    </Stack>
                    <SignOutButton mt={4} />
                  </>
                ) : (
                  <>
                    <IconLink key={authLinks.signIn.path} to={authLinks.signIn.path} icon={authLinks.signIn.icon}>
                      {authLinks.signIn.title}
                    </IconLink>

                    <Button mt={4} as={Link} to={authLinks.signUp.path} variant={'solid'}>
                      {authLinks.signUp.title}
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
