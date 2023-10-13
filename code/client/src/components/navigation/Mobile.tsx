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
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Link from '@ui/Link'
import { useRef } from 'react'
import { navLinks, signInLink, signUpLink } from './links'
import { authStore } from '@stores/authStore'
import Logo from '../ui/Logo'

function Mobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const user = authStore((state) => state.currentUser)

  return (
    <Flex align={'center'} justify={'space-between'} w={'full'}>
      <Logo />
      <Box as='nav' px={4}>
        <Button aria-label='Menu' ref={triggerRef} variant={'ghost'} onClick={onOpen}>
          <HamburgerIcon boxSize={8} />
        </Button>
        <Drawer isOpen={isOpen} placement='right' size={'full'} onClose={onClose} finalFocusRef={triggerRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader as={Flex} direction={'row'} gap={3} align={'center'} fontSize={'3xl'}>
              {user !== null ? (
                <>
                  <Avatar name={user.name} src={user.avatar} />
                  <Flex direction={'column'} justify={'space-around'} h={'full'}>
                    <Text fontSize={'sm'}>{user.username}</Text>
                    <Text fontSize={'xs'} opacity={'0.7'}>
                      {user.name}
                    </Text>
                  </Flex>
                </>
              ) : (
                <>Hello</>
              )}
            </DrawerHeader>
            <DrawerBody>
              <Stack divider={<StackDivider />}>
                {navLinks.map(({ path, title, icon }) => (
                  <Link key={path} to={path} fontSize={'lg'}>
                    <Flex gap={2} align={'center'}>
                      {icon}
                      {title}
                    </Flex>
                  </Link>
                ))}
                <Link to={signInLink.path} fontSize={'lg'}>
                  <Flex gap={2} align={'center'}>
                    {signInLink.icon}
                    {signInLink.title}
                  </Flex>
                </Link>
                <Button as={Link} to={signUpLink.path} variant={'solid'} colorScheme='blue'>
                  {signUpLink.title}
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  )
}

export default Mobile
